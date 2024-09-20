/* eslint-disable prefer-const */
import _ from "lodash";
import qs from "qs";

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getQuery } from "../utils/getQuery";

export const DEFAULT_OPTIONS: UseQueryOptions = {
  refetchInterval: 60000,
  refetchIntervalInBackground: true,
  retry: false,
  retryDelay: (attempt) =>
    Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
  queryKey: [],
};

interface UseRecordsProps<TParams = object> {
  r: string;
  resource?: string;
  options?: UseQueryOptions;
  params?: TParams;
  queryParams?: TParams;
  shouldFetch?: boolean;
}

interface UseRecordsReturn<TData = [], TPagination = object> {
  records: TData;
  pagination?: TPagination;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isEmpty: boolean;
  loadWrapperConfig: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    isEmpty: boolean;
  };
  refetch: () => void;
}

export const useRecords = (props: UseRecordsProps): UseRecordsReturn => {
  /**
   * @WARNING If props is not an object, throw an error
   * @WARNING If resource key given on props, it should be a r
   * @WARNING If queryParams key given on props, it should be a params
   */
  if (!_.isObject(props))
    throw new Error(
      "Consider use useRecords with one named props arg instead of using many sequential args"
    );
  if (props.resource)
    throw new Error(
      'Consider using "r" instead of "resource" as key on useRecord props'
    );
  if (props.queryParams)
    throw new Error(
      'Consider using "params" instead of "query" as key on useRecord props'
    );

  let {
    r,
    shouldFetch = true,
    options = DEFAULT_OPTIONS,
    params = {},
  } = props as UseRecordsProps;

  let path = r;
  path += `${path.includes("?") ? "&" : "?"}${qs.stringify(getQuery(params), {
    arrayFormat: "brackets",
  })}`;
  shouldFetch = typeof shouldFetch == "undefined" || shouldFetch;
  const readyToFetch = !!shouldFetch && !!r && !r.includes("undefined");

  const { isLoading, isError, isSuccess, data, refetch, ...rest } = useQuery({
    queryKey: [path],
    enabled: !!readyToFetch,
    ...options,
  }) as UseQueryResult<UseRecordsReturn>;

  const records = data?.records || [];
  const pagination = data?.pagination;
  const isEmpty = isSuccess && data && records && records.length == 0;
  const supInfo = _.omit(data, ["records", "pagination"]);
  const loadWrapperConfig = { isLoading, isError, isSuccess, isEmpty };

  return {
    records,
    ...supInfo,
    ...rest,
    pagination,

    isLoading,
    isError,
    isSuccess,
    isEmpty,
    loadWrapperConfig,

    refetch,
  };
};

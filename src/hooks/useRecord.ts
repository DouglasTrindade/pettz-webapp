/* eslint-disable prefer-const */
import _ from "lodash";
import qs from "qs";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const DEFAULT_OPTIONS: UseQueryOptions = {
  retry: false,
  retryDelay: (attempt) =>
    Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
  queryKey: [],
};

interface UseRecordProps<TParams = object> {
  r: string;
  resource?: string;
  id?: string | number;
  options?: UseQueryOptions;
  query?: TParams;
  params?: TParams;
  action?: string;
  forceIdPresence?: boolean;
  shouldFetch?: boolean;
}

interface UseRecordReturn<TRecord = object, TErrors = object | []> {
  record?: TRecord | null;
  errors?: TErrors;
  errorStatusCode?: number;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  loadWrapperConfig: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  };
  refetch: () => void;
}

export const useRecord = (props: UseRecordProps): UseRecordReturn => {
  /**
   * @WARNING If props is not an object, throw an error
   * @WARNING If resource key given on props, it should be a r
   * @WARNING If query key given on props, it should be a params
   */
  if (!_.isObject(props))
    throw new Error(
      "Consider use useRecord with one named props arg instead of using many sequential args"
    );
  if (props.resource)
    throw new Error(
      'Consider using "r" instead of "resource" as key on useRecord props'
    );
  if (props.query)
    throw new Error(
      'Consider using "params" instead of "query" as key on useRecord props'
    );

  let {
    r,
    id,
    forceIdPresence = true,
    shouldFetch = true,
    options = DEFAULT_OPTIONS,
    params,
    action,
  } = props as UseRecordProps;

  let path = `${r}${id ? "/" + id : ""}`;
  if (action) path += `/${action}`;
  if (params)
    path += `${path.includes("?") ? "&" : "?"}${qs.stringify(params, {
      arrayFormat: "brackets",
    })}`;
  forceIdPresence = typeof forceIdPresence == "undefined" || forceIdPresence;
  shouldFetch = typeof shouldFetch == "undefined" || shouldFetch;
  const readyToFetch =
    !!shouldFetch &&
    !!r &&
    !r.includes("undefined") &&
    (!!id || !forceIdPresence);

  const { isLoading, isError, isSuccess, data, refetch, ...rest } = useQuery({
    queryKey: [path],
    enabled: readyToFetch,
    ..._.omit(options, ["queryKey"]),
  }) as UseQueryResult<UseRecordReturn>;

  const record = data?.record;
  const errors = data?.errors;
  const errorStatusCode = _.get(rest, "failureReason.response.status");
  const supInfo = _.omit(data, ["record", "errors"]);
  const loadWrapperConfig = { isLoading, isError, isSuccess };

  return {
    record,
    ...supInfo,
    ...rest,

    errors,
    errorStatusCode,

    isLoading,
    isError,
    isSuccess,
    loadWrapperConfig,

    refetch,
  };
};

export default useRecord;

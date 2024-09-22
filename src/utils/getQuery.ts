import _ from "lodash";

interface GetQueryProps<TSort = { field: string; order: string }> {
  pagination?: {
    page?: number;
    per_page?: number;
    perPage?: number;
  };
  sort?: TSort | Array<TSort>;
  filter?: object;
  params?: object;
}

interface GetQueryResult {
  page?: number;
  per_page?: number;
  q?: {
    s: string | string[];
  };
}

const PAGINATION_DEFAULT_PAGE = 1;
const PAGINATION_DEFAULT_PER_PAGE = 12;

export const getQuery = (query: GetQueryProps): GetQueryResult => {
  // eslint-disable-next-line prefer-const
  let { pagination = {}, sort, filter = {}, params = {}, ...rest } = query;
  const { page, per_page, perPage } = pagination;

  const queryResult = {
    page: page || PAGINATION_DEFAULT_PAGE,
    per_page: per_page || perPage || PAGINATION_DEFAULT_PER_PAGE,
    q: {
      ...filter,
      s: sort
        ? _.isArray(sort)
          ? sort.map((s) => `${s.field} ${s.order}`)
          : `${sort.field} ${sort.order}`
        : "created_at desc",
    },
    ...params,
    ...rest,
  } as GetQueryResult;

  return queryResult;
};

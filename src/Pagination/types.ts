export type SetPageOptions = {
  next?: boolean;
  prev?: boolean;
  first?: boolean;
  last?: boolean;
  page?: number;
};

export type PaginationRenderProps = {
  setPage: (options: SetPageOptions) => void;
  page: number;
  index: number;
};

export type PaginationProps = {
  initialPage: number;
  pageCount: number;
  onChange: (page: number) => void;
  children: (renderProps: PaginationRenderProps) => React.Component;
};

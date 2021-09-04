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
  currentPage: number;
  isCurrentPage: boolean;
};

/**
 * PaginationProps: Props passed to Pagination component.
 */
export type PaginationProps = {
  /**
   * initialPage: page to start paginating from.
   * defaults to 1.
   */
  initialPage?: number;
  /**
   * pageCount: total number of pages to paginate.
   */
  pageCount: number;
  /**
   * show: number of pages to display at once.
   * defaults to pageCount.
   */
  show?: number;
  /**
   * onChange: Callback that receives the next current page.
   */
  onChange?: (page: number) => void;
  /**
   * children: Render props that receives PaginationRenderProps and returns a React component.
   * Example:
   * const children: React.FunctionComponent<PaginationRenderProps> = ({
      page,
      index,
      currentPage,
      isCurrentPage,
      setPage
    }) => (
      <div
        className="item"
        key={index}
        style={{ backgroundColor: isCurrentPage ? "yellow" : "white" }}
        onClick={() => {
          console.log(`Navigating from page ${currentPage} to page ${page}`);
          setPage({ page });
        }}>
        <h1>{page}</h1>
      </div>
    );
   */
  children: (renderProps: PaginationRenderProps) => React.Component;
};

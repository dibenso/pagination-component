/**
 * SetPageOptions: Options passed to the `setPage` callback of PaginationRenderProps.
 */
export type SetPageOptions = {
  /**
   * next: paginate to the next page.
   */
  next?: boolean;
  /**
   * prev: paginate to the previous page.
   */
  prev?: boolean;
  /**
   * first: paginate to the first page.
   */
  first?: boolean;
  /**
   * last: paginate to the last page.
   */
  last?: boolean;
  /**
   * page: paginate to a specified page.
   */
  page?: number;
};

/**
 * PaginationRenderProps: render props (children) for Pagination component.
 *
 * Check the `children` property of PaginationProps for more information.
 */
export type PaginationRenderProps = {
  /**
   * setPage: Callback used to set the current page.
   *
   * Examples:
   * setPage({ next: true })      // set current page to next page
   *
   * setPage({ prev: true })      // set current page to previous page
   *
   * setPage({ first: true })     // set current page to first page
   *
   * setPage({ last: true })      // set current page to last page
   *
   * setPage({ page: 4 })         // set current page to 4th page
   */
  setPage: (options: SetPageOptions) => void;
  /**
   * page: Indicates which page is currently being rendered.
   */
  page: number;
  /**
   * index: Indicates the index of the page that is currently being rendered.
   */
  index: number;
  /**
   * currentPage: Indicates the active page in pagination.
   */
  currentPage: number;
  /**
   * isCurrentPage: Indicates if the current page being rendered is the active page.
   */
  isCurrentPage: boolean;
  /**
   * isPrev: Indicates if the current page being rendered should be treated
   * as a control to go to the previous page.
   */
  isPrev: boolean;
  /**
   * isNext: Indicates if the current page being rendered should be treated
   * as a control to go to the next page.
   */
  isNext: boolean;
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
   * defaults to 10
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

import React from "react";
import { pagingRange } from "../util";
import { PaginationProps } from "./types";
import { usePagination } from "./usePagination";

const Pagination: React.FunctionComponent<PaginationProps> = ({
  initialPage = 1,
  pageCount = initialPage,
  show = 10,
  onChange,
  children
}: PaginationProps) => {
  const pagination = usePagination({ initialPage, pageCount, onChange, children });

  return (
    <>
      {!pagination.isFirstPage() && children({ ...pagination, isPrev: true })}
      {pagingRange(pagination.currentPage, { total: pageCount, length: show }).map((page, index) =>
        children({ ...pagination, page, index, isCurrentPage: page === pagination.currentPage })
      )}
      {!pagination.isLastPage() && children({ ...pagination, isNext: true })}
    </>
  );
};

export default Pagination;

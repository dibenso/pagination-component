import { useState } from "react";
import { PaginationProps, SetPageOptions, PaginationHook } from "./types";

export default function usePagination({
  initialPage = 1,
  pageCount = initialPage,
  onChange
}: PaginationProps): PaginationHook {
  if (initialPage > pageCount) throw new Error("`initialPage` prop must be less than or equal to `pageCount` prop.");

  const [currentPage, setCurrentPage] = useState(initialPage);
  const setCurrentPageToNext = (): number => {
    // if (currentPage + 1) <= pageCount
    // set currentPage to currentPage + 1
    if (currentPage + 1 <= pageCount) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      return newPage;
    }

    throw new Error(`Current page must be less than or equal to ${pageCount}.`);
  };
  const setCurrentPageToPrev = (): number => {
    // check if currentPage is > 1
    // set currentPage to currentPage - 1
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      return newPage;
    }

    throw new Error("Current page must be greater than or equal to 1.");
  };
  const setCurrentPageToFirst = (): number => {
    setCurrentPage(1);
    return 1;
  };
  const setCurrentPageToLast = (): number => {
    setCurrentPage(pageCount);
    return pageCount;
  };
  const setCurrentPageToPage = (page: number): number => {
    // check if page is in inclusive range from 1 to pageCount
    // set currentPage to page
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
      return page;
    }

    throw new Error(`Page must be between 1 and ${pageCount} inclusive.`);
  };
  const setPage = ({ next, prev, first, last, page }: SetPageOptions) => {
    let newPage = currentPage;

    // set page depending on page options passed
    if (next) newPage = setCurrentPageToNext();
    else if (prev) newPage = setCurrentPageToPrev();
    else if (first) newPage = setCurrentPageToFirst();
    else if (last) newPage = setCurrentPageToLast();
    else if (page) newPage = setCurrentPageToPage(page);

    if (onChange) onChange(newPage);
  };
  const isFirstPage = () => currentPage === 1;
  const isLastPage = () => currentPage === pageCount;
  return {
    setPage,
    page: 0,
    index: 0,
    currentPage,
    isCurrentPage: false,
    isPrev: false,
    isNext: false,
    isFirstPage,
    isLastPage
  } as PaginationHook;
}

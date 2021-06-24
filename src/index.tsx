import React from "react";

interface PaginationProps {
  pageCount: number;
}

export default function Pagination({ pageCount }: PaginationProps): JSX.Element {
  return <h1>{`${pageCount} pages`}</h1>;
}

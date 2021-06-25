import React from "react";
import { range } from "./util";

export interface PaginationProps {
  page: number;
  pageCount: number;
  containerStyle?: Record<string, unknown>;
  pageStyle?: Record<string, unknown>;
}

const defaultProps = {
  containerStyle: {},
  pageStyle: {}
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  page,
  pageCount,
  containerStyle,
  pageStyle
}: PaginationProps) => {
  if (page > pageCount) return null;

  return (
    <div style={containerStyle || defaultProps.containerStyle}>
      {range(pageCount).map((pageNumber, index) => (
        <p key={index} style={pageStyle || defaultProps.pageStyle}>
          {page + index}
        </p>
      ))}
    </div>
  );
};

export default Pagination;

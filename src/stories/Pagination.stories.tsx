import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "../Pagination/Pagination";
import { PaginationRenderProps, PaginationProps } from "../Pagination/types";
import "./Pagination.css";

const PaginationContainer: React.FunctionComponent<PaginationProps> = ({
  initialPage,
  pageCount,
  onChange,
  children
}: PaginationProps) => (
  <div className="container">
    <Pagination initialPage={initialPage} pageCount={pageCount} onChange={onChange}>
      {children}
    </Pagination>
  </div>
);

export default {
  title: "Pagination",
  component: PaginationContainer
} as ComponentMeta<typeof PaginationContainer>;

const Template: ComponentStory<typeof PaginationContainer> = args => <PaginationContainer {...args} />;

const children: React.FunctionComponent<PaginationRenderProps> = ({
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

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  initialPage: 1,
  pageCount: 1024,
  show: 10,
  onChange: page => console.log(`Going to page ${page}`),
  children
};

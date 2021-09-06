import * as React from "react";
import { mount } from "enzyme";
import Pagination from "../Pagination";

const defaultProps = {
  initialPage: 1,
  show: 10,
  pageCount: 1024
};
const paginationComponent = ({ initialPage, show, pageCount } = defaultProps) => (
  <div>
    <Pagination initialPage={initialPage} show={show} pageCount={pageCount} onChange={page => console.log(page)}>
      {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
        {
          if (isPrev)
            return (
              <div className="prevControl" onClick={() => setPage({ prev: true })}>
                Previous
              </div>
            );

          if (isNext)
            return (
              <div className="nextControl" onClick={() => setPage({ next: true })}>
                Next
              </div>
            );

          return (
            <div
              className="pageControl"
              key={index}
              style={{ backgroundColor: isCurrentPage ? "yellow" : "white" }}
              onClick={() => {
                console.log(`Navigating from page ${currentPage} to page ${page}`);
                setPage({ page });
              }}>
              <h1>{page}</h1>
            </div>
          );
        }
      }}
    </Pagination>
  </div>
);

describe("Pagination", () => {
  it("should render the correct amount of children", () => {
    const pagination = mount(paginationComponent({ ...defaultProps, initialPage: 2 }));

    expect(pagination.find("div.pageControl")).toHaveLength(10);
    expect(pagination.find("div.prevControl")).toHaveLength(1);
    expect(pagination.find("div.nextControl")).toHaveLength(1);
  });

  it("should not render the `previous` control when the current page is the first page", () => {
    const pagination = mount(paginationComponent());

    expect(pagination.find("div.prevControl")).toHaveLength(0);
  });

  it("should not render the `next` control when the current page is the last page", () => {
    const pagination = mount(paginationComponent({ ...defaultProps, initialPage: defaultProps.pageCount }));

    expect(pagination.find("div.nextControl")).toHaveLength(0);
  });
});

import * as React from "react";
import { mount } from "enzyme";
import Pagination from "../Pagination";

test("Pagination should render the correct amount of children", () => {
  const pagination = mount(
    <div>
      <Pagination initialPage={1} show={10} pageCount={1024} onChange={page => console.log(page)}>
        {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
          {
            if (isPrev)
              return (
                <div className="item" onClick={() => setPage({ prev: true })}>
                  Previous
                </div>
              );

            if (isNext)
              return (
                <div className="item" onClick={() => setPage({ next: true })}>
                  Next
                </div>
              );

            return (
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
          }
        }}
      </Pagination>
    </div>
  );

  expect(pagination.find("div.item").length).toBe(12);
});

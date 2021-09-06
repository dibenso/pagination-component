# pagination-component ![npm](https://img.shields.io/npm/v/pagination-component) ![pagination-component build](https://github.com/dibenso/pagination-component/actions/workflows/node.js.yml/badge.svg)
A React component that provides pagination utilities     

## Installation:
```sh
# npm
npm install --save pagination-component
# yarn
yarn add pagination-component
```     

## Example:
```javascript
import React from "react";
import Pagination from "pagination-component";

const containerStyle = {
  backgroundColor: "black",
  padding: "10px",
  borderRadius: "10px",
  height: "100px"
};
const itemStyle = {
  float: "left",
  marginLeft: "5px",
  marginRight: "5px",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
  width: "50px",
  textAlign: "center",
  borderRadius: "5px"
};

const Paginator = () => (
  <div style={containerStyle}>
    <Pagination initialPage={1} show={10} pageCount={1024} onChange={page => console.log(page)}>
      {({ setPage, page, index, currentPage, isPrev, isNext, isCurrentPage }) => {
        if (isPrev)
          return (
            <div style={itemStyle} onClick={() => setPage({ prev: true })}>
              Previous
            </div>
          );

        if (isNext)
          return (
            <div style={itemStyle} onClick={() => setPage({ next: true })}>
              Next
            </div>
          );

        return (
          <div
            key={index}
            style={{ ...itemStyle, backgroundColor: isCurrentPage ? "yellow" : "white" }}
            onClick={() => {
              console.log(`Navigating from page ${currentPage} to page ${page}`);
              setPage({ page });
            }}>
            <h1>{page}</h1>
          </div>
        );
      }}
    </Pagination>
  </div>
);
```

## Pagination Props:
| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| `initialPage` | `number` | Page to start paginating from. | 1 |
| `pageCount` | `number` | Total number of pages to paginate. | N/A |
| `show` | `number` | Number of page controls to show at once (excluding `prev` and `next` controls). | 10 |
| `onChange` | `((page: number) => void) \| undefined` | Callback that receives the next current page. | undefined |
| `children` | `(renderProps: PaginationRenderProps) => ReactNode` | Render props that receives `PaginationRenderProps` and returns a React Node (check table below for more info). | undefined |

## Pagination render props
| Render prop | Type | Description |
| --- | --- | --- |
| `setPage` | `(options: SetPageOptions) => void` | Callback used to set the current page. <br />Examples:<br /><br />`setPage({ next: true })      // set current page to next page` <br /> `setPage({ prev: true })      // set current page to previous page` <br /> `setPage({ first: true })     // set current page to first page` <br /> `setPage({ last: true })      // set current page to last page` <br /> `setPage({ page: 4 })         // set current page to 4th page` <br /><br />Check table below for more info. |
| `page` | `number` | Indicates which page is currently being rendered. |
| `index` | `number` | Indicates the index of the page that is currently being rendered (from 0 to `show` - 1). |
| `currentPage` | `number` | Indicates the active page in pagination. |
| `isCurrentPage` | `boolean` | Indicates if the current page control being rendered is the active page control. |
| `isPrev` | `boolean` | Indicates if the current page control being rendered should be treated as a control to go to the previous page. |
| `isNext` | `boolean` | Indicates if the current page control being rendered should be treated as a control to go to the next page. |     

## SetPageOptions
| Option | Type | Description |
| --- | --- | --- |
| `next` | `boolean` | Paginate to the next page. |
| `prev` | `boolean` | Paginate to the previous page. |
| `first` | `boolean` | Paginate to the first page. |
| `last` | `boolean` | Paginate to the last page. |
| `page` | `number` | Paginate to a specified page. |

## Contributing
1. Fork it :fork_and_knife:
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :smiley:         

For more, check out [CONTRIBUTING.md](https://github.com/dibenso/pagination-component/blob/main/CONTRIBUTING.md)

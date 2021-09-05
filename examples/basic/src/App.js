import Pagination from "pagination-component";
import "./App.css";

function App() {
  return (
    <Pagination initialPage={1} pageCount={1024} onChange={page => console.log(`Going to page ${page}`)}>
      {({
        page,
        index,
        currentPage,
        isCurrentPage,
        isPrev,
        isNext,
        setPage
      }) => {
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
      }}
    </Pagination>
  );
}

export default App;

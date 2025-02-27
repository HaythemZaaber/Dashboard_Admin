import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, data, itemsPerPage, currentPage }) => {
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {data.length > itemsPerPage && (
        <ReactPaginate
          previousLabel={currentPage === 0 ? "" : "← Previous"}
          nextLabel={currentPage === pageCount - 1 ? "" : "Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination-container"
          previousLinkClassName={`pagination-link ${
            currentPage === 0 ? "hidden" : ""
          }`}
          nextLinkClassName={`pagination-link ${
            currentPage === pageCount - 1 ? "hidden" : ""
          }`}
          activeLinkClassName="pagination-active"
          pageLinkClassName="pagination-link"
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
        />
      )}
    </>
  );
};

export default Pagination;

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (min-width: 769px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="flex text-white bg-transparent justify-center items-center gap-3 mt-1 "
        nextLabel="next >>"
        previousLabel="<< prev"
        breakLabel="..."
        forcePage={pageNumber - 1}
        breakClassName="break-me"
        containerClassName="flex"
        previousClassName={`m-1 px-4 py-2 bg-gray-700 rounded-md ${pageNumber === 1 ? 'bg-gray-300 pointer-events-none' : ''}`}
        nextClassName={`m-1 px-4 py-2 bg-gray-700 rounded-md ${pageNumber === info?.pages ? 'bg-gray-300 pointer-events-none' : ''}`}
        activeClassName="bg-green-800 text-white text-lg py-2 px-3 rounded-xl hover:bg-green-600"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="text-white rounded-xl "
      />
    </>
  );
};

export default Pagination;
import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { totalMovie, moviePerPage, onPageChange, currentPage } = props;
  const pageCount = totalMovie / moviePerPage;
  // const p = handlePrint(pageCount);

  // if (totalMovie === moviePerPage * (currentPage - 1))
  //   onPageChange(currentPage - 1);
  if (pageCount <= 1) return null;
  const arrOfindex = _.range(1, pageCount + 1);
  return (
    <nav style={{ display: "block" }}>
      {/* <ul className="pagination">{p}</ul> */}
      <ul className="pagination">
        {arrOfindex.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
// const handlePrint = (pageCount) => {
//   let arr = [];
//   for (let index = 0; index < pageCount; index++) {
//     arr.push(
//       <li key={index} className="page-item">
//         <a className="page-link"></a>
//         {index + 1}
//       </li>
//     );
//   }
//   console.log(arr);
//   return arr;
// };
export default Pagination;

import PropTypes from "prop-types"
import React from 'react'
import "./pagination.css"
function Pagination(props){
  const getNumbers = () => {
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;
    // i<total number of pages (couunt)
    for (let i = 0; i < props.count; i += itemsPerPage) {
      const page = pageNumber;
      let style = "pagination-number";
      let content = null;

      // if pagenum is active do this
      if (props.active === page) {
        style = 'pagination-number pagination-number--active';
        // show the pageNumber by default is 1
        content = (
          <div key={i} className={style}>
            {pageNumber}
          </div>
        );
      } else {
        content = (
          <div
            key={i}
            onClick={() => props.visitPage(page)}
            className={style}
          >
            {pageNumber}
          </div>
        );
      }
      numbers.push(content);
      pageNumber++;
    }
    return numbers;
  };
  
  return (
    <div className="flex items-center justify-center">
      <div
        type="button"
        // taken previous as props from service
        onClick={() => props.previous()}
        className="pagination-button"
      >
        Previous
      </div>
  
      {getNumbers()}
  
      <div
      // taken next as props from service
        onClick={() => props.next()}
        className="pagination-button"
      >
        Next
      </div>
    </div>
  );
}

Pagination.propTypes = {
  itemsPerPage:PropTypes.number.isRequired,
  count:PropTypes.number,
  active:PropTypes.number.isRequired,
  visitPage:PropTypes.func.isRequired,
  previous:PropTypes.func.isRequired,
  next:PropTypes.func.isRequired,
}
export default Pagination
import React from 'react';
import './pagination.css';

export const Pagination = ({ picsPerPage, totalPics, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
        <div id="page_container">
          {pageNumbers.map((number) => (
              <a key={number} onClick={() => paginate(number)}href="!#" id="pageLinks">
                {number}
              </a>
          ))}
        </div>
  );
}
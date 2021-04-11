import React from 'react';
import './Index.css';

export const Pagination = ({ picsPerPage, totalPics, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <a onClick={() => paginate(number)}href="!#" className="page-link">
                {number}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
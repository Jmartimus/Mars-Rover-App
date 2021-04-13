import React from 'react';
import './pagination.css';

export const Pagination = ({ picsPerPage, totalPics, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const addId = () => {
  //   if (pageNumbers.length > 8) {
  //     const dropDown = document.getElementById("dropdown-content");
  //     dropDown.id = ("showDropdown-content")
  //   }
  // }

  return (
        <div id="page_container">
          {pageNumbers.slice(0,8).map((number) => (
              <a key={number} onClick={() => paginate(number)}href="!#" id="pageLinks1-8">
                {number}
              </a>
          ))}
      {pageNumbers.length > 8 ? <div id="dropdown"><button className= "dropmenu" id="dropbtn">...</button><div className="dropdown-content">{pageNumbers.slice(8).map((number) => (
        <a key={number} onClick={() => paginate(number)} href="!#" id="pageLinks9-" className="extraPages">
          {number}
        </a>
      ))}</div></div> : ''}
        </div>
  );
};

//create a state for currentPage for the css and figure out why extra buttons won't stay.
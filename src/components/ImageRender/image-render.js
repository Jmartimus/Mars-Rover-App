import React, { useState } from 'react';
import { photo, loading } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Pagination } from '../Pagination/pagination.js';
import { Spinner } from '../Spinner/spinner';
import { useNasa } from '../../apis/useNasa';
import './image-render.css';

export const ImageRender = () => {
  useNasa();
  const currentlyLoading = useRecoilValue(loading);
  const marsPhoto = useRecoilValue(photo);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage] = useState(9);
  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirstPic = indexOfLastPic - picsPerPage;
  const currentPics = marsPhoto.picArray.photos
    ? marsPhoto.picArray.photos.slice(indexOfFirstPic, indexOfLastPic)
    : '';
  const totalPics = marsPhoto.picArray.photos
    ? marsPhoto.picArray.photos.length
    : '';
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const noPics = () => {
    if (currentPics) {
      if (currentPics.length === 0) {
        return <p id="noPics">Sorry, no pics for this day. Pick another date.</p>;
      }
    }
  }
  // console.log(currentlyLoading.loading);
  // const loadingSpin = () => {
  //   if (currentlyLoading.loading === false) {
  //     return <p>no loading</p>
  //   } else { return <p>loading....</p>}
  // }

  return (
    <div id="container">
      {!currentPics
        ? <p id="instructions">Pick a date above to see pictures of the Mars surface taken on that day...</p> 
        : currentPics.map((currentPics) => {
          return (
            <img
              id="pics"
              src={currentPics.img_src}
              alt="Pictures on mars"
              key={currentPics.id}
            />
          );
        })}
      {noPics()}
      {/* {loadingSpin()} */}
      <Pagination
        picsPerPage={picsPerPage}
        totalPics={totalPics}
        paginate={paginate}
      />
    </div>
  );
};
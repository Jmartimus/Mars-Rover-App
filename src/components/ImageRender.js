import React, { useState } from 'react';
import { photo, loading } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Spinner } from './Spinner';
import { Pagination } from './Pagination';
import { useNasa } from '../apis/useNasa';
import './ImageRender.css';

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
  const totalPics = marsPhoto.picArray.photos ? marsPhoto.picArray.photos.length : '';
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div id="container">
      {currentPics
        ? currentPics.map((currentPics) => {
          return (
            <img
                  id="pics"
                  src={currentPics.img_src}
                  alt="mars"
                  key={currentPics.id}
              ></img>
            );
          })
        : ''}
      <Pagination picsPerPage={picsPerPage} totalPics={totalPics} paginate={paginate}/>
    </div>
  );
};

// {marsPhoto.picArray.photos
//   ? marsPhoto.picArray.photos.map(pics => {
//     return <img id="pics" src={pics.img_src} alt="mars" key={pics.id}></img>;
//   })
// : "Choose a date..."}
// {marsPhoto.picArray.photos
//   ? <img id="pics" src={marsPhoto.picArray.photos[0].img_src} alt="mars"></img>
// : ""}

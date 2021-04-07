import React, {useState} from 'react';
import { photo, loading } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Spinner } from './Spinner';
import { Nasa } from '../apis/nasa';
import './ImageRender.css';

export const ImageRender = () => {
  Nasa();
  const currentlyLoading = useRecoilValue(loading);
  const marsPhoto = useRecoilValue(photo);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage, setPicsPerPage] = useState(10);
 
// 13:50 on pagination video => totalposts?, figure out how to fix spinner

  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirstPic = indexOfLastPic - picsPerPage;
  const currentPics = marsPhoto.picArray.photos ? marsPhoto.picArray.photos.slice(indexOfFirstPic, indexOfLastPic) : '';
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / picsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div id="picContainer">
        {currentPics
  ? currentPics.map(currentPics => {
    return<div><img id="pics" src={currentPics.img_src} alt="mars" key={currentPics.id}></img></div>;})
          : ''}
      </div>);
}

// {marsPhoto.picArray.photos
//   ? marsPhoto.picArray.photos.map(pics => {
//     return <img id="pics" src={pics.img_src} alt="mars" key={pics.id}></img>;
//   })
// : "Choose a date..."}
// {marsPhoto.picArray.photos
//   ? <img id="pics" src={marsPhoto.picArray.photos[0].img_src} alt="mars"></img>
// : ""}

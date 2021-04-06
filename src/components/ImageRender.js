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
  const [postsPerPage, setPostsPerPage] = useState(10);
 
// 9:23 on pagination video, figure out how to fix spinner

  return (
    <div id="picContainer">
      {/* <Spinner /> */}
        {marsPhoto.picArray.photos
  ? marsPhoto.picArray.photos.map(pics => {
    return<img id="pics" src={pics.img_src} alt="mars" key={pics.id}></img>;})
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

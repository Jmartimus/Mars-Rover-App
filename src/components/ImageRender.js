import React from 'react';
import { photo } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Nasa } from '../apis/nasa';
import './ImageRender.css'

export const ImageRender = () => {
  Nasa();
  const marsPhoto = useRecoilValue(photo);
    return (
      <div id="picContainer">
        {marsPhoto.picArray.photos
          ? marsPhoto.picArray.photos.map(pics => {
            return <img id="pics" src={pics.img_src} alt="mars" key={pics.id}></img>;
          })
        : "Choose a date..."}
      </div>);
  }

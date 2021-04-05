import React, {useState} from 'react';
import { photo } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Nasa } from '../apis/nasa';

export const ImageRender = () => {
  Nasa();
  const marsPhoto = useRecoilValue(photo);
  console.log({ marsPhoto });
  if (marsPhoto) {
    return <div>loading...</div>;
  } else {
    return (
      <div>{marsPhoto.picArray.photos.map((pics) => {
        <img src={marsPhoto.picArray.photos.img_src} alt="mars"></img>;
      })}</div>);
  }
}


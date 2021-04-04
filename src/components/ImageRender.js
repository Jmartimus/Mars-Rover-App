import React from 'react';
import { photo } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Nasa } from '../apis/nasa';

export const ImageRender = () => {
  Nasa();
  const marsPhoto = useRecoilValue(photo);
  console.log({marsPhoto});
  return (
    <>
      <h1>hello</h1>

      {/* <img
        id={pic.photos.id}
        src={pic.photos[0].img_src}
        alt="mars surface" */}
      {/* /> */}
    </>
  )
}

 // const currentPhoto = marsPhoto.photos[0].img_src;
/* <img src={photo.photos[0].img_src} alt="mars"></img> */
{/* <img
      id={pic.photos.id}
      src={pic.photos[0].img_src}
      alt="mars surface"
    ></img>))} */}
 
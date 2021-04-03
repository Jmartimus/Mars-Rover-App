import React from 'react';
import './App.css';
import {photo} from '../recoil/atoms';
import { useRecoilValue } from 'recoil';
import {DateChoice} from './DateChoice'

function App() {

  const marsPhoto = useRecoilValue(photo);
  // const currentPhoto = marsPhoto.photos[0].img_src;
return (
  <div>
    <DateChoice />
    <img src={marsPhoto.src}></img>
    {/* <img src={photo.photos[0].img_src} alt="mars"></img> */}
  </div>
);
}

export default App;

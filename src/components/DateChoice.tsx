import React from 'react';
import { photoDateState as photoDateState } from '../recoil/Atoms';
import { useRecoilState } from 'recoil';

export const DateChoice = () => {
  const [photoDate, setPhotoDate] = useRecoilState(photoDateState);

  const getPhotoInputs = () => {
    setPhotoDate({
      year: photoDate.year,
      month: photoDate.month,
      day: photoDate.day
    });
  }
  return (
    <div>
      <input value={photoDate.year} type="text" placeholder="ex. 2018"></input>
      <input value={photoDate.month} type="text" placeholder="ex. 11"></input>
      <input value={photoDate.day} type="text" placeholder="ex. 10"></input>
      <button onClick={getPhotoInputs}></button>
    </div>
  );
}
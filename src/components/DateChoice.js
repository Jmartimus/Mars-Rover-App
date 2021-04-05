import React, { useState } from 'react';
import { photoDateState} from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';

export const DateChoice = () => {
  const setPhotoDate = useSetRecoilState(photoDateState);
  const [date, setDate] = useState({
      year: '',
      month: '',
      day: ''})

  const getPhotoInputs = () => {
    setPhotoDate({
      year: date.year,
      month: date.month,
      day: date.day
    });
  }
  return (
    <div>
      <input
        value={date.year}
        type="text"
        placeholder="ex. 2018"
        onChange={(e) =>
          setDate({
            year: e.target.value,
            month: date.month,
            day: date.day,
          })
        }
      />
      <input
        value={date.month}
        type="text"
        placeholder="ex. 11"
        onChange={(e) =>
          setDate({
            year: date.year,
            month: e.target.value,
            day: date.day,
          })
        }
      />
      <input
        value={date.day}
        type="text"
        placeholder="ex. 10"
        onChange={(e) =>
          setDate({
            year: date.year,
            month: date.month,
            day: e.target.value,
          })
        }
      />
      <button onClick={getPhotoInputs}>find photo</button>
    </div>
  );
}
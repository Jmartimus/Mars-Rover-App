import React, { useState } from 'react';
import { photoDateState } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Index.css';

export const DateChoice = () => {
  const setPhotoDate = useSetRecoilState(photoDateState);
  const [startDate, setStartDate] = useState(null);
  const newDate = startDate ? startDate.toISOString().split('T')[0] : '';
  setPhotoDate({
    chosenDate: newDate,
  });

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        isClearable
        placeholderText="Enter a date!"
        minDate={new Date('2015-11-30')}
        maxDate={new Date()}
        showMonthDropdown
        showYearDropdown
        showDisabledMonthNavigation
        className='react-datepicker-wrapper react-datepicker'
      />
    </div>
  );
};

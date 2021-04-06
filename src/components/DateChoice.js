import React, { useState } from 'react';
import { photoDateState} from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';

const years = [{ year: '2015' }, { year: '2016' }, { year: '2017' }, { year: '2018' }, { year: '2019' }, { year: '2020' }, { year: '2021' }];
const months = [{ month: '01', name: 'January' }, { month: '02', name: 'February' }, { month: '03', name: 'March' }, { month: '04', name: 'April' }, { month: '05', name: 'May' }, { month: '06', name: 'June' }, { month: '07', name: 'July' }, { month: '08', name: 'August' }, { month: '09', name: 'September' }, { month: '10', name: 'October' }, { month: '11', name: 'November' }, { month: '12', name: 'December' }];
const days = [{ day: '01'}, { day: '02'}, { day: '03'}, { day: '04'}, { day: '05'}, { day:'06'}, { day: '07'}, { day: '08'}, { day: '09'}, { day: '10'}, { day: '11'}, {day: '12'},{ day: '13'}, { day: '14'}, { day: '15'}, { day: '16'}, { day: '17'}, { day:'18'}, { day: '19'}, { day: '20'}, { day: '21'}, { day: '22'}, { day: '23'}, {day: '24'}, { day: '25'}, { day: '26'}, { day: '27'}, { day: '28'}, {day: '29'} , { day: '30'}, {day: '31'}];


export const DateChoice = () => {
  const setPhotoDate = useSetRecoilState(photoDateState);
  const [date, setDate] = useState({
      year: '',
      month: '',
    day: ''
  })

  const getPhotoInputs = () => {
    setPhotoDate({
      year: date.year,
      month: date.month,
      day: date.day
    });
    console.log(date)
  }
  
  return (
    <div>
      <label for="year">Choose a year:</label>
      <select id="yearDropDown" name="year" value={date.year} onChange={(e) => setDate({
            year: e.target.value,
            month: date.month,
            day: date.day,
          })}>
        {years.map(year => (
          <option value={year.year} key={year.year}>{year.year}</option>
        ))}
      </select>
      <label for="month">Choose a month:</label>
      <select id="monthDropDown" name="month" value={date.month} onChange={(e) => setDate({
            year: date.year,
            month: e.target.value,
            day: date.day,
          })}>
        {months.map(month => (
          <option value={month.month} key={month.month}>{month.name}</option>
        ))}
      </select>
      <label for="day">Choose a day:</label>
      <select id="dayDropDown" name="day" value={date.day} onChange={(e) => setDate({
            year: date.year,
            month: date.month,
            day: e.target.value,
          })}>
        {days.map(day => (
          <option value={day.day} key={day.day}>{day.day}</option>
        ))}
      </select>
      <button onClick={getPhotoInputs}>find photo</button>
    </div>
    
  );
};
import React, { useState } from 'react';
import { photoDateState, resetDate } from '../../recoil/atoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import deepOrange from '@material-ui/core/colors/deepOrange';
import 'date-fns';
import './date-choice.scss';

export const DateChoice = () => {
  const setPhotoDate = useSetRecoilState(photoDateState);
  const dateResetter = useRecoilValue(resetDate);
  const [selectedDate, setSelectedDate] = useState('');
  const setResetDateValue = useSetRecoilState(resetDate);
  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: deepOrange,
    },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const newDate = date ? date.toISOString().split('T')[0] : '';
    setPhotoDate({
      chosenDate: newDate,
    });
  };

  const labelFormatter = () => {
    if (selectedDate === '') {
      return 'Click here...';
    } else if (selectedDate !== '' && dateResetter.reset === true) {
      let message = 'Click here...';
      return message;
    } else if (selectedDate !== '' && dateResetter.reset === false) {
      return selectedDate.toLocaleString('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'long',
      });
    }
    setResetDateValue({
      reset: false,
    });
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          margin="normal"
          id="date-picker-dialog"
          labelFunc={labelFormatter}
          disableFuture={true}
          invalidDateMessage=""
          minDate={new Date('2015-11-30')}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          clearable
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

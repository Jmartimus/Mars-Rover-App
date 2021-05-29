import React, { useState } from 'react';
import { photoDateState} from '../../recoil/atoms';
import { useSetRecoilState} from 'recoil';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import deepOrange from '@material-ui/core/colors/deepOrange';
import 'date-fns';
import './date-choice.scss';

export const DateChoice = () => {
  const setPhotoDate = useSetRecoilState(photoDateState);
  const [selectedDate, setSelectedDate] = useState(new Date());
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

  return (
    <div>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            cancelLabel
            disableFuture={true}
            invalidDateMessage=""
            minDate={new Date('2015-11-30')}
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            clearable
            todayLabel
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
};

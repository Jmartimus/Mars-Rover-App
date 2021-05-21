import React from 'react';
import { useSetRecoilState } from 'recoil';
import { photo, photoDateState, resetDate } from '../../recoil/atoms';
import Button from '@material-ui/core/Button';
import './reset.scss';

export const Reset = () => {
  const setResetPhotos = useSetRecoilState(photo);
  const setResetDate = useSetRecoilState(photoDateState);
  const setResetDateValue = useSetRecoilState(resetDate);

  const resetApp = () => {
    setResetPhotos({
      picArray: [],
    });
    setResetDate({
      chosenDate: '',
    });
    setResetDateValue({
      reset: true,
    });
  };
  return (
    <div>
      <Button id="resetBtn" onClick={() => resetApp()} variant="outlined">
        Reset
      </Button>
    </div>
  );
};

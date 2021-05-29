import React from 'react';
import { useSetRecoilState } from 'recoil';
import { photo, photoDateState} from '../../recoil/atoms';
import Button from '@material-ui/core/Button';
import './reset.scss';

export const Reset = () => {
  const setResetPhotos = useSetRecoilState(photo);
  const setResetDate = useSetRecoilState(photoDateState);

  const resetApp = () => {
    setResetPhotos({
      picArray: [],
    });
    setResetDate({
      chosenDate: '',
    });
  };
  return (
    <Button id="resetBtn" onClick={() => resetApp()} variant="outlined">
      Reset
    </Button>
  );
};

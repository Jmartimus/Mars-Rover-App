import axios from 'axios';
import { useEffect } from 'react';
import { photoDateState, photo, loading} from '../recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {KEY} from '../key'


export const useNasa = () => {
  const setLoading = useSetRecoilState(loading);
  const setCurrentPhoto = useSetRecoilState(photo);
  const date = useRecoilValue(photoDateState);
  const chosenDate = date.chosenDate;
  const useKEY = KEY;


  useEffect(() => {
    const fetchPics = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${chosenDate}&api_key=${useKEY}`);
      setCurrentPhoto({
        picArray: res.data
      });
      setLoading(false);
    };
    fetchPics();

  }, [chosenDate, setCurrentPhoto, setLoading, useKEY]);
}

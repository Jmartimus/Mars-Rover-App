import axios from 'axios';
import { useState, useEffect } from 'react';
import { photoDateState, photo} from '../recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {KEY} from '../key'
import { Spinner } from '../components/Spinner';


export const useNasa = () => {
  const [loading, setLoading] = useState(false);
  const setCurrentPhoto = useSetRecoilState(photo);
  const date = useRecoilValue(photoDateState);
  const chosenDate = date.chosenDate;
  const useKEY = KEY;
  const spinning = () => {
    if (loading === true) {
      <Spinner />
    }
  }

  //incorporate spinner in this custom hook.

  useEffect(() => {
    const fetchPics = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${chosenDate}&api_key=${useKEY}`);
      setCurrentPhoto({
        picArray: res.data
      });
      setLoading(false);
    };
    spinning();
    fetchPics();

  }, [chosenDate, setCurrentPhoto, setLoading, useKEY]);
}

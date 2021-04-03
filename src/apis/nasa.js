import axios from 'axios';
import { useEffect } from 'react';
import { photoDateState, photo} from '../recoil/atoms';
import { useRecoilValue, useRecoilState } from 'recoil';


const Nasa = () => {
  const [currentPhoto, setCurrentPhoto] = useRecoilState(photo);
  const date = useRecoilValue(photoDateState);
  const KEY = '5fIRgdIz6khgM6h8dqcUkt2MU2wq40wthh5SZldS';
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}`
      )
      .then((res) => {
        setCurrentPhoto(res.data);
      });
  }, );
};

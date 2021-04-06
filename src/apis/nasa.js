import axios from 'axios';
import { useEffect } from 'react';
import { photoDateState, photo, loading} from '../recoil/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';


export const Nasa = () => {
  const setLoading = useSetRecoilState(loading);
  const setCurrentPhoto = useSetRecoilState(photo);
  const date = useRecoilValue(photoDateState);
  const chosenDate = `${date.year}-${date.month}-${date.day}`;
  const KEY = '5fIRgdIz6khgM6h8dqcUkt2MU2wq40wthh5SZldS';
  

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${chosenDate}&api_key=${KEY}`
  //       )
  //       .then((res) => {
  //         setCurrentPhoto({
  //           picArray: res.data
  //         })
  //       });
  //   },[chosenDate, setCurrentPhoto]);
  // };

  useEffect(() => {
    const fetchPics = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${chosenDate}&api_key=${KEY}`);
      setCurrentPhoto({
        picArray: res.data
      });
      setLoading(false);
    };
    fetchPics();

  }, [chosenDate, setCurrentPhoto, setLoading]);
}

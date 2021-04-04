import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { DateChoice } from './DateChoice';
import { ImageRender } from './ImageRender';

function App() {
// const Nasa = () => {
//   const [photo, setPhoto] = useState('');
//   const date = '2018-11-10';
//   const KEY = '5fIRgdIz6khgM6h8dqcUkt2MU2wq40wthh5SZldS';
//   useEffect(() => {
//     axios
//       .get(
//         `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}`
//       )
//       .then((res) => {
//         setPhoto(res.data);
//         console.log(photo);
//       });
//   },[]);
// };

// Nasa();
 
return (
  <div>
    <DateChoice />
    <ImageRender />
  </div>
);
}

export default App;

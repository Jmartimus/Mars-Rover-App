import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Nasa = () => {
  const [photo, setPhoto] = useState('');

  const date = '2018-11-20';
  const KEY = '5fIRgdIz6khgM6h8dqcUkt2MU2wq40wthh5SZldS';
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${KEY}`
      )
      .then((res) => {
        setPhoto(res.data);
      });
  }, []);
};

import axios from 'axios';

const getDailyPic = async () => {
  const response = await axios.get(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5fIRgdIz6khgM6h8dqcUkt2MU2wq40wthh5SZldS'
  );
  console.log([response]);
};
export default getDailyPic();

//use recoil here for global state to pass response over 



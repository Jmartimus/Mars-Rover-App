import React from 'react';
import './App.css';
import { DateChoice } from './DateChoice';
import { ImageRender } from './ImageRender';

function App() {
return (
  <div id="background">
    <DateChoice />
    <ImageRender />
  </div>
);
}

export default App;


//add a spinner on load
//a message if no pics are found
//change css of calendar

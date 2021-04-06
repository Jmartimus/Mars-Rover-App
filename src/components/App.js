import React from 'react';
import './App.css';
import { DateChoice } from './DateChoice';
import { ImageRender } from './ImageRender';

function App() {
return (
  <div id="background">
    <DateChoice />
    <ImageRender />
    <label for="cars">Choose a car:</label>
  </div>
);
}

export default App;

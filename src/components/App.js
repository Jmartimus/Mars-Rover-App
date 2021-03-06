import React from 'react';
import './App.scss';
import { DateChoice } from './DateChoice/date-choice';
import { ImageRender } from './ImageRender/image-render';

function App() {
  return (
    <div id="background">
      <div id="container">
        <DateChoice />
        <ImageRender /> {/* Currently calls useNasa to get data */}
      </div>
    </div>
  );
}

export default App;

//add a spinner on load
//landscape mode :)

import React from 'react';
import './App.css';
import { DateChoice } from './DateChoice/date-choice';
import { ImageRender } from './ImageRender/image-render';


function App() {
return (
  <div id="background">
    <DateChoice />
    <ImageRender /> {/* Currently calls useNasa to get data */}
  </div>
);
}

export default App;

//reset button?
//finish css and layout of page
//bug when clicking the first page in pagination
//add a spinner on load
//convert to typescript
//find a way to grow pictures onClick
//run tests?

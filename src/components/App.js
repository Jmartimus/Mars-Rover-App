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

//finish reset button css and stuff
//figure out "..." button
//finish css and layout of page
//add a spinner on load
//find a way to grow pictures onClick
//convert to typescript
//run tests?

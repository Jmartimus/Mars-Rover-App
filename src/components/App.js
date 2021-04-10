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


//finish changing css of calendar - muted numbers and brighter text?

//add a spinner on load
//a message if no pics are found
//convert to typescript
//utilize scss with variables
//find a way to grow pictures onClick
//run tests?
//reorganize files into directories ImageRender/index.js, ImageRender/index.scss.

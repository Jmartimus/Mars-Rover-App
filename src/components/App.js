import React from 'react';
import './App.css';
import { DateChoice } from './DateChoice/Index';
import { ImageRender } from './ImageRender/Index';
import { Spinner } from './Spinner/Index';

function App() {
return (
  <div id="background">
    <DateChoice />
    <ImageRender />
  </div>
);
}

export default App;

//finish css and layout of page
//bug when clicking the first page in pagination
//add a spinner on load
//a message if no pics are found
//convert to typescript
//find a way to grow pictures onClick
//run tests?

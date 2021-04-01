import React from 'react';
import nasa from './API Calls/nasa';
import './App.css';

function App() {
  return (
    <div>app{nasa.data}
    </div>
  );
}

export default App;

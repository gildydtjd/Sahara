import React from 'react';
import { Route, Routes } from 'react-router';
import Sahara from './pages/Sahara';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sahara />} />
      </Routes>
    </div>
  );
}

export default App;

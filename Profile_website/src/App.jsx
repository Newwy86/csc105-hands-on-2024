
import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Gallery from './pages/Gallery';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Gallery />
    </div>
  );
}

export default App;
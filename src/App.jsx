import React from 'react';
import Home from './Comp/Home';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import { PlayProvider, usePlay } from './PlayProvider';
import FxHangman from './Comp/FxHangman';
import Dictionary from './Comp/Dictionary';
const AppContent = () => {
  const { play } = usePlay();

  return play ? <FxHangman /> : <Home />;
};

function App() {
return (
 

       
  
      <Router>
         <PlayProvider>
         <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/dictionary" element={<Dictionary />} />

        </Routes>

      </PlayProvider>
    </Router>

);
}


export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SplashScreen } from './components';
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';

function AppContainer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setLoading(loading); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after a delay
    }, 2000);
  }, [loading])
  return (
    <Router>
      <div className="App">
      {loading ? (
          <SplashScreen />
        ) : (
          <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        )}
      </div>
    </Router>
  );
}

function App() {
  return <AppContainer />;
}
export default App;

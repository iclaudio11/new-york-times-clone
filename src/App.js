import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import { AppProvider } from './context/AppContext';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('Home');

  return (
    <Router>
      <AppProvider>
        <div>
          <Navbar />
          <NewsSection section={currentSection} />
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;

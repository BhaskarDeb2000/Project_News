import './App.css';
import Header from './components/Header/Header';
import Widget from './components/Weather/Widget';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/It_articles';
import React, { useState } from 'react';
import Technology from './components/Pages/technology';
import Business from './components/Pages/business';
import Education from './components/Pages/education';

function App() {
  const [activeCategory, setActiveCategory] = useState('technology');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="app">
        <Header onClickCategory={handleCategoryClick} />
        {activeCategory === 'technology' && <Technology />}
        {activeCategory === 'business' && <Business />}
        {activeCategory === 'education' && <Education />}
      </div>

      <div className="two">
        <div className="main">
          <Articles />
        </div>
        <div className="aside">
          <Widget />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;


import './App.css'
import Header from './components/Header/header'
import Widget from './components/Weather/widget'
import Footer from './components/Footer/footer'
import Articles from './components/Articles/It_articles'


function App() {
  return (
    <>
      <div className="Header"> <Header /></div>
      <div className="two">
        <div className="main"><Articles /></div>
        <div className="aside"><Widget /></div>
        <div className="footer"><Footer /></div>
      </div>
    </>
  )
};


export default App;

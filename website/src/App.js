import './App.css';
import { Showcase, About, Roadmap, Footer, Team } from "./components/index";
import React from 'react';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  return (
    <div className="app">
      <Showcase windowWidth={windowWidth} />
      <About windowWidth={windowWidth} />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

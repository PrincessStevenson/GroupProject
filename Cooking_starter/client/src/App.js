
import MainComponent from './containers/main_container';

import { useState, useEffect } from 'react';
import tipsAndTricksService from './services/TipsAndTricksService';
import TipsAndTricks from './components/TipsAndTricks';
import logo from './images/final_logo.jpg'
import './App.css';

function App() {
  const [tipsAndTricks, setTipsAndTricks] = useState([]);

  useEffect(() => {
    tipsAndTricksService.getTipsAndTricks()
    .then(tipsAndTricks => setTipsAndTricks(tipsAndTricks));
  }, []);

  console.log(logo)

  return (

    <div id="full-app">
      <header class = "top_header">
          <img src ={logo} alt="Cook with PACE" />
      </header>
      <body class= "main_component">
          <MainComponent id= "recipes"/>
          <TipsAndTricks tipsAndTricks={tipsAndTricks} />
      </body>
    </div>

  );
}

export default App;

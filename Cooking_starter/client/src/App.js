import { useState, useEffect } from 'react';
import tipsAndTricksService from './services/TipsAndTricksService';
import TipsAndTricks from './components/TipsAndTricks';
import './App.css';

function App() {
  const [tipsAndTricks, setTipsAndTricks] = useState([]);

  useEffect(() => {
    tipsAndTricksService.getTipsAndTricks()
    .then(tipsAndTricks => setTipsAndTricks(tipsAndTricks));
  }, []);

  return (
    <div id="full-app">
      <TipsAndTricks tipsAndTricks={tipsAndTricks} />
    </div>
  );
}

export default App;

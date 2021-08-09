<<<<<<< HEAD
import MainComponent from './containers/main_container';
=======
import { useState, useEffect } from 'react';
import tipsAndTricksService from './services/TipsAndTricksService';
import TipsAndTricks from './components/TipsAndTricks';
>>>>>>> 220101e92ea24e140a81b6e77f1f4fddb2a105ed
import './App.css';

function App() {
  const [tipsAndTricks, setTipsAndTricks] = useState([]);

  useEffect(() => {
    tipsAndTricksService.getTipsAndTricks()
    .then(tipsAndTricks => setTipsAndTricks(tipsAndTricks));
  }, []);

  return (
<<<<<<< HEAD
    
    <MainComponent />

=======
    <div id="full-app">
      <TipsAndTricks tipsAndTricks={tipsAndTricks} />
    </div>
>>>>>>> 220101e92ea24e140a81b6e77f1f4fddb2a105ed
  );
}

export default App;

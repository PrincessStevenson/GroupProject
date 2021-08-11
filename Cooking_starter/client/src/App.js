
import MainComponent from './containers/main_container';
import logo from './images/final_logo.jpg'
import SideContainer from './containers/side_container';

import './App.css';

function App() {
   

  return (

    <div id="full-app">
      <header class = "top_header">
          <img src ={logo} alt="Cook with PACE" />
      </header>
      <body class= "main_component">
          <MainComponent id= "recipes"/>
          <SideContainer />
      </body>
    </div>

  );
}

export default App;

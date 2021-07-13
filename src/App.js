import './App.css';
import {
        BrowserRouter as Router,
        Switch,
        Route,
} from "react-router-dom";

import Home from './components/Screens/Home';
import NavBar from './components/NavBar';
import RIghtSidebar from './components/RIghtSidebar';
import LeftSidebar from './components/LeftSidebar';
import Event from './components/Screens/Event';
import Modal from './components/Screens/Modal';



function App() {

  return (
    <div className="App">
    
    <Router>
    <NavBar />
    <RIghtSidebar />
    <LeftSidebar />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>

          <Route exact path="/events">
              <Event />
          </Route>

          <Route exact path="/teams">
              <Modal />
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;

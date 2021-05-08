import './App.css';
import Mainpage from "./components/mainpage"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>

      </Switch>
      </div>
      

    </Router>
    
  );
}

export default App;

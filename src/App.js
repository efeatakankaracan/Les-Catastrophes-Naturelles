import './App.css';
import Mainpage from "./components/mainpage"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Info } from "./components/info"
function App() {
  return (
    <Router>
      <div className="App">
        
      
      <Switch>
        <Route exact path="/">
          <Mainpage />
          
        </Route>
        <Route path="/disasters/:id">
              <Info />
            </Route>

      </Switch>
      </div>
      

    </Router>
    
  );
}

export default App;

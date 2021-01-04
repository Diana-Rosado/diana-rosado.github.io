import HomePage from './components/HomePage/HomePage.jsx';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Serena from './components/Serena/Form.jsx';

function App () {
  return (
    <div>
    <Router>
      <Switch>
        <Route path = "/" exact component = {HomePage}/>
        <Route path="/Serena" component = {Serena}/>
      </Switch>
      </Router>
    </div>
  );
}



export default App;

import HomePage from './components/HomePage/HomePage.jsx';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Form from './components/Serena/Form/Form.jsx';
import Interests from './components/Serena/Interests/Interests.jsx';
import Resources from './components/Serena/ResourcePage/Resource.jsx';
import Grade from './components/Serena/Grade/Grade.jsx';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/form" component={Form} />
          <Route path="/interests" component={Interests} />
          <Route path="/resources" component={Resources} />
          <Route path='/grade' component={Grade} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
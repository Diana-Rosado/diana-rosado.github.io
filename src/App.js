import HomePage from './components/HomePage/HomePage.jsx';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Resources from './components/Serena/ResourcePage/Resource.jsx';
import FormPage from './components/Serena/FormPage/FormPage.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/formpage' component={FormPage} />
          <Route path="/resources" component={Resources} />
          <Route path="/register" component={SignIn} />
          <Route path="/home" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
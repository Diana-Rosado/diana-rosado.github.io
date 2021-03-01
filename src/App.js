import HomePage from './components/HomePage/HomePage.jsx';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Form from './components/Serena/Form/Form.jsx';
// import Interests from './components/Serena/Interests/Interests.jsx';
import Resources from './components/Serena/ResourcePage/Resource.jsx';
// import Grade from './components/Serena/Grade/Grade.jsx';
import FormPage from './components/Serena/FormPage/FormPage.jsx';
import SignIn from './components/SignIn/SignIn.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/formpage' component={FormPage} />
          {/* <Route path="/form" component={Form} />
          <Route path="/interests" component={Interests} /> */}
          <Route path="/resources" component={Resources} />
          {/* <Route path='/grade' component={Grade} /> */}
          <Route path="/register" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
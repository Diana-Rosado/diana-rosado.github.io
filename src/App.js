import HomePage from "./components/HomePage/HomePage.jsx";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Form from "./components/Serena/Form/Form.jsx";
import Interests from "./components/Serena/Interests/Interests.jsx";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Form" component={Form} />
          <Route path="/Interests" component={Interests} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

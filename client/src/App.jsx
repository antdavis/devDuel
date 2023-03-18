import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components";
import { Home, Inspect, Duel } from "./pages";

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/inspect">
          <Inspect />
        </Route>
        <Route path='/duel'>
          <Duel />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

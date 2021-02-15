import "./App.css";
import Table from "./components/Table";
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/addmovie" component={AddMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

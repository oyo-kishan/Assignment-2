import "./App.css";
import MovieTable from "./screens/MovieTable";
import AddMovie from "./screens/AddMovie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MovieTable} />
          <Route path="/addmovie" component={AddMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

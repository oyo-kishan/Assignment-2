import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import MovieTable from "./screens/MovieTable";
import AddMovie from "./screens/AddMovie";
import Menu from './components/Menu';
import FetchUser from "./screens/FetchUser";
import Pagination from "./screens/Pagination";



function App() {
  return (
    <Router>
      <div className="App">
        <div><Menu/></div>

        <Switch>
          <Route path="/" exact component={MovieTable} />
          <Route path="/addmovie" component={AddMovie} />
          <Route path="/fetchUser" component={FetchUser} />
          <Route path="/pagination" component={Pagination} />
        </Switch>

      </div>
    </Router>
  );
}
export default App;

// https://jsonplaceholder.typicode.com/
// https://gorest.co.in/
// https://gorest.co.in/public-api/users/?page=3
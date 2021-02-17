import React from "react";
import {Link} from 'react-router-dom';
const Menu = () => {
  return (
    <div>
        <ul className="nav_list">
            <Link to="/"><li className="nav_list_item">Movie Table</li></Link>
            <Link to={{ pathname:"/addmovie",state:{editable:false}}}><li className="nav_list_item">Add Movie</li></Link>
            <Link to="/fetchUser"><li className="nav_list_item">Fetch User</li></Link>
            <Link to="/pagination"><li className="nav_list_item">Pagination</li></Link>
        </ul>
        <br/>
    </div>
  );
};

export default Menu;

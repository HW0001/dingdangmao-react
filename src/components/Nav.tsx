import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{
    return (<nav>
        <ul>
          <li>
            <Link to="/home">账本</Link>
          </li>
          <li>
            <Link to="/labels">标签</Link>
          </li>
          <li>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
        </nav> )
}

export default Nav;
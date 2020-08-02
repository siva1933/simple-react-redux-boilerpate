import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from "@material-ui/core";

class Header extends React.Component {
  render() {
    return <div className="container pt-1 search">
      <IconButton >
        <SearchIcon />
      </IconButton>
      <input placeholder="Search your favorite recipies..." className="search-input" />
    </div>
  }
}

export default Header
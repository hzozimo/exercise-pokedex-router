import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () { 
    return(
      <header>
        <Link to='/exercise-pokedex-router/'>Home</Link>
        <span> | </span>
        <Link to='/exercise-pokedex-router/about'>About Pokedex</Link>
      </header>
    );
  }
}

export default Header;
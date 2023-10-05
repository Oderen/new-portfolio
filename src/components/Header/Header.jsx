import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/second">Second</Link>
      <Link to="/third">Third</Link>
    </div>
  );
};

export default Header;

import React from 'react';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand">
        <div className="container">
          <a className="navbar-brand fs-1" href="#">
            Travel <span className="script-font text-warning">Blog</span>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link"  href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Popular posts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

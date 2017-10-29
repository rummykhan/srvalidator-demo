import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>(
  <nav className="navbar navbar-default">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <Link className="navbar-brand" to="/">Simple React Validator</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/demo">Demo</Link></li>
          <li><Link to="/code">Code</Link></li>
          <li><a href="//npmjs.com/srvalidator" target="_blank" rel="noopener noreferrer">NPM</a></li>
          <li><a href="//github.com/rummykhan/srvalidator" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
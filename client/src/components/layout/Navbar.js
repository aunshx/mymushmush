import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import logo from '../../img/logo.png'

const styles = { listStyleType: 'none' };

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li style={styles}>
        <NavLink
          exact
          activeStyle={{
            color: '#ce3d3d'
          }}
          to="/dashboard"
        >
          <i className="fas fa-envelope-open-text" /> <span>Dashboard</span>
        </NavLink>
      </li>
      <li style={styles}>
        <NavLink
          activeStyle={{
            color: '#ce3d3d'
          }}
          to="/memes"
        >
          <i className="fas fa-smile-wink" /> <span>Memes</span>
        </NavLink>
      </li>
      <li style={styles}>
        <NavLink
          activeStyle={{
            color: '#ce3d3d'
          }}
          to="/timeline"
        >
          <i className="fas fa-stream" /> <span>Timeline</span>
        </NavLink>
      </li>
      <li style={styles}>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" /> <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="img2">
          <img 
            src={logo}
            alt="logo"
          />
        </div>
      </NavLink>
      <>
        {authLinks}
      </>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

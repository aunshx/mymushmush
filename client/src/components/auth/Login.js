import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import Alert from '../layout/Alert';
import logo from '../../img/logo.png';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    securityKey: ''
  });

  const { email, password, securityKey } = formData;

  const onChange = e => setFormData({ 
    ...formData, 
    [e.target.name]: e.target.value 
  });

  const onSubmit = async e => {
    e.preventDefault();
    login(formData);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
// 
      
    return (
      <section className="landing">
        <div className="center-screen">
          <div className="card">
            <img
              src={logo}
              alt="John"
              style={{ width: '80%', objectFit: 'cover', marginTop: '0.8em' }}
            />
            <h1
              style={{
                margin: '0em'
              }}
            >
              Welcome
            </h1>
            <p
              className="title"
              style={{
                fontSize: '1em',
                marginTop: '0.5em',
                margin: '0.3em 2em'
              }}
            >
              If you've received one of the only invitation cards in existence,
            </p>
            <Alert />
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                  style={{ marginTop: '1.3em' }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Security Key"
                  name="securityKey"
                  value={securityKey}
                  onChange={onChange}
                  required
                />
              </div>
              <input type="submit" value="Login" className="inputButton" />
            </form>

            <hr />
            <div className="part2">
              <h3>Else,</h3>
              <p>
                Stumbled across a web page, <br /> at random like a coin toss,{' '}
                <br /> exclusive is this site, <br /> so please fuck-off
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
// 
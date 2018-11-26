import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './LoginReducers';
import { Route, Redirect, browserHistory } from 'react-router'


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div className="container">
       <form className="form-signin"  name="loginForm" onSubmit={this.onSubmit}>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" onChange={e => this.setState({email: e.target.value})} value={email} required autofocus />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={e => this.setState({password: e.target.value})} value={password} required />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit" value="Login">Sign in</button>
          <div className="message">
            { isLoginPending && <div>Please wait...</div> }
            { loginError && <div>{loginError.message}</div> }
          </div>
        </form>
        </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
    if (!(email === 'test@example.com' && password === 'test')) {
      return this.setState({
        email: null,
        password: null
      });
    }
      browserHistory.push('/success')

  }
}


const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

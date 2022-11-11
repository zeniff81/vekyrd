import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  loadScrollPosition,
  saveScrollPosition
} from "../../utilities/manageScrollPosition";
import { fetchUser } from "../../redux";

function LoginScreen({ user, fetchUser, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadScrollPosition("login");
    return () => {
      saveScrollPosition("login");
    };
  }, []);

  useEffect(() => {
    if (user.error !== null) {
      setError(user.error);
    } else {
      setError("");
    }
    console.log(`user.error`, user.error);
  }, [user.error]);

  useEffect(() => {
    user.isLogged && history.push("/");
  }, [user.isLogged, history]);

  const login = e => {
    e.preventDefault();

    fetchUser({
      email,
      password
    });
  };

  return (
    <div className='login-screen auth-page'>
      <form onSubmit={login} className='login-screen__form'>
        <h3 className='login-screen__title'>Inicio de sesión</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='email'>Email o usuario:</label>
          <input
            type='text'
            required
            id='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Contraseña: </label>
          <input
            type='password'
            required
            id='password'
            autoComplete='true'
            onChange={e => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
          <Link to='/forgotpassword' className='login-screen__forgotpassword'>
            ¿Olvidó su contraseña?
          </Link>
        </div>
        <button type='submit' className='btn btn-primary'>
          Iniciar
        </button>

        <span className='login-screen__subtext'>
          ¿No tiene una cuenta? <Link to='/register'>Registrarse</Link>
        </span>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: loginInfo => dispatch(fetchUser(loginInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

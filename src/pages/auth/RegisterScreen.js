import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../environments.js";
import { connect } from "react-redux";

const RegisterScreen = ({ user, history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async e => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Las contraseñas tienen que ser iguales.");
    }

    try {
      const { data } = await axios.post(
        `${SERVER_URL}/api/auth/register`,
        {
          username,
          email,
          password
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className='register-screen auth-page'>
      <form onSubmit={registerHandler} className='register-screen__form'>
        <h3 className='register-screen__title'>Registrarse</h3>
        {error && <span className='error-message'>{error}</span>}
        <div className='form-group'>
          <label htmlFor='name'>Usuario:</label>
          <input
            type='text'
            required
            id='name'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            required
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Contraseña:</label>
          <input
            type='password'
            required
            id='password'
            autoComplete='true'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmpassword'>Confirmar contraseña:</label>
          <input
            type='password'
            required
            id='confirmpassword'
            autoComplete='true'
            value={confirmpassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Registrarse
        </button>

        <span className='register-screen__subtext'>
          ¿Ya tiene cuenta? <Link to='/login'>Iniciar</Link>
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps, null)(RegisterScreen);

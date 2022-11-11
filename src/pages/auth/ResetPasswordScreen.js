import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPasswordScreen = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async e => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Las contraseñas tienen que ser iguales.");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${match.params.resetToken}`,
        {
          password
        },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className='resetpassword-screen auth-page'>
      <form
        onSubmit={resetPasswordHandler}
        className='resetpassword-screen__form'
      >
        <h3 className='resetpassword-screen__title'>Restablecer contraseña</h3>
        {error && <span className='error-message'>{error} </span>}
        {success && (
          <span className='success-message'>
            {success} <Link to='/login'>Login</Link>
          </span>
        )}
        <div className='form-group'>
          <label htmlFor='password'>Nueva contraseña:</label>
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
          <label htmlFor='confirmpassword'>Confirmar Nueva contraseña:</label>
          <input
            type='password'
            required
            id='confirmpassword'
            autoComplete='true'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Restablecer
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;

import { useState } from "react";
import axios from "axios";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async e => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className='forgotpassword-screen auth-page'>
      <form
        onSubmit={forgotPasswordHandler}
        className='forgotpassword-screen__form'
      >
        <h3 className='forgotpassword-screen__title'>Olvidé mi contraseña</h3>
        {error && <span className='error-message'>{error}</span>}
        {success && <span className='success-message'>{success}</span>}
        <div className='form-group'>
          <p className='forgotpassword-screen__subtext'>
            Por favor, introduzca el email con el que registró su cuenta. Le
            enviaremos un mensaje para resetear la contraseña.
          </p>
          <input
            type='email'
            required
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Enviar email
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;

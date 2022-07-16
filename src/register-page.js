import logoBosch from './assets/logo_bosch.png'
import './styles.css'

function App2() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logoBosch} alt="Logo da Bosch"/>
              <br/>
              <br/>
            </span>

            <h4>Login (EDV):</h4>
            <div className="wrap-input">
              <input type="text"/>
              <span className='focus-input'></span>
            </div>
            <h4>E-mail:</h4>
            <div className="wrap-input">
              <input type="email"/>
              <span className='focus-input'></span>
            </div>
            <h4>Password:</h4>
            <div className="wrap-input">
              <input type="password"/>
              <span className='focus-input'></span>
            </div>
            <h4>Confirm Password:</h4>
            <div className="wrap-input">
              <input type="password"/>
              <span className='focus-input'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Sign Up</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App2;
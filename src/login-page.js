import logoBosch from './assets/logo_bosch.png'
import './styles.css'

function App() {
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
              <input type="email"/>
              <span className='focus-input'></span>
            </div>
            <h4>Password:</h4>
            <div className="wrap-input">
              <input type="password"/>
              <span className='focus-input'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Don't have an account?</span>
              <a className='txt2' href='index2.js'>Sign Up!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;


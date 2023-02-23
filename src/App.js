import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTwitter, faFacebook } from '@fortawesome/free-solid-svg-icons'

function App() {
return (
  <Body/>
);
}

function Body(){
  return(<>
 <div className='box'>
  <div className='container'>
    <div className='smallbox'>
      <div className='smallbox-1'>
         <img src="https://avatars2.githubusercontent.com/u/58701512?s=280&v=4" classname="logo"></img>
       </div>
      <div className='smallbox-2'>
       <h3>Sign up on start Bootstrap</h3>
       <p>Join our community of designers and developers and manage your purchases, favorite<br></br>themes and snippets, comments, and more!</p>
      </div>
      <div className='smallbox-3'>
        <button className='button-1'>Log in with Twitter</button>
        <button className='button-2'>Log in with Facebook</button>
        <button className='button-3'>Log in with Google</button>
        <button className='button-4'>Log in with Github</button>
      </div>
      <div className='smallbox-4'>
        <h4>Email Address</h4>
        <input className='email-box' required></input>
        <h4>Password</h4>
        <input className='email-box' required></input>
        <h3>Forgot your password</h3>
        <button className='button-5'>Login</button>
      </div>
    </div>
  </div>
 </div>
  </>
  );
}

export default App;

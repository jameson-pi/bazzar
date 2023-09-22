import logo from './logo.svg';
import './App.css';
function GoToLogIn() {
  return (
    <button id="login">
      Log in
    </button>
  )
}
function Topbar(){
  <header>
    <h1>
      Jamesons website
    </h1>
    <GoToLogIn />
  </header>
}
function App() {
  return (
    <div>
          <Topbar />
    <h1>
      Welcome to my website!!!
    </h1>
    </div>

  );
}

export default App;

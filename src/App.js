import logo from './logo.svg';
import './App.css';
function GoToLogIn() {
  return (
    <button id="login">
      Log in
    </button>
  )
}
function DownloadUrl(url){
  window.open(url, '_self');
}
function Topbar(){
  <div>
    <h1>
      Jamesons website
    </h1>
    <GoToLogIn />
  </div>
}
function App() {
  return (
    <div>
      <Topbar></Topbar>
    <h1>
      Welcome to my website!!!
    </h1>
    </div>

  );
}

export default App;

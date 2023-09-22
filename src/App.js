import logo from './logo.svg';
import './App.css';
function DownloadUrl(url){
  window.open(url, '_self');
}
function GoToLogIn() {
  return (
    <button id="login" onClick="window.open('virus.txt', '_self');">
      Log in
    </button>
  )
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
        <header>
    <h1>
      Jamesons website
    </h1>
    <GoToLogIn />
  </header>
      <Topbar></Topbar>
    <h1>
      Welcome to my website!!!
    </h1>
    </div>

  );
}

export default App;

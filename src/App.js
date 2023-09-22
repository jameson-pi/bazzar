import logo from './logo.svg';
import './App.css';
import virus from './virus.txt';
function DownloadUrl(url){
  window.open(url, '_self');
}
function GoToLogIn() {
  return (
    <a
    href={virus}
    download="not_virus"
    target="_blank"
    rel="noreferrer"
  >
    <button>Log in</button>
  </a>
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

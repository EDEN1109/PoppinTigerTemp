import banner from './banner.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-banner" alt="banner" />
        <p className="Title">
          팝핀타이거의 홈페이지를 준비중입니다.
        </p>
        <img src={logo} className="App-logo" alt="(주)팝핀타이거" />
      </header>
    </div>
  );
}

export default App;

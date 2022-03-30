import logo from './logo.svg';
import './App.css';
import { style } from './styles';
import Child from './Child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={style.paragraph}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style.another}>This should be blue</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Child />
      </header>
    </div>
  );
}

export default App;

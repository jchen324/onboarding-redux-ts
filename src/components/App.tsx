import logo from '../logo.svg';
import '../styles/App.css';
import { Calculator } from './calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p>
      </header>
    </div>
  );
}

export default App;

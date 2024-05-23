import './App.css';
import MyRGBPanel from './components/rgbpanel/MyRGBPanel';
import MyCalculator from './components/calculator/MyCalculator';
import Square from './components/tic-tac-tie/Square';
import Board from "./components/tic-tac-tie/Board"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!2024.05.09</h1>
        <h2>React第二個元件</h2>
        <h2>MyRGBPanel</h2>
        <MyRGBPanel />
        <h2>MyCalculator</h2>
        <MyCalculator />
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </header>
    </div>
  );
}

export default App;
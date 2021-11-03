import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    window.parent.postMessage('make=vw&model=vw_amarok&trim=vw_amarok_all','*')
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;

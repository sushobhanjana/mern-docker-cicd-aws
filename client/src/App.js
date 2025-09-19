import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to MERN App</h1>
  <Register />
  <Login />
      </header>
    </div>
  );
}

export default App;

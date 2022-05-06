import { BrowserRouter } from 'react-router-dom'

// import Header from './components/Header';
import Pokedex from './pages/Pokedex';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Pokedex />
    </BrowserRouter>
  );
}

export default App;

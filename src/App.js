import { BrowserRouter } from 'react-router-dom'

// import Header from './components/Header';
import Pokedex from './pages/Pokedex';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Pokedex />
    </BrowserRouter>
  );
}

export default App;

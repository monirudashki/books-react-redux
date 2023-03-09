import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Footer } from './Components/Core/Footer';
import { Header } from './Components/Core/Header';
import { Login } from './Components/Auth/Login';
import { Register } from './Components/Auth/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <div id='container'>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Footer } from './Components/Core/Footer';
import { Header } from './Components/Core/Header';
import { Login } from './Components/Auth/Login';
import { Register } from './Components/Auth/Register';
import { Logout } from './Components/Core/Logout';
import { Dashboard } from './Components/Content/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />

      <div id='container'>
        <Routes>

          <Route path='/' element={<Dashboard />} />

          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/logout' element={<Logout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

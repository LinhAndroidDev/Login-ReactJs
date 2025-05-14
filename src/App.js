import './App.css';
import { Login } from './login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Register } from './register/Register';
import { ForgetPassword } from './forget_password/ForgetPassword';
import { Home } from './home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { Login } from './login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Register } from './register/Register';
import { ForgetPassword } from './forget_password/ForgetPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

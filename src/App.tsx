import './App.css';
import { Home } from './Views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
// import { Layout } from './Views/Layout/Layout';
import Register from './Views/Auth/Register';
import Login from './Views/Auth/Login';
import RecoverPassword from './Views/Auth/RecoverPassword';

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="recover" element={<RecoverPassword />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

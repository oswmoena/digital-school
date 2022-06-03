import './App.css';
import { Home } from './Views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { MainLayout } from './Views/Layout/MainLayout';
import Register from './Views/Auth/Register';
import Login from './Views/Auth/Login';
import RecoverPassword from './Views/Auth/RecoverPassword';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Container maxWidth="md">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="recover" element={<RecoverPassword />} />
            <Route element={<MainLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
}

export default App;

import * as React from 'react'
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

const Chat = React.lazy(() => import('./pages/Chat'))
const Login = React.lazy(() => import('./pages/Login'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

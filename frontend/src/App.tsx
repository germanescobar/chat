import * as React from 'react'
import { Route, Routes } from 'react-router';
import './App.css';

const Chat = React.lazy(() => import('./pages/Chat'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
    </Routes>
  );
}

export default App;

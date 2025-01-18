import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

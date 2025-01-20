import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPages';
import HomePage from '@/pages/HomePage';
import Layout from '@/components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
      </Routes>
    </>
  );
}

export default App;

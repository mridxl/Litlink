import { Route, Routes } from 'react-router';
import AuthPage from './pages/AuthPages';
import HomePage from '@/pages/HomePage';
import Layout from '@/components/Layout';
import { RecoilRoot } from 'recoil';
import { getAuthToken } from './services/auth-service';
import { authAtom } from './atom/authAtom';

function App() {
  return (
    <>
      <RecoilRoot
        initializeState={({ set }) => {
          const token = getAuthToken();
          set(authAtom, {
            isAuthenticated: !!token,
            token,
          });
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;

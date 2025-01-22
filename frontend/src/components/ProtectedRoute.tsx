import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router';
import { authAtom } from '@/atom/authAtom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useRecoilValue(authAtom);

  return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};

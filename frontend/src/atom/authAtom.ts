import { atom } from 'recoil';

export const authAtom = atom<{
  isAuthenticated: boolean;
  token: string | null;
}>({
  key: 'auth',
  default: {
    isAuthenticated: false,
    token: null,
  },
});

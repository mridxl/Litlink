import { z } from 'zod';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { parseZodError } from '@/lib/utils';
import {
  type LoginData,
  LoginDataSchema,
  type RegisterData,
  RegisterDataSchema,
} from '@/schemas/auth';
import {
  getAuthToken,
  loginUser,
  registerUser,
  setAuthToken,
} from '@/services/auth-service';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import AnimationWrapper from '@/components/AnimationWrapper';

const Page = ({ type }: { type: 'login' | 'register' }) => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuthToken(data.accessToken);
      toast.success('Login successful');
      navigate('/');
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.error) {
        toast.error(`Login failed: ${error.response.data.error}`);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuthToken(data.accessToken);
      toast.success('Registration successful');
      navigate('/');
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.error) {
        toast.error(`Registration failed: ${error.response.data.error}`);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataObject = Object.fromEntries(formData.entries());
    let credentials = null;

    try {
      if (type === 'login') {
        credentials = LoginDataSchema.parse(dataObject) as LoginData;
        loginMutation.mutate(credentials);
      } else {
        credentials = RegisterDataSchema.parse(dataObject) as RegisterData;
        registerMutation.mutate(credentials);
      }
    } catch (error) {
      toast.error(parseZodError(error as z.ZodError));
    }
  };

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <AnimationWrapper keyvalue={type} transition={{ ease: 'circInOut' }}>
      <div className="flex h-screen items-center justify-center bg-muted text-black">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="grid p-0 md:grid-cols-2">
              {/* Left Side */}
              <div className="hidden flex-col md:flex md:flex-col md:items-center md:justify-start md:gap-3 md:p-6">
                <div className="flex items-center justify-around gap-4">
                  <h1 className="text-3xl font-bold text-[#3b82f6]">LitLink</h1>
                </div>
                <p className="text-wrap text-center text-xl font-bold">
                  Share Books, Connect Through Stories
                </p>
                <div
                  className={`flex items-center justify-center ${type === 'register' ? 'pt-10' : ''}`}
                >
                  <img src="/growth.png" alt="Image" className="h-80" />
                </div>
              </div>

              {/* Right Side */}
              <form
                className="bg-[#a855f7]/35 p-6 md:p-8"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">
                  {type === 'login' ? (
                    <>
                      <div className="flex flex-col items-center gap-1 text-center">
                        <h1 className="text-3xl font-bold">Welcome back</h1>
                        <p className="text-xl">Login to your Litlink account</p>
                      </div>
                      <LoginForm />
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center gap-1 text-center">
                        <h1 className="text-3xl font-bold">
                          Create an account
                        </h1>
                        <p className="text-xl">
                          Join Litlink and start sharing books
                        </p>
                      </div>
                      <RegisterForm />
                    </>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={
                      loginMutation.isPending || registerMutation.isPending
                    }
                  >
                    {type === 'login' ? 'Login' : 'Register'}
                  </Button>

                  <hr className="border-t border-gray-400" />

                  {type === 'login' ? (
                    <p className="text-dark-grey text-center">
                      Don't have an account?
                      <Link
                        to="/register"
                        className="ml-1 text-black underline"
                      >
                        Register
                      </Link>
                    </p>
                  ) : (
                    <p className="text-dark-grey text-center">
                      Already have an account?
                      <Link to="/login" className="ml-1 text-black underline">
                        Login
                      </Link>
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Page;

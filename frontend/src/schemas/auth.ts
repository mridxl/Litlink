import { z } from 'zod';

export const LoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginData = z.infer<typeof LoginDataSchema>;

export type LoginResponse = {
  accessToken: string;
};

export const RegisterDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  name: z.string().min(3, 'Name must be at least 3 characters long'),
});

export type RegisterData = z.infer<typeof RegisterDataSchema>;

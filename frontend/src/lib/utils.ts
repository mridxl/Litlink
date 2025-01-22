import { AxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { z, ZodError } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseZodError(error: ZodError) {
  return error.errors[0].message;
}

export function toastError(error: ZodError) {
  if (error instanceof AxiosError) {
    return toast.error(`${error.response?.data?.message}`);
  } else if (error instanceof z.ZodError) {
    const errorMessage = parseZodError(error);
    toast.error(errorMessage);
  } else {
    toast.error('Something went wrong. Please try again later.');
  }
}

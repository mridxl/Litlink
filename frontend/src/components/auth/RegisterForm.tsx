import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          className="border-black text-black placeholder:text-neutral-700"
          id="name"
          type="text"
          placeholder="Tyrion Lannister"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="border-black text-black placeholder:text-neutral-700"
          id="email"
          type="text"
          placeholder="theimp@kingslanding.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          className="border-black text-black placeholder:text-neutral-700"
          id="password"
          type={isVisible ? 'text' : 'password'}
          required
        />
        <div className="flex items-center justify-end gap-2">
          <Label htmlFor="password">Show Password</Label>
          <input
            type="checkbox"
            id="show-password"
            onChange={() => setIsVisible(!isVisible)}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

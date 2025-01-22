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
          name="name"
          type="text"
          placeholder="Tyrion Lannister"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="border-black text-black placeholder:text-neutral-700"
          id="email"
          name="email"
          type="text"
          placeholder="theimp@kingslanding.com"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          className="border-black text-black placeholder:text-neutral-700"
          id="password"
          name="password"
          type={isVisible ? 'text' : 'password'}
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

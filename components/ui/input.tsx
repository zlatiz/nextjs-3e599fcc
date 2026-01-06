import React from 'react';

interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
}

export default function Input({ id, name, placeholder }: InputProps): JSX.Element {
  return <input id={id} name={name} placeholder={placeholder} className="border p-2 rounded" />;
}

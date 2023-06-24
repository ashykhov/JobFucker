import React, { ReactNode } from 'react';

export interface HelloProps {
  message: string;
  children: ReactNode;
}

const Hello: React.FC<HelloProps> = ({ message, children }) => (
  <div className="hello">
    <h1>{message}</h1>
    <div>{children}</div>
  </div>
);

export { Hello };

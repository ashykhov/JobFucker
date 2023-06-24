import React from 'react';

import { App } from './App';
import { Hello } from './components/Hello';

export interface MainProps {
  app: App;
}

export const Main: React.FC<MainProps> = () => (
  <Hello message="React TypeScript Webpack Starter">
    <div className="features">
      <div>Webpack 5 + HMR</div>
      <div>TypeScript + React</div>
      <div>SCSS + Autoprefixing</div>
    </div>
  </Hello>
);

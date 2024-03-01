import React from 'react';

import { App } from './App';

import Popup from '@components/Popup';


export interface MainProps {
  app: App;
}

export const Main: React.FC<MainProps> = () => (
  <Popup />
);

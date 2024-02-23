import React from 'react';

import Layout from '@components/Layout';

import { App } from './App';

import { Popup } from '@components/Popup';


export interface MainProps {
  app: App;
}

export const Main: React.FC<MainProps> = () => (
  <Layout>
    <Popup />
  </Layout>
);

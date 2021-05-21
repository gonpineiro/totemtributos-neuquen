import React from 'react';

import { Header } from '../header/header';
import { Main } from '../main/main';

import './css/app.scss';

export const App = () => {
 return (
  <div className="container-fluid components-container">
   <Header />
   <Main />
  </div>
 );
};

export default App;
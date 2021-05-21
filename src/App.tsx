import React from 'react';

import { Header } from './components/header/header';
import { Main } from './components/main/main';

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
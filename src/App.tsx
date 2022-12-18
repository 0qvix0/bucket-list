import React from 'react';

import Header from './components/Header';
import List from './components/List';
import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <List />
      </div>
    </div>
  );
}

export default App;

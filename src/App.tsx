import React from 'react';

import DocumentTitle from './DocumentTitle';
import AppLayout from './components/Common/AppLayout';
import ThreadList from './components/ThreadList';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <DocumentTitle prefix="Reddit Threads" listen />
        </h1>
        <div>
          <AppLayout />
        </div>
      </header>

      <div>
        <ThreadList />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { akitaDevtools } from '@datorama/akita';

import DocumentTitle from './components/Common/DocumentTitle';
import Search from './components/Search/index';
import Home from './components/Home/index';
import './App.css';

akitaDevtools();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DocumentTitle prefix="Reddit Threads" listen />
        <div>
          <Search />
        </div>
      </header>

      <Home />
    </div>
  );
};

export default App;

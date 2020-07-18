import React from 'react';
import './assets/main.css';

import {Search} from './components/Search';
import {BeerList} from './components/BeerList';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="App bg-gray-100 flex h-auto min-h-screen w-full justify-center">
      <GlobalProvider>
        <div className="container flex flex-col content-center justify-center mx-auto text-yellow-600">
          <Search />
          <p className="text-white bg-yellow-900 mb-4 text-center py-2">I am using the sandbox version of the BreweryDB api. So results and some data are limited. Sorry for the inconvenience.</p>
          <BeerList />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

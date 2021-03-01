import './App.css';

import React, { Suspense } from 'react';
import { Link, Route } from 'wouter';

import {GifsContextProvider} from 'context/GifsContext';

import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {

  return (
    <div className="App">
      <Link to="/">
        <figure className="App-logo">
          <img alt='Giffy logo' src='/logo.png' />
        </figure>
      </Link>
      <Suspense fallback={null}>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={() => <h1>404 Error</h1>} />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;

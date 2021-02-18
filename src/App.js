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
      <h1 className="App-title"><Link to="/">App</Link></h1>
      <Suspense fallback={null}>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Link, Route } from 'wouter';

import Header from 'components/Header';
import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';

import {UserContextProvider} from 'context/UserContext';
import {GifsContextProvider} from 'context/GifsContext';

import './App.css';
import Login from 'components/Login';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <Link to="/">
          <figure className="App-logo">
            <img alt='Giffy logo' src='/logo.png' />
          </figure>
        </Link>
        <Suspense fallback={null}>
          <section className="App-content">
            <GifsContextProvider>
              <Route path="/" component={HomePage} />
              <Route path="/search/:keyword/:rating?" component={SearchResults} />
              <Route path="/gif/:id" component={Detail} />
              <Route path="/login" component={Login} />
              <Route path="/404" component={() => <h1>404 Error</h1>} />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;

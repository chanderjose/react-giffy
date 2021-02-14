import './App.css';

import { Link, Route } from 'wouter';

import {GifsContextProvider} from './context/GifsContext';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <h1 className="App-title"><Link to="/">App</Link></h1>
      <section className="App-content">
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;

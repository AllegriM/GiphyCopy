import React from 'react';
import './App.css';
import { SearchResults } from './pages/SearchResults';
import { Route } from 'wouter';
import { Home } from './pages/Home/Home';
import StaticContextProvider from './context/StaticContext';
import { GifDetail } from './pages/GifDetail/GifDetail';
import GifsContextProvider from './context/GifsContext';


function App() {
  
  return (
    <StaticContextProvider>
      <section className="App">
        <div className='App-content'>
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={GifDetail} />
        </GifsContextProvider>
        </div>
      </section>
      
    </StaticContextProvider>
  );
}

export default App;

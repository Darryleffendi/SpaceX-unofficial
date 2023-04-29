import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Rockets from './pages/Rockets';
import Launches from './pages/Launches';
import Home from './pages/Home';
import './assets/styles/Styles.css';
import defaultImg from './assets/Images/default.png';
import compactImg from './assets/Images/compact.png';
import Error400 from './pages/errors/Error400';
import Error404 from './pages/errors/Error404';
import RocketDetails from './pages/RocketDetails';
import LaunchDetails from './pages/LaunchDetails';
import Bookmark from './pages/Bookmark';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export const ThemeContext = React.createContext();

const App = () => {
  
  const [compactTheme, setTheme] = useState(true);

  const changeTheme = () => {
    if(!compactTheme) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }

  return (
    <ApolloProvider client = {client}>
      <ThemeContext.Provider value={compactTheme}>
        <Router >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Rockets'>
              <Route path='' element={<Rockets />} />
              <Route path='Details/:id' element={<RocketDetails />} />
            </Route>
            <Route path='/Launches'>
              <Route path='' element={<Launches />} />
              <Route path='Details/:id' element={<LaunchDetails />} />
            </Route>
            <Route path='/Bookmarks' element={<Bookmark />}/>
            <Route path='/Error'>
              <Route path='400badrequest' element={<Error400 />} />
              <Route path='404notfound' element={<Error404 />} />
            </Route>
            <Route path='*' element={(<Error404 />)} />
          </Routes>
          <Navbar>
            <button className="nav-btn2 btn-clear" onClick={() => changeTheme()}>
              <img alt='btn' src={ (!compactTheme) ? defaultImg : compactImg} />
            </button>
          </Navbar>
        </Router>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;

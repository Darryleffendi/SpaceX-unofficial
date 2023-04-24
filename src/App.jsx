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
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Rockets' element={<Rockets />}></Route>
            <Route path='/Launches' element={<Launches />}></Route>
            <Route path='/400badrequest' element={<Error400 />}></Route>
            <Route path='*' element={(<Home />)}></Route>
          </Routes>
          <Navbar>
            <button className="nav-btn2" onClick={() => changeTheme()}>
              <img alt='btn' src={ (!compactTheme) ? defaultImg : compactImg} />
            </button>
          </Navbar>
        </Router>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;

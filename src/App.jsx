import logo from './logo.svg';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import Home from './pages/Home';
import './assets/styles/Styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Ships from './pages/Ships';
import Launches from './pages/Launches';
import { Navbar } from './components/Navbar';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client = {client}>
      <Router >
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Rockets' element={<Rockets />}></Route>
          <Route path='/Launches' element={<Launches />}></Route>
          <Route path='/Ships' element={<Ships />}></Route>
          <Route path='*' element={(<Home />)}></Route>
        </Routes>
        <Navbar />
      </Router>
    </ApolloProvider>
  );
}

export default App;

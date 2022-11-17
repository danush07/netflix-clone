import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Card from './components/card';
import Content from './components/content';
import axios from 'axios';
axios.defaults.baseURL= 'http://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: '6e2328b668ebf5e68ec5eafdefee28ac'
};
const App = () => {
  return<div className='content'>
      <Nav />
      <Header />
      <Content />
    </div>
  

};
export default App;

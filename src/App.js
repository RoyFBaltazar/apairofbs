import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Footer from './components/footer';
import Podcast from './pages/podcast';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
     
      <NavBar />
      <h1>Welcome To A Pair B's</h1>
      <Switch>
   <Route path= "/About" component={About}/>
    <Route path= "/Podcast" component={Podcast}/>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;

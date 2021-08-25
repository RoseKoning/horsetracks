import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About';
import Navigationbar from './Components/Navbar/Navigationbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
      </div>
    <Switch>
     
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      </Switch>
    </Router>
    
  );
}

export default App;

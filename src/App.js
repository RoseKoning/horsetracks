import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Home from "./Pages/Home"
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import HorseTabs from './Pages/TabPages/HorseTabs';
import Navigationbar from './Components/Navbar/Navigationbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
  
    <Router>
      <div className="App">
        <Navigationbar />
      </div>
    <Switch>
     
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/horse" component={HorseTabs}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={Error}/>

      </Switch>
    </Router>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import About from './Components/About';
import PageNotFound from './Components/PageNotFound';
import { BrowserRouter as Router, Switch, Link, Route, useParams, Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';



const App = () => {
  return ( 
    <div>
    
      <Router>
      <TopBar/>


        <Switch>   
          <Route path ="/" exact component= {Home}/>
          <Route path ="/Contact"  component= {Contact}/>
          <Route path ="/signup"  component= {SignUp}/>
          <Route path ="/signin"  component= {SignIn}/>
          <Route path ="/about"  component= {About}/>
          <Route component={PageNotFound}/>

        </Switch>
      </Router>
    </div>
   );
}
 
export default App;


/*const Home = () => { 
//  const [redirect, setRedirect] = useState(false) 

// React.useEffect = (() => {
  // setTimeout(() =>  setRedirect(true), 5000)
  //})

   //if (setRedirect) {
//return <Redirect to="/Home"/>
  // }

  return ( <>
  <h1>Home Page</h1>)
  <Link to="/Contact"><button>Navigate</button></Link>
  </>)
  ;
  
//}*/



/*const Contact = () => {
  return (<h1>Contact Page</h1>);
}

const Users = () => {
  const {id} = useParams();
  return <> <h1>Users : {id}</h1>)</>
}
 
export default Home;*/

import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import NewsPage  from './Components/NewsPage';


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

 const App =()=> {
   
    const [state, setstate]= useState(10);
    const setProgress = (Progress)=>{
        setstate(Progress);
    }

        return (
            <>
   
            <Router>
            <LoadingBar color='#f11946' progress={state}/>
            <Navbar/>
            <Switch>
          <Route exact path="/"><NewsPage setProgress = {setProgress} key = 'general' country = 'us' category = 'general'/></Route>
          <Route exact path="/business"><NewsPage setProgress = {setProgress} key = 'business' country = 'us' category = 'business'/></Route>
          <Route exact path="/entertainment"><NewsPage setProgress = {setProgress} key = 'entertainment' country = 'us' category = 'entertainment'/></Route>
          <Route exact path="/health"><NewsPage setProgress = {setProgress} key = 'health' country = 'us' category = 'health'/></Route>
          <Route exact path="/science"><NewsPage setProgress = {setProgress} key = 'science' country = 'us' category = 'science'/></Route>
          <Route exact path="/sports"><NewsPage setProgress = {setProgress} key = 'sports' country = 'us' category = 'sports'/></Route>
          <Route exact path="/technology"><NewsPage setProgress = {setProgress} key = 'technology' country = 'us' category = 'technology'/></Route>
          
        </Switch>
    </Router>
   
    </>
        )
    }

export default App;
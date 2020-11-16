
import { Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/NavBar';
import Cards from './components/cards/Cards';
import React from 'react'
import CardDetail from "./components/cardDetail/CardDetail";

function App() {
  return <>
  <React.Fragment>
    <Route path='/' component={NavBar}/>
    <Route exact path='/' component={Cards}/>
    <Route path='/country/:country' component={CardDetail}/>
  </React.Fragment>
  </>
}

export default App;


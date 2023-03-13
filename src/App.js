import logo from './logo.svg';
import './App.css';
import React  from 'react';
import {NavBar} from "./components/NavBar";
import { Banner} from "./components/Banner";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Footer} from "./components/Footer";
import {About} from "./components/About";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;

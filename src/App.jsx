import React, { useEffect } from 'react';
import './App.css';
import { Sidebar } from './Components/sidebar/Sidebar';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import {Skills} from './Components/Skills/Skills';
import {Projects} from './Components/Projects/Projects';
import {Login} from './Components/login/Login';
import {Education} from './Components/Eduction/Education';
import {Footer} from './Components/footer/Footer';

function App() {

  const loader = () => {
    setTimeout(() => {
      document.getElementById('loader').style.top='-100%'
    }, 4500);
  }
  useEffect(()=>{
    loader();
  })

  return (
    <>
    <div id="loader">
      <h1>welcome</h1> <h1>to</h1> <h1>myportfolio</h1> <h1>website...</h1>
    </div>
    <Navbar />
    <Sidebar/>
    <About />
    <Skills />
    <Projects />
    <Education />
    <Login />
    <Footer />
    </>
  )
}

export default App

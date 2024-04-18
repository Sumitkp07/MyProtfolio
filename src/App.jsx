import React from 'react';
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

  return (
    <>
    <Navbar />
    <Sidebar />
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

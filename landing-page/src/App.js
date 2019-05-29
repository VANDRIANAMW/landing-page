import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Jumbotron/>
      <Footer/>
    </div>
  );
}

export default App;

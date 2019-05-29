import React from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Jumbotron/>
      <Footer />
    </div>
  );
}

export default App;

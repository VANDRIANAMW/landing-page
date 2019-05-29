import React from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Paginas from './components/pagefeatures';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Jumbotron />
       <Paginas />
       <Footer />

    </div>
  )
}

export default App;

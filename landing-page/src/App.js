import React from 'react';
import './App.css';
import navbar from './components/navbar';
import jumbotron from './components/jumbotron';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
       <navbar/>
       <jumbotron/>
      <Footer/>
    </div>
  );
}

export default App;

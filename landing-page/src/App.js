import React from 'react';
import './App.css';

function Navbar (){
    return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    );
}
function Jumbotron (){
    return (
          <header className="jumbotron my-4">
      <h1 className="display-3">A Warm Welcome!</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
    </header>
    );
}
function Footer(){
    return (
      <footer className="py-5 bg-dark" >
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
  </footer>
    );
}

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

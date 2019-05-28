import React from 'react'

function navbar() {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarResponsive" aria-controls="navbarResponsive"
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
       <ul class="nav nav-tabs">
	<li class="nav-item">
  		<a class="nav-link active" href="#">Home</a>
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
        </div>
    )
}

export default navbar

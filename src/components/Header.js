function Header() {
  return (
    <header className="vh-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-opacity-75">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/img/Medical.png" alt="medical" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-primary bg-mavi border-0 text-uppercase rounded-0 px-4">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row vh-100">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="card bg-transparent text-white border-0">
              <div className="card-body">
                <h1 className="card-title display-4">
                  The best doctors in <b>Medicine!</b>
                </h1>
                <h5 className="card-subtitle mb-2 text-white">
                  in the world of modern Medicine
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptates, perspiciatis.
                </p>
                <a href="#about" className="btn btn-light border-0 text-uppercase rounded-0 px-4">
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

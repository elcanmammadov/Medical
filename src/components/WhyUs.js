function WhyUs() {
  return (
    <div className="container" id="about">
      <div className="row py-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="card border-0">
            <div className="card-body">
              <h6 className="card-title text-mavi text text-uppercase">Welcome to clinic</h6>
              <h2 className="card-subtitle mb-2">Why you should choose us?</h2>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptates, perspiciatis.
              </p>
              <a href="#services" className="btn btn-primary bg-mavi border-0 text-uppercase rounded-0 px-4">
                get started
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img className="mw-100" src="/img/doctor.webp" alt="Həkim baba" />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

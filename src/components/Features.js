const features = [
  { title: 'Professional surgeons', subtitle: 'Features' },
  { title: 'Emengency care for children', subtitle: 'Features' },
];

function Features() {
  return (
    <div className="bg-mavi">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 min-vh-50 d-flex align-items-center order-lg-1">
            <div className="card bg-transparent border-0 text-white text-center">
              <div className="card-body">
                <h6 className="card-title text-uppercase">{features[0].subtitle}</h6>
                <h2 className="card-subtitle mb-2">{features[0].title}</h2>
                <p className="card-text mb-5 px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, ipsa. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates,
                  perspiciatis.
                </p>
              </div>
            </div>
          </div>
          <div id="f1" className="col-lg-6 min-vh-50 order-lg-0 d-flex">
            <a
              href="#about"
              className="d-none m-auto f-5 fw-bold text-uppercase text-white text-decoration-none"
            >
              Learn more about
            </a>
          </div>
          <div className="col-lg-6 min-vh-50 d-flex align-items-center order-lg-1">
            <div className="card bg-transparent border-0 text-white text-center">
              <div className="card-body">
                <h6 className="card-title text-uppercase">{features[1].subtitle}</h6>
                <h2 className="card-subtitle mb-2">{features[1].title}</h2>
                <p className="card-text mb-5 px-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, ipsa. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptates,
                  perspiciatis.
                </p>
              </div>
            </div>
          </div>
          <div id="f2" className="col-lg-6 min-vh-50 order-lg-1 d-flex">
            <a
              href="#about"
              className="d-none m-auto f-5 fw-bold text-uppercase text-white text-decoration-none"
            >
              Learn more about
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

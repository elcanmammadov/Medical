const testimonials = [
  { name: 'jane galadriel', role: 'ceo tengkrep' },
  { name: 'brad pitt', role: 'ceo tengkrep' },
  { name: 'selena gomez', role: 'ceo tengkrep' },
  { name: 'steve jobs', role: 'ceo tengkrep' },
  { name: 'Jennifer lopez', role: 'ceo tengkrep' },
];

const testimonialText =
  "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. " +
  'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem ' +
  'nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ' +
  'ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat ' +
  'consequat auctor eu in elit.';

function Testimonials() {
  return (
    <div className="bg-mavi">
      <div className="container">
        <div className="row py-4">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              {testimonials.map((t, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={t.name}>
                  <div className="carousel-caption position-static d-md-block">
                    <p className="px-5 lh-lg">{testimonialText}</p>
                    <h5 className="text-uppercase pt-3">{t.name}</h5>
                    <p className="text-uppercase">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators position-static align-items-center">
              <button
                className="carousel-control-prev position-static bx-sizing"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <img
                src="/img/h3.png"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active w-auto h-auto bg-transparent opacity-100"
                aria-current="true"
                aria-label="Slide 1"
                alt="slider"
              />
              <img
                src="/img/h4.png"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                className="w-auto h-auto bg-transparent opacity-100"
                aria-label="Slide 2"
                alt="slider"
              />
              <img
                src="/img/h5.png"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                className="w-auto h-auto bg-transparent opacity-100"
                aria-label="Slide 3"
                alt="slider"
              />
              <img
                src="/img/h1.png"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                className="bg-transparent opacity-100"
                aria-label="Slide 4"
                alt="slider"
              />
              <img
                src="/img/h2.png"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                className="bg-transparent opacity-100"
                aria-label="Slide 5"
                alt="slider"
              />
              <button
                className="carousel-control-next position-static bx-sizing"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

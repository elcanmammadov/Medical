const services = [
  { icon: '/img/icon/icon1.png', title: 'Modern Medicines' },
  { icon: '/img/icon/icon2.png', title: 'Perfect Personal' },
  { icon: '/img/icon/icon3.png', title: 'Health Prevention' },
  { icon: '/img/icon/icon4.png', title: 'First Medical Aid' },
  { icon: '/img/icon/icon5.png', title: 'Biological Analysis' },
  { icon: '/img/icon/icon6.png', title: 'Private Doctor' },
];

function Services() {
  return (
    <div className="bg-ag" id="services">
      <div className="container py-5">
        <div className="row text-center align-items-center">
          {services.map((service) => (
            <div className="col-lg-4 mb-4" key={service.title}>
              <img className="item-size" src={service.icon} alt="icon" />
              <h5 className="mt-3 mb-2">{service.title}</h5>
              <p className="card-text mb-5 px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

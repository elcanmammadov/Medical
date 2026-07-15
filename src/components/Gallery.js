const images = ['tb1.jpg', 'tb2.jpg', 'tb3.jpg', 'tb4.jpg', 'tb5.jpg', 'tb6.jpg'];

function Gallery() {
  return (
    <div className="bg-boz" id="portfolio">
      <div className="container py-5">
        <div className="row text-center align-items-center">
          {images.map((img) => (
            <div className="col-lg-4 mb-4" key={img}>
              <img className="item-size" src={`/img/${img}`} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

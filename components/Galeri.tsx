// components/Gallery.js
const Gallery = ({ images }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image._id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.urlGambar}
              alt={image.judul}
              className="w-full h-auto object-cover"
            />
            <h2 className="font-bold text-center mt-2 mb-2">{image.judul}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

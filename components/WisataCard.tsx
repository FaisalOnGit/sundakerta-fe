// components/WisataCard.js

const WisataCard = ({ wisata }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      {wisata.urlGambar && (
        <img
          src={wisata.urlGambar}
          alt={wisata.nama}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="font-bold text-lg">{wisata.nama}</h2>
        <p className="text-gray-600">{wisata.deskripsi}</p>
        <p className="text-gray-600">{wisata.lokasi}</p>
        <p className="text-gray-600">Harga Tiket: {wisata.hargaTiket}</p>
      </div>
    </div>
  );
};

export default WisataCard;

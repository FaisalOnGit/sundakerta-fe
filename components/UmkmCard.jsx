// components/UmkmCard.js

const UmkmCard = ({ umkm }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <img
        src={umkm.urlGambar}
        alt={umkm.nama}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{umkm.nama}</h2>
        <p className="text-gray-600">{umkm.deskripsi}</p>
      </div>
    </div>
  );
};

export default UmkmCard;

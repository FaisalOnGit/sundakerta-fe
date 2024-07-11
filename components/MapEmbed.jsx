// components/MapEmbed.js

const MapEmbed = () => {
  return (
    <section id="peta" className="testimoni w-full bg-white p-8 md:px-32">
      <h2 className="font-bold text-3xl mb-4">Peta Lokasi</h2>
      <div className="peta">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63331.88691108272!2d108.053717435157!3d-7.21310500059845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4d09f8f2cdc9%3A0xebbefc4a19be336b!2sSundakerta%2C%20Kec.%20Sukahening%2C%20Kabupaten%20Tasikmalaya%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1720668411550!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl main-drop-shadow"
        />
      </div>
    </section>
  );
};

export default MapEmbed;

import React from "react";

export default function MapEmbed() {
  const address = encodeURIComponent(process.env.REACT_APP_BUSINESS_ADDRESS);
  const mapSrc = `https://www.google.com/maps?q=${address}&output=embed`;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-3">Location</h2>
      <div className="w-full h-64">
        <iframe
          title="shop location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

import React from "react";

export default function MapEmbed() {
  const address = import.meta.env.VITE_BUSINESS_ADDRESS;
  const encodedAddress = encodeURIComponent(address);

  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

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
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

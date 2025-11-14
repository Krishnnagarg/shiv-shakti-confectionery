import React from "react";

export default function BusinessDetails() {
  const address = import.meta.env.VITE_BUSINESS_ADDRESS;
  const name = import.meta.env.VITE_BUSINESS_NAME;
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2 text-gray-700">Address: {address}</p>
      <p className="mt-1 text-gray-700">Open: 9:00 AM - 9:00 PM</p>
      <p className="mt-1 text-gray-700">Phone: +{phone}</p>
    </div>
  );
}

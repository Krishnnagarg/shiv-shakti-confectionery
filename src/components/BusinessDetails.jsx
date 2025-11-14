import React from "react";

export default function BusinessDetails() {
  const address = process.env.REACT_APP_BUSINESS_ADDRESS;
  const name = process.env.REACT_APP_BUSINESS_NAME;
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2 text-gray-700">Address: {address}</p>
      <p className="mt-1 text-gray-700">Open: 9:00 AM - 9:00 PM</p>
      <p className="mt-1 text-gray-700">Phone: +{process.env.REACT_APP_WHATSAPP_NUMBER}</p>
    </div>
  );
}

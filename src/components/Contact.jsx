import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const { name, phone, item, quantity, message } = formData;

    // ✅ Your WhatsApp number (replace if needed)
    const phoneNumber = "919876543210"; // Example: +91 9876543210

    const text = `Hello Shiv Shakti Confectionery 👋,%0A
I would like to place an order:%0A
🍰 Name: ${name}%0A
📞 Phone: ${phone}%0A
🧁 Item: ${item}%0A
🔢 Quantity: ${quantity}%0A
💬 Message: ${message || "No additional message"}%0A
Please confirm my order.%0A%0A
🏪 *Shop Details:*%0A
Shiv Shakti Confectionery%0A
Old Anaj Mandi, Safidon (Jind)%0A
Pincode: 126112`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-lightGray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Place Your Order
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Fresh cakes, pastries, and sweets delivered straight from our bakery to your home.
          Fill out the form below or order instantly via WhatsApp!
        </p>

        {/* 🧁 Order Form */}
        <form
          onSubmit={handleWhatsAppOrder}
          className="grid gap-4 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            name="item"
            placeholder="Item Name (e.g. Chocolate Cake)"
            value={formData.item}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Any special request? (optional)"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 min-h-[100px]"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            Send Order via WhatsApp
          </button>
        </form>

        {/* 🏪 Shop Info Section */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Shiv Shakti Confectionery
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Old Anaj Mandi, Safidon (Jind) <br />
            Pincode: 126112
          </p>
          <p className="text-gray-600 mt-2">
            Open Daily: 9:00 AM – 9:00 PM
          </p>
        </div>

        {/* 📱 Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </div>
    </section>
  );
}

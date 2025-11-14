export default function Hero() {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ss01.webp')", // put your image in public/ folder
      }}
    >
      <div className="text-center px-6 bg-white/40 backdrop-blur-md p-6 rounded-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 transition-all">
          Freshly Baked Happiness, Everyday!
        </h1>

        <p className="text-gray-700 max-w-xl mx-auto mb-6 font-medium">
          Premium cakes, pastries, sweets, chocolates and bakery products delivered with love.
        </p>

        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(
            "Hi, I want to order fresh bakery items."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-all inline-block"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}

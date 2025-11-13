export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-lightGray">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 transition-all">
          Freshly Baked Happiness, Everyday!
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Premium cakes, pastries, sweets, chocolates and bakery products delivered with love.
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-all">
          Order Now
        </button>
      </div>
    </section>

  );
}

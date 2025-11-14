export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/ss02.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>

        <p className="text-gray-700 leading-relaxed">
          Shiv Shakti Confectionery is your one-stop destination for delicious cakes,
          pastries, sweets, chocolates and premium bakery items. With years of experience
          and a passion for quality, we focus on freshness, hygiene and taste.
          Every product is made with hand-picked ingredients to ensure unforgettable flavor.
        </p>
      </div>
    </section>
  );
}

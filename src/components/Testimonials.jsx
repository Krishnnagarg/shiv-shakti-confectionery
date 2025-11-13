export default function Testimonials() {
  const testimonials = [
    {
      name: "Anjali Mehta",
      text: "“Absolutely loved their pineapple cake! So soft, creamy, and fresh — everyone at the party asked where I ordered it from.”",
    },
    {
      name: "Rahul Sharma",
      text: "“Shiv Shakti Confectionery never disappoints. Their sweets are made with pure ingredients and taste just like homemade.”",
    },
    {
      name: "Priya Verma",
      text: "“The chocolate truffle cake was heavenly! Beautiful presentation, perfect sweetness, and delivered on time.”",
    },
    {
      name: "Karan Gupta",
      text: "“Highly recommended! Their staff is polite and the products are always freshly baked. Best bakery in town.”",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-lightGray p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                {t.text}
              </p>
              <h4 className="font-semibold text-primary">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

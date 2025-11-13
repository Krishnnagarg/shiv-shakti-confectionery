const services = [
  { title: "Custom Cakes", desc: "Delicious cakes made to order for birthdays, weddings & events." },
  { title: "Pastries & Bakery Items", desc: "Freshly baked pastries, cookies, breads & more." },
  { title: "Indian Sweets", desc: "Traditional sweets prepared with pure ingredients." },
  { title: "Gift Hampers", desc: "Beautiful gift boxes for festivals & special occasions." },
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-lightGray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

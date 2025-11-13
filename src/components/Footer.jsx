export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>© 2025 Shiv Shakti Confectionery. All rights reserved.</p>


        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:scale-110 transition-all">Facebook</a>
          <a href="#" className="hover:scale-110 transition-all">Instagram</a>
          <a href="#" className="hover:scale-110 transition-all">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

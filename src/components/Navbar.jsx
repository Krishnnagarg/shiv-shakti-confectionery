export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Shiv Shakti Confectionery</h1>
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li className="hover:text-primary transition-all cursor-pointer">Home</li>
          <li className="hover:text-primary transition-all cursor-pointer">About</li>
          <li className="hover:text-primary transition-all cursor-pointer">Services</li>
          <li className="hover:text-primary transition-all cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

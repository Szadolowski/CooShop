export default function NavSection() {
  return (
    <nav className="sticky top-0 flex flex-row justify-between items-center p-5 shadow-md z-30">
      <h1 className="text-3xl font-black text-gray-800">
        <span className="text-pink-600">Coo</span>Shop
      </h1>
      <div className="flex flex-row space-x-2">
        <img src=" " alt="wyszukiwanie" className="hidden lg:inline" />
        <img src=" " alt="konto" className="hidden lg:inline" />
        <img src=" " alt="koszyk" className="hidden lg:inline" />
        <img src=" " alt="menu" />
      </div>
    </nav>
  );
}

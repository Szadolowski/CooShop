export default function FooterSection() {
  return (
    <footer className="absolute mt-10 bottom-0 left-0 w-full bg-black text-white flex flex-col items-center justify-center p-5">
      <div className="flex flex-row space-x-5 mb-5">
        <a href="#" className="text-white hover:text-gray-400">
          About Us
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Contact
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Privacy Policy
        </a>
      </div>
      <p className=" relative text-sm text-gray-400">© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
}

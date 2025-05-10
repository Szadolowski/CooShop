import Instagram from "../svg/Instagram";
import X from "../svg/X";
import Facebook from "../svg/Facebook";
import Youtube from "../svg/Youtube";
import Envelope from "../svg/Envelope";
import Telephone from "../svg/Telephone";
import Linkedin from "../svg/Linkedin";

export default function FooterSection() {
  return (
    <footer className=" bg-black text-gray-400 flex flex-col items-center justify-center p-5 w-full">
      <div className="mb-8 lg:flex lg:flex-row w-full lg:items-start">
        <div className="flex flex-col px-5 lg:w-1/4">
          <h2 className="my-7 text-amber-50 text-4xl font-bold">
            <span className="text-pink-600">Coo</span>Shop
          </h2>
          <p>Your favorite online store with fashionable clothing and jewelry. certified, the latest trends straight to your home.</p>
          <div className="flex flex-row space-x-5 mt-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <X />
            </a>
            <a href="https://www.facebook.com/?locale=pl_PL" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
          </div>
        </div>
        <div className="flex flex-col px-5 lg:w-1/4">
          <h5 className="text-amber-50 text-2xl font-bold my-4">Category</h5>
          <div className="flex flex-col space-y-0.5 text-sm text-gray-400">
            <span>Women's clothes</span>
            <span>Men's clothes</span>
            <span>Jewelry</span>
            <span>Accessories</span>
            <span>New</span>
            <span>Promotions</span>
          </div>
        </div>
        <div className="flex flex-col px-5 lg:w-1/4">
          <h5 className="text-amber-50 text-2xl font-bold my-4">Information</h5>
          <div className="flex flex-col space-y-0.5 text-sm text-gray-400">
            <span>About us</span>
            <span>Contact</span>
            <span>Delivery and payments</span>
            <span>Returns and complaints</span>
            <span>Privacy policy</span>
            <span>Terms and conditions</span>
          </div>
        </div>
        <div className="flex flex-col px-5 lg:w-1/4">
          <h5 className="text-amber-50 text-2xl font-bold my-4">Contact</h5>
          <div className="flex flex-col space-y-0.5 text-sm text-gray-400">
            <a href="https://www.linkedin.com/in/rafalcurzydlo/" className="group flex flex-row items-center space-x-2">
              <Linkedin />
              <span className="group-hover:text-white group-hover:cursor-pointer">Rafał Curzydło</span>
            </a>
            <a href="mailto:rafalcurzydlo.biz@gmail.com" className="group flex flex-row items-center space-x-2">
              <Envelope />
              <span className="group-hover:text-white group-hover:cursor-pointer">rafalcurzydlo.biz@gmail.com</span>
            </a>
            <a href="tel:+48792802918" className="group flex flex-row items-center space-x-2">
              <Telephone />
              <span className="group-hover:text-white group-hover:cursor-pointer">Number</span>
            </a>
          </div>
        </div>
      </div>
      <p className=" relative text-sm text-gray-400 pt-16 border-t border-gray-300 w-full text-center">© 2025 CooShop. All rights reserved.</p>
    </footer>
  );
}

import Instagram from "../svg/Instagram";
import X from "../svg/X";
import Facebook from "../svg/Facebook";
import Youtube from "../svg/Youtube";

export default function FooterSection() {
  return (
    <footer className=" mt-10 bg-black text-gray-400 flex flex-col items-center justify-center p-5 w-full">
      <div className="mb-8 lg:flex lg:flex-row w-full lg:items-start">
        <div className="flex flex-col px-5 lg:w-1/4">
          <h2 className="my-7 text-amber-50 text-4xl font-bold">CooShop</h2>
          <p>
            Your favorite online store with fashionable clothing and jewelry. certified, the latest
            trends straight to your home.
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-5 lg:space-y-0 space-y-2 mt-5">
            <Instagram />
            <X />
            <Facebook />
            <Youtube />
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
            <span>...</span>
          </div>
        </div>
      </div>
      <p className=" relative text-sm text-gray-400 pt-16 border-t border-gray-300 w-full text-center">
        © 2025 CooShop. All rights reserved.
      </p>
    </footer>
  );
}

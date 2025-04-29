import heart from "./../assets/heart.svg";

export default function ProductCard({ image, title, price, promotion = false }) {
  let cena = price;
  console.log(cena);
  return (
    <>
      <section className="relative overflow-hidden rounded-lg bg-gray-100 h-80 w-80 group">
        <img
          src={image}
          alt={`${title} image`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 w-full bg-black/50 h-1/6 invisible group-hover:visible  flex flex-row justify-between items-center p-4">
          <img src={heart} alt="" className="w-10" />
          <button className="bg-black py-2 px-4 text-amber-50 font-light rounded-4xl">
            Dodaj do koszyka
          </button>
        </div>
        {promotion && (
          <div className="bg-red-700 absolute top-2 left-2 rounded-4xl px-1 py-0.5 font-light text-[0.85rem] text-white">
            Promocja
          </div>
        )}
      </section>
      <div className="mt-1 text-left flex flex-col">
        <span>{title}</span>
        <span className="font-medium">{price}</span>
      </div>
    </>
  );
}

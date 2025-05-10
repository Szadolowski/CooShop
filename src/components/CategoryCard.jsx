const CategoryCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-row w-full justify-center items-center space-x-1 px-5 mb-10 mt-5">
        <h4 className="font-bold text-2xl">Category</h4>
        <div className="w-full bg-gray-600 h-[0.5px]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((category, index) => (
          <section key={index} className="relative overflow-hidden rounded-lg bg-gray-100 h-80 w-80 group m-10 group">
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <h3 className="absolute left-2 bottom-10 text-gray-200 text-xl font-semibold">{category.title}</h3>
            <div className="absolute bottom-5 bg-white rounded-4xl group-hover:h-0.5 group-hover:w-[90%]"></div>
          </section>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;

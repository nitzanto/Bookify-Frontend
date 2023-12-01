const Kitchen = ({ imgURL, name, price }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={imgURL} alt={name} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-center font-palanquin mb-2">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Kitchen;

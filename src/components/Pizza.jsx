import { pizzaData } from "../data.js";

const Pizza = () => {
  const pizzas = pizzaData;



  return (
    <div className="grid grid-cols-3 gap-10 text-center p-2">
      {pizzas.map((p) => (
        <>
          <div className="bg-slate-100 p-2 rounded-xl">
            <span className="italic">{p.name}</span>

            <img
              src={p.photoName}
              alt="foto"
              className="rounded-2xl w-44 mt-2"
            />
            <span className="text-gray-500">
              <span className="font-bold text-black">$</span> {p.price}
            </span>
          </div>
        </>
      ))}
    </div>
  );
};
export default Pizza;

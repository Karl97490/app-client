import { NavLink } from "react-router-dom";
// import "../styles/Cards.css";

export const Cards = ({ obj, onDelete }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm relative">
        <NavLink to={`details/${obj.id}`}>
          <figure className="bg-pink-100 h-52">
            <img
              src={
                obj.breadId
                  ? "https://static.vecteezy.com/ti/vecteur-libre/p1/50084123-pixel-art-burger-jeu-atout-conception-vectoriel.jpg"
                  : "https://i.redd.it/6p8s2ry7jgx71.jpg"
              }
              alt="Sandwich pixel-art"
              className="w-full h-full object-cover"
            />
          </figure>
        </NavLink>
        <div className="card-body gap-3">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-left line-clamp-1 min-h-[2.6rem] ">
              {obj.name}
            </h2>
            <div className="badge badge-secondary">New</div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-left font-semibold ">Description</h3>
            <p className="text-left line-clamp-2 min-h-[2.6rem]">
              {obj.description}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_2.5fr] gap-2 place-items-center py-1">
            <div className="badge badge-neutral font-medium text-neutral-content">
              Ingredients
            </div>
            <div className="flex items-center justify-evenly w-full">
              <div className="badge bg-green-100 border-green-400">
                {obj.ingredients.lettuce && "🥬"}
              </div>
              <div className="badge bg-red-100 border-red-400">
                {obj.ingredients.meat && "🥩"}
              </div>
              <div className="badge bg-yellow-100 border-yellow-400">
                {obj.ingredients.cheese && "🧀"}
              </div>
              <div className="badge bg-orange-100 border-orange-400">
                {obj.ingredients.vegies && "🥕"}
              </div>
              <div className="badge bg-gray-100 border-black">
                {obj.ingredients.sauce && "🫙"}
              </div>
            </div>
          </div>
          {obj.id.length > 2 && (
            <div className="card-actions justify-between absolute top-0 right-0 left-0 p-1">
              <NavLink to={`edit/${obj.id}`}>
                <button className="w-9 h-9 btn btn-info btn-soft btn-circle rounded-full">
                  ✎
                </button>
              </NavLink>
              <button
                className="w-9 h-9 btn btn-error btn-soft btn-circle rounded-full text-xs"
                onClick={() => onDelete(obj.id)}
              >
                ✘
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

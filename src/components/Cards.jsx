import { NavLink } from "react-router-dom";
// import "../styles/Cards.css";

export const Cards = ({ obj, onDelete }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm relative overflow-hidden">
      <NavLink to={`details/${obj.id}`}>
        <figure className="h-52 ">
          <img
            src={obj.image}
            // {
            //   obj.breadId
            //     ? "https://static.vecteezy.com/ti/vecteur-libre/p1/50084123-pixel-art-burger-jeu-atout-conception-vectoriel.jpg"
            //     : "https://i.redd.it/6p8s2ry7jgx71.jpg"
            // }
            alt="Sandwich pixel-art"
            className="w-full h-full object-cover"
          />
        </figure>
      </NavLink>
      <div className="card-body gap-3">
        <div className="flex flex-col items-start">
          <div className="flex justify-between items-center gap-1 w-full">
            <h2 className="card-title text-left line-clamp-1 min-h-[1.8rem]">
              {obj.name}
            </h2>
            {obj.id.length > 2 ? (
              <div className="badge badge-secondary">New</div>
            ) : (
              <div className="badge badge-warning">
                {obj.breadId ? "Classic" : "Original"}
              </div>
            )}
          </div>
          {obj.location ? (
            <span className="text-base text-gray-500">
              {obj.location.country}, {obj.location.city}
            </span>
          ) : (
            <span className="text-sm text-gray-500">{obj.origin}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-left font-semibold ">Description</h3>
          <p className="text-left line-clamp-2 min-h-[2rem]">
            {obj.description}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_2.5fr] gap-3 place-items-center py-1">
          {obj.breadId && (
            <div className="badge badge-neutral font-medium text-neutral-content">
              Ingredients
            </div>
          )}
          <div className="flex items-center justify-start gap-1 w-full">
            {obj.ingredients.lettuce && (
              <div className="badge bg-green-100 border-green-400">🥬</div>
            )}
            {obj.ingredients.meat && (
              <div className="badge bg-red-100 border-red-400">🥩</div>
            )}
            {obj.ingredients.cheese && (
              <div className="badge bg-yellow-100 border-yellow-400">🧀</div>
            )}
            {obj.ingredients.vegies && (
              <div className="badge bg-orange-100 border-orange-400">🥕</div>
            )}
            {obj.ingredients.sauce && (
              <div className="badge bg-gray-100 border-gray-400">🫙</div>
            )}
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
  );
};

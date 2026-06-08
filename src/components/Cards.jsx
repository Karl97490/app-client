import { NavLink } from "react-router-dom";

export const Cards = ({ obj, onDelete }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={obj.image} alt="Sandwich image" name="logo" />
      </div>
      <div className="infos">
        <div className="header">
          <h3 id="title">Name: {obj.name}</h3>
          {obj.location && (
            <span>
              From: {obj.location.country}, {obj.location.city}
            </span>
          )}
          {/* {obj.type && <span> Type: {obj.type}</span>} */}
        </div>
        <div className="details">
          {obj.origin ? (
            <>
              <span id="title">
                <strong>Origin: </strong>
                {obj.origin}
              </span>
              <ul id="type">
                <li>
                  <strong>Type:</strong> {obj.type}
                </li>
              </ul>
            </>
          ) : (
            <>
              <span id="title">
                <strong>Ingredients</strong>
              </span>
              <ul id="ingredients">
                {/* <li><strong>Bread:</strong></li> */}
                {obj.ingredients.lettuce && (
                  <li>
                    🥬<span>Lettuce</span>
                  </li>
                )}
                {obj.ingredients.cheese && (
                  <li>
                    🧀<span>Cheese</span>
                  </li>
                )}
                {obj.ingredients.meat && (
                  <li>
                    🥩<span>Meat</span>
                  </li>
                )}
                {obj.ingredients.vegies && (
                  <li>
                    🫛<span>Vegies</span>
                  </li>
                )}
                {obj.ingredients.sauce && (
                  <li>
                    🫙<span>Sauce</span>
                  </li>
                )}
              </ul>
            </>
          )}
        </div>
        {/* <div className="description">
                    <span>Description:</span>
                    <p>{obj.description}</p>
                </div> */}
      </div>
      {obj.id.length > 2 && (
        <div className="btn-container">
          <NavLink to={`edit/${obj.id}`}>
            <button id="edit-btn">EDIT</button>
          </NavLink>
          <button id="edit-btn" onClick={() => onDelete(obj.id)}>
            DELETE
          </button>
        </div>
      )}
    </div>
  );
};

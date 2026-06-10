import "../styles/Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Form = ({ onChange, stateForm, onSubmit, isLoading }) => {
  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="sandwich-form">
        <h3>Create Sandwich</h3>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={stateForm.name || ""}
            onChange={onChange}
          />
        </label>

        <label>
          Nickname
          <input
            type="text"
            name="nickname"
            value={stateForm.nickname || ""}
            onChange={onChange}
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            name="image"
            value={stateForm.image || ""}
            onChange={onChange}
          />
        </label>
        <fieldset>
          <legend>Location</legend>

          <label>
            Country
            <input
              type="text"
              name="country"
              data-section="location"
              value={stateForm.location.country || ""}
              onChange={onChange}
            />
          </label>

          <label>
            City
            <input
              type="text"
              name="city"
              data-section="location"
              value={stateForm.location.city || ""}
              onChange={onChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Ingredients</legend>

          <label>
            Bread
            <select
              name="breadId"
              // data-section="ingredients"
              value={stateForm.breadId || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="B1">The French Baguette</option>
              <option value="B2">Brioche Bun</option>
              <option value="B3">White Bread</option>
              <option value="B4">Rye Bread</option>
              <option value="B5">Country Wheat Baguette</option>
              <option value="B6">Rustic Lyonnais Loaf</option>
              <option value="B7">Belgian Sandwich Roll</option>
              <option value="B8">Mediterranean Bakery Bread</option>
            </select>
          </label>

          <label>
            Lettuce
            <select
              name="lettuce"
              data-section="ingredients"
              value={stateForm.ingredients.lettuce || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="salad">Salad</option>
              <option value="endive">Endive</option>
            </select>
          </label>

          <label>
            Cheese
            <select
              name="cheese"
              data-section="ingredients"
              value={stateForm.ingredients.cheese || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="gruyere">Gruyere</option>
              <option value="emmental">Emmental</option>
            </select>
          </label>

          <label>
            Meat
            <select
              name="meat"
              data-section="ingredients"
              value={stateForm.ingredients.meat || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="beef">Beef</option>
              <option value="chicken">Chicken</option>
              <option value="ham">Ham</option>
            </select>
          </label>

          <label>
            Veggies
            <select
              name="vegies"
              data-section="ingredients"
              value={stateForm.ingredients.vegies || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="tomato">Tomato</option>
              <option value="carrot">Carrot</option>
            </select>
          </label>

          <label>
            Sauce
            <select
              name="sauce"
              data-section="ingredients"
              value={stateForm.ingredients.sauce || ""}
              onChange={onChange}
            >
              <option value="">None</option>
              <option value="ketchup">Ketchup</option>
              <option value="mayonnaise">Mayonnaise</option>
              <option value="butter">Butter</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend>Description</legend>

          <label>
            <textarea
              name="description"
              rows="4"
              value={stateForm.description || ""}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <div className="btn-container">
          <button type="submit" disabled={isLoading}>
            {isLoading ? <span>Loading...</span> : <span>Create Sandwich</span>}
          </button>
          <Link to="/sandwiches">
            <button>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

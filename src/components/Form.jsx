import "../styles/Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Form = ({ onChange, stateForm, onSubmit, isLoading }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={onSubmit} className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4 justify-center">Create Sandwich</h2>

          {/* General */}
          <fieldset className="fieldset border border-base-300 rounded-box p-4">
            <legend className="fieldset-legend text-lg">
              General Information
            </legend>

            <label className="label">Name *</label>
            <input
              type="text"
              name="name"
              value={stateForm.name || ""}
              onChange={onChange}
              className="input input-bordered w-full"
              required
            />

            <label className="label mt-3">Nickname</label>
            <input
              type="text"
              name="nickname"
              value={stateForm.nickname || ""}
              onChange={onChange}
              className="input input-bordered w-full"
            />

            <label className="label mt-3">Image URL</label>
            <input
              type="url"
              name="image"
              value={stateForm.image || ""}
              onChange={onChange}
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Location */}
          <fieldset className="fieldset border border-base-300 rounded-box p-4">
            <legend className="fieldset-legend text-lg">Location</legend>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="floating-label">
                  <span>Country *</span>
                  <input
                    type="text"
                    name="country"
                    data-section="location"
                    value={stateForm.location.country || ""}
                    onChange={onChange}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>

              <div>
                <label className="floating-label">
                  <span>City *</span>
                </label>

                <input
                  type="text"
                  name="city"
                  data-section="location"
                  value={stateForm.location.city || ""}
                  onChange={onChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Ingredients */}
          <fieldset className="fieldset border border-base-300 rounded-box p-4">
            <legend className="fieldset-legend text-lg">Ingredients</legend>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Bread *</label>

                <select
                  name="breadId"
                  value={stateForm.breadId || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a bread</option>
                  <option value="B1">The French Baguette</option>
                  <option value="B2">Brioche Bun</option>
                  <option value="B3">White Bread</option>
                  <option value="B4">Rye Bread</option>
                  <option value="B5">Country Wheat Baguette</option>
                  <option value="B6">Rustic Lyonnais Loaf</option>
                  <option value="B7">Belgian Sandwich Roll</option>
                  <option value="B8">Mediterranean Bakery Bread</option>
                </select>
              </div>

              <div>
                <label className="label">Lettuce</label>

                <select
                  name="lettuce"
                  data-section="ingredients"
                  value={stateForm.ingredients.lettuce || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                >
                  <option value="">None</option>
                  <option value="salad">Salad</option>
                  <option value="endive">Endive</option>
                </select>
              </div>
              <div>
                <label className="label">Cheese</label>

                <select
                  name="cheese"
                  data-section="ingredients"
                  value={stateForm.ingredients.cheese || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                >
                  <option value="">None</option>
                  <option value="gruyere">Gruyere</option>
                  <option value="emmental">Emmental</option>
                </select>
              </div>
              <div>
                <label className="label">Meat</label>

                <select
                  name="meat"
                  data-section="ingredients"
                  value={stateForm.ingredients.meat || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                >
                  <option value="">None</option>
                  <option value="Ham">Ham</option>
                  <option value="Beef">Beef</option>
                  <option value="Chicken">Chicken</option>
                </select>
              </div>
              <div>
                <label className="label">Vegies</label>

                <select
                  name="vegies"
                  data-section="ingredients"
                  value={stateForm.ingredients.vegies || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                >
                  <option value="">None</option>
                  <option value="carrots">Carrots</option>
                  <option value="tomatoes">Tomatoes</option>
                </select>
              </div>
              <div>
                <label className="label">Sauce</label>

                <select
                  name="sauce"
                  data-section="ingredients"
                  value={stateForm.ingredients.sauce || ""}
                  onChange={onChange}
                  className="select select-bordered w-full"
                >
                  <option value="">None</option>
                  <option value="ketchup">Ketchup</option>
                  <option value="mayonnese">Mayonnese</option>
                  <option value="mustard">Mustard</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Description */}
          <fieldset className="fieldset border border-base-300 rounded-box p-4">
            <legend className="fieldset-legend text-lg">Description *</legend>

            <textarea
              name="description"
              rows="5"
              value={stateForm.description || ""}
              onChange={onChange}
              className="textarea textarea-bordered w-full"
              placeholder="Describe your sandwich..."
              required
            />
          </fieldset>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-2">
            <Link to="/sandwiches">
              <button
                type="button"
                className="btn btn-outline w-full sm:w-auto"
              >
                Back
              </button>
            </Link>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full sm:w-auto"
            >
              {isLoading ? "Creating..." : "Create Sandwich"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export const Form = ({ onChange, stateForm, onSubmit }) => {

    return (
        <>
            <div>This is Form component</div>
            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <label>Name
                        <input
                            type="text"
                            name="name"
                            value={stateForm.name}
                            placeholder="Name"
                            onChange={onChange}
                        />
                    </label>
                    <label>Nickname
                        <input
                            type="text"
                            name="nickname"
                            value={stateForm.nickname}
                            placeholder="Nickname"
                            onChange={onChange}
                        />
                    </label>
                    <span>Location</span>
                    <label>
                        Country
                        <input
                            type="text"
                            name="country"
                            data-section="location"
                            value={stateForm.location.country}
                            placeholder="Country"
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        City
                        <input
                            type="text"
                            name="city"
                            data-section="location"
                            value={stateForm.location.city}
                            placeholder="City"
                            onChange={onChange}
                        />
                    </label>
                    <span>Ingredients</span>
                    <label>
                        Lettuce
                        <select
                            name="lettuce"
                            data-section="ingredients"
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
                            onChange={onChange}
                        >
                            <option value="">None</option>
                            <option value="beef">Beef</option>
                            <option value="chicken">Chicken</option>
                        </select>
                    </label>
                    <label>
                        Vegies
                        <select
                            name="vegies"
                            data-section="ingredients"
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
                            onChange={onChange}
                        >
                            <option value="">None</option>
                            <option value="ketchup">Ketchup</option>
                            <option value="mayonese">Mayonese</option>
                        </select>
                    </label>
                    <label>
                        Image
                        <input
                            type="url"
                            name="image"
                            value={stateForm.image}
                            placeholder="Image"
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            type="text"
                            value={stateForm.description}
                            name="description"
                            onChange={onChange}
                        />
                    </label>
                    <button type="submit">New sandwich</button>
                </form>
            </div>
        </>

    )
}
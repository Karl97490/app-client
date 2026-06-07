
export const Cards = ({ obj }) => {
    return (
        <div className="card">
            <div className="logo-container">
                <img src={obj.image} alt="Sandwich image" name="logo" />
            </div>
            <div className="infos">
                <div className="header">
                    <h3 id="title">Name: {obj.name}</h3>
                    {obj.location &&
                        <span>From: {obj.location.country}, {obj.location.city}</span>
                    }
                    {/* {obj.type && <span> Type: {obj.type}</span>} */}
                </div>
                <div className="details">
                    {obj.origin ?
                        <>
                            <span id="title"><strong>Origin: </strong>{obj.origin}</span>
                            <ul id="type">
                                <li><strong>Type:</strong> {obj.type}</li>
                            </ul>
                        </>
                        :
                        <>
                            <span id="title"><strong>Ingredients</strong></span>
                            <ul id="ingredients">
                                <li><strong>Bread:</strong></li>
                                <li><strong>Lettuce:</strong> {obj.ingredients.lettuce}</li>
                                <li><strong>Cheese:</strong> {obj.ingredients.cheese}</li>
                                <li><strong>Meat:</strong> {obj.ingredients.meat}</li>
                                <li><strong>Vegies:</strong> {obj.ingredients.vegies}</li>
                                <li><strong>Sauce:</strong> {obj.ingredients.sauce}</li>
                            </ul>
                        </>
                    }

                </div>
                {/* <div className="description">
                    <span>Description:</span>
                    <p>{obj.description}</p>
                </div> */}
            </div>
        </div>
    )
}
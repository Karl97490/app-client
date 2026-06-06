import Baguette from "../assets/images/baguette-logo.webp"

export const Footer = () => {
    return(
        <div className="footer">
            <div className="logo-container">
                <img src={Baguette} alt="Logo" width="40px"/>
                {/* <span id="title">Sandwich Maker</span> */}
            </div>
        </div>
    )
}
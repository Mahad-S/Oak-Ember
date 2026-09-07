import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Coffee, Done Right.</h1>
                <p>Small-batch roasts crafted for better mornings.</p>
                <Link to="/shop" className="shop-button">
                    SHOP COFFEE
                </Link>
            </div>

            <div className="hero-image"></div>
        </section>
    );
}
export default Hero;
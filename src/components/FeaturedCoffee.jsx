import { useState } from "react";
import { Link } from "react-router-dom";

function FeaturedCoffee() {

    const [slide, setSlide] = useState(0);

    return (
        <section className="featured-coffee">

            <h2>Featured Coffee</h2>

            <div className="coffee-slider">

                {/* LEFT ARROW */}
                <button
                    onClick={() => setSlide(Math.max(slide - 1, 0))}
                >
                    ←
                </button>

                {/* VIEWPORT */}
                <div className="coffee-viewport">

                    {/* CARDS */}
                    <div
                        className="coffee-cards"
                        style={{
                            transform: `translateX(-${slide * 35}%)`
                        }}
                    >

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>House Blend</h3>
                            <p>Balanced and smooth</p>
                            <p>$18</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                        </div>

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>Dark Ember</h3>
                            <p>Rich and chocolatey</p>
                            <p>$20</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                        </div>

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>Ethiopian Bloom</h3>
                            <p>Fruity and bright</p>
                            <p>$22</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                            
                        </div>

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>Oak Roast</h3>
                            <p>Deep and nutty</p>
                            <p>$19</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                        </div>

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>Morning Roast</h3>
                            <p>Light and smooth</p>
                            <p>$17</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                        </div>

                        <div className="coffee-card">
                            <div className="coffee-image"></div>
                            <h3>Ember Espresso</h3>
                            <p>Bold and intense</p>
                            <p>$21</p>
                            <Link to="/shop" className="shop-buttons">Shop Now</Link>
                        </div>

                    </div>

                </div>

                {/* RIGHT ARROW */}
                <button
                    onClick={() => setSlide(Math.min(slide + 1, 2))}
                >
                    →
                </button>

            </div>

        </section>
    );
}

export default FeaturedCoffee;
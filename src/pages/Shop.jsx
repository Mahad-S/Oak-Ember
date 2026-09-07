function Shop() {
    return (
        <main className="shop-page">

            <div className="shop-header">
                <h1>Shop Coffee</h1>
                <p>Find your next favorite roast.</p>
            </div>

            <div className="shop-products">

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>House Blend</h2>
                    <p>Balanced and smooth</p>
                    <span>$18</span>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>Dark Ember</h2>
                    <p>Rich and chocolatey</p>
                    <span>$20</span>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>Ethiopian Bloom</h2>
                    <p>Fruity and bright</p>
                    <span>$22</span>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>Oak Roast</h2>
                    <p>Deep and nutty</p>
                    <span>$19</span>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>Morning Roast</h2>
                    <p>Light and smooth</p>
                    <span>$17</span>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image"></div>
                    <h2>Ember Espresso</h2>
                    <p>Bold and intense</p>
                    <span>$21</span>
                    <button>Add to Cart</button>
                </div>

            </div>

        </main>
    );
}

export default Shop;
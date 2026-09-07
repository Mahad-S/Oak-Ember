import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./pages/Shop";
import FeaturedCoffee from "./components/FeaturedCoffee";
import Footer from "./components/Footer";
import PromoBar from "./components/PromoBar";
import Contact from "./pages/Contact"; 
import Location from "./pages/Location";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <PromoBar />
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <FeaturedCoffee />
                        </>
                    }
                />

                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/location" element={<Location />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
import Navbar from "./components/Header/Navbar";
import Carousel from "./components/Body/Carousel/Carousel";
import Cards from "./components/Body/Card/Card";
import CardItems from "./components/Body/CardItems/CardItems";
import Footer from "./components/Footer/Footer";
import Paggination from "./components/Body/Paggination/Paggination";
import ShowCart from "./components/Body/ShowCart.js/ShowCart";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const showCart = useSelector((state) => state.display.display);

  return (
    <>
      <div className="gradient google-font">
        {showCart && <ShowCart />}
        {!showCart && (
          <>
            <Navbar />
            <Carousel />
            <Cards />
            <CardItems />
            <Paggination />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
export default App;

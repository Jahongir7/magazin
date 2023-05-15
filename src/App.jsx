import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Routers from "./routes/router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;

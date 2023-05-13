import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Routers from "./routes/router";

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

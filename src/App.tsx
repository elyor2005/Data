import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewsLatter from "./components/Newslatter";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLatter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

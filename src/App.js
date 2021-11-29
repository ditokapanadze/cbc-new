import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Aboutus from "./components/aboutus/Aboutus";
import Roadmap from "./components/roadmap/Roadmap";
import Faq from "./components/faq/Faq";
import Nft from "./components/nft/Nft";
import Slider from "./components/slider/Slider";
import BotttomBanner from "./components/botoomBanner/BottomBanner";
import Footer from "./components/footer/Footer";
import Stats from "./components/stats/Stats";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Aboutus />
      <Roadmap />
      <Faq />
      <Nft />
      <Slider />
      <Stats />
      <BotttomBanner />
      <Footer />
    </div>
  );
}

export default App;

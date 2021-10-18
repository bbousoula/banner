import "./styles.css";
import Banner from "/components/Banner.jsx";
import mobileImg from "./img/small.jpg";
import defaultImg from "./img/large.jpg";

export default function App() {
  return (
    <div className="App">
      <Banner
        mobileSrc={mobileImg}
        tabletSrc={defaultImg}
        desktopSrc={defaultImg}
        alt="my banner"
        bannerClass="banner_img"
      />
    </div>
  );
}

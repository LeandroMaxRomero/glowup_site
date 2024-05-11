import QuestionCard from "../QuestionCard/QuestionCard";
import { BlogSpotsSlider } from "./BlogSpots/BlogSpotsSlider";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./ServiceInfo/Services";
// import Slider from "./Slider/Slider";
import { Footer } from "../Footer/Footer";
import { Background } from "./Background";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsMobile } from "./AboutUs/AboutUsMobile";

export const Home = () => {
  return (
    <div >
      <Background />

      <div className="container__home" id="home">
        <Header />
        <Hero />
        <Services />
        <AboutUs />
        <AboutUsMobile />
        {/* <Slider /> */}
        <BlogSpotsSlider />
        <QuestionCard />
        <Footer />
      </div>

    </div>
  )
}

import QuestionCard from "../QuestionCard/QuestionCard";
import { AboutUs } from "./AboutUs";
import { BlogSpotsSlider } from "./BlogSpots/BlogSpotsSlider";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./ServiceInfo/Services";
import Slider from "./Slider/Slider";

import { Background } from "./Background"

export const Home = () => {
  return (
    <div >
      <Background />

      <div className="container__home">
        <Header />
        <Hero />
        <Services />
        <AboutUs />
        <Slider />
        <BlogSpotsSlider />
        <QuestionCard />
      </div>
    </div>
  )
}

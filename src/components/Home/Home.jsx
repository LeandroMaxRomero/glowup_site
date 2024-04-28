import QuestionCard from "../QuestionCard/QuestionCard";
import { AboutUs } from "./AboutUs";
import { BlogSpotsSlider } from "./BlogSpots/BlogSpotsSlider";
import { Header } from "./Header";
import { Services } from "./ServiceInfo/Services";
import Slider from "./Slider/Slider";

export const Home = () => {
  return (
    <div className="container__home">
      <Header />
      <Services />
      <AboutUs />
      <Slider />
      <BlogSpotsSlider />
      <QuestionCard />
    </div>
  )
}

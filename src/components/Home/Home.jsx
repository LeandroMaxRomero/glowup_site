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

import { useContext } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';

export const Home = () => {

  const { showCard } = useContext(SurveyContext);
  
  return (
    <>
    <QuestionCard />
      <div >
        <Background />

        <div className={(showCard===true?'blur':'')+" container__home"} id="home">
          <Header />
          <Hero />
          <Services />
          <AboutUs />
          <AboutUsMobile />
          {/* <Slider /> */}
          <BlogSpotsSlider />
          <Footer />
        </div>

      </div>
    </>
  )
}

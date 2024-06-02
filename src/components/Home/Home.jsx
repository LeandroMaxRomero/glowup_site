import QuestionCard from "../QuestionCard/QuestionCard";
import { BlogSpotsSlider } from "./BlogSpots/BlogSpotsSlider";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./ServiceInfo/Services";
import { Footer } from "../Footer/Footer";
import { Background } from "./Background";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutUsMobile } from "./AboutUs/AboutUsMobile";
import * as Scroll from "react-scroll";
import { useContext, useEffect } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';

import { LenguaContext } from "../../Context/LangProvider";

export const Home = () => {

  const { showCard } = useContext(SurveyContext);
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  const title = {
    title_es: "Mantente informado",
    title_en: "Stay informed"
  }
  
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
          <BlogSpotsSlider content ={lang==='castellano'? title.title_es : title.title_en}/>
          <Footer />
        </div>

      </div>
    </>
  )
}

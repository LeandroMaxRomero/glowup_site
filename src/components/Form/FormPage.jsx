
import { useEffect, useContext } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { Form } from './Form';
import { Footer } from '../Footer/Footer';
import { BackgroundForm } from './BackgroundForm';
import * as Scroll from "react-scroll";



const FormPage = () => {
  const { setShowCard, showCard } = useContext(SurveyContext);

  useEffect(() => {
    const isCompleted = localStorage.getItem('surveyCompleted');
    const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');


    if (!isCompleted && isClosedWithoutCompletion) {
      setShowCard(true);
    }
    
  }, [setShowCard]);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <>
        <QuestionCard />
    <div className={(showCard===true?'blur':'')+' container__formpage'}>

      <BackgroundForm />
      
      <div>
        <Form />
        <Footer />
      </div>
      
    </div>
    </>
  );
};

export default FormPage;

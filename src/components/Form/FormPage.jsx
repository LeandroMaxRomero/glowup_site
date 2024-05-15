
import { useEffect, useContext } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { Form } from './Form';
import { Footer } from '../Footer/Footer';
import { BackgroundForm } from './BackgroundForm';


const FormPage = () => {
  const { setShowCard } = useContext(SurveyContext);

  useEffect(() => {
    const isCompleted = localStorage.getItem('surveyCompleted');
    const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');

    if (!isCompleted && isClosedWithoutCompletion) {
      setShowCard(true);
    }
  }, [setShowCard]);

  return (
    <div className='container__formpage'>

      <BackgroundForm />
      
      <div>
        <QuestionCard />
        <Form />
        <Footer />
      </div>
      
    </div>
  );
};

export default FormPage;

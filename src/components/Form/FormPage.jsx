
import { useEffect, useContext } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';
import { Form } from './Form';

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
    <div>
      <h1>Formulario</h1>
      <QuestionCard />
      <Form />
    </div>
  );
};

export default FormPage;

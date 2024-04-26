
import { useEffect, useContext } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import { SurveyContext } from '../../Context/SurveyContext';

const FormPage = () => {
  const { setShowCard } = useContext(SurveyContext);

  useEffect(() => {
    const isCompleted = localStorage.getItem('surveyCompleted');
    const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');

    if (!isCompleted && isClosedWithoutCompletion) {
      setShowCard(true); // Mostrar el cuestionario si no está completado y fue cerrado sin completarse previamente
    }
  }, [setShowCard]);

  return (
    <div>
      <h1>Formulario</h1>
      <QuestionCard />
      {/* Resto de tu página de formulario... */}
    </div>
  );
};

export default FormPage;

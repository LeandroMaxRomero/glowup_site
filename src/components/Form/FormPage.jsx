
import QuestionCard from '../QuestionCard/QuestionCard';
import { useQuestionnaire } from '../../Context/QuestionnaireContext';

const FormPage = () => {
  const { showCard, completed } = useQuestionnaire();

  return (
    <div>
      <h1>Formulario</h1>
      {!completed && showCard && <QuestionCard />}
      {/* Resto de tu página de formulario... */}
    </div>
  );
};

export default FormPage;

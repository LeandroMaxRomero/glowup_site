import  {useState, useContext, useEffect } from 'react';
import { QuestionnaireContext } from '../../Context/QuestionnaireContext';

const QuestionCard = () => {
    const { showCard, setShowCard, setCompleted } = useContext(QuestionnaireContext);

    useEffect(() => {
        const isCompleted = localStorage.getItem('questionnaireCompleted');
        if (isCompleted) {
          setShowCard(false);
        }
      }, [setShowCard]);


  const questions = [
    {
      id: 1,
      question: '¿Cuál es la capital de Francia?',
      options: ['Madrid', 'París', 'Londres']
    },
    {
      id: 2,
      question: '¿Cuál es el río más largo del mundo?',
      options: ['Amazonas', 'Nilo', 'Mississippi']
    },
    {
      id: 3,
      question: '¿Cuál es tu opinión sobre este tema?',
      input: true
    },
    {
      id: 4,
      question: '¿Cuál es la montaña más alta del mundo?',
      options: ['Monte Everest', 'Monte Kilimanjaro', 'Monte Aconcagua']
    },
    {
      id: 5,
      question: '¿Cuál es la capital de España?',
      options: ['Madrid', 'Barcelona', 'Valencia']
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userInput, setUserInput] = useState('');
  
  const handleCloseQuestionnaire = () => {
    setShowCard(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleNextQuestion = () => {
    const selectedAnswer = {
      question: questions[currentQuestionIndex].question,
      answer: selectedOption || userInput
    };
    localStorage.setItem(`question_${currentQuestionIndex}`, JSON.stringify(selectedAnswer));

    setSelectedOption(null);
    setUserInput('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowCard(false);
    }
    if (currentQuestionIndex === questions.length - 1) {
        setCompleted(true);
        localStorage.setItem('questionnaireCompleted', 'true');
      }
  };


  return (
    <div>
      {showCard && (
        <div>
          <button onClick={handleCloseQuestionnaire}>Cerrar cuestionario</button>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options ? (
            <ul>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleOptionSelect(option)} disabled={selectedOption !== null}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <textarea value={userInput} onChange={handleUserInput} />
          )}
          {selectedOption || userInput ? (
            <button onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente pregunta'}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

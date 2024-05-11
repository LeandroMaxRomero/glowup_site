import { useState, useContext, useEffect } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';

const QuestionCard = () => {
    const { showCard, setShowCard, setCompleted, completed } = useContext(SurveyContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(new Set());
    const [userInput, setUserInput] = useState('');
    const [userResponses, setUserResponses] = useState({});

    useEffect(() => {
        const isCompleted = localStorage.getItem('surveyCompleted');
        const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');

        if (isCompleted) {
            setShowCard(false); // Si el cuestionario se ha completado, no lo mostramos
        } else if (isClosedWithoutCompletion) {
            setShowCard(true); // Si el cuestionario fue cerrado sin completarse, lo mostramos nuevamente
        }
    }, [setShowCard]);

    const handleCloseSurvey = () => {
        if (!completed) {
            localStorage.setItem('surveyClosedWithoutCompletion', 'true'); // Guardamos el registro en el almacenamiento local
        }
        setShowCard(false); // Siempre cerramos el cuestionario al hacer clic en "Cerrar cuestionario"
    };

    useEffect(() => {
        if (Object.keys(userResponses).length > 0) {
            localStorage.setItem('userResponses', JSON.stringify(userResponses));
        }
    }, [userResponses]);


    const handleOptionSelect = (option) => {
        if (currentQuestionIndex === 1) {
            const updatedSelectedOptions = new Set(selectedOptions);
            if (updatedSelectedOptions.has(option)) {
                updatedSelectedOptions.delete(option);
            } else {
                updatedSelectedOptions.add(option);
            }
            setSelectedOptions(updatedSelectedOptions);
        } else {
            setSelectedOptions(new Set([option]));
        }
    };

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
    };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    let response;

    if (currentQuestion.options) {
        response = [...selectedOptions];

        
        if (selectedOptions.has("Other (please specify)")) {
            response.push(userInput.trim());
        }
    } else {
        response = userInput;
    }

    setUserResponses((prevResponses) => ({
        ...prevResponses,
        [currentQuestionIndex]: response,
    }));

    setSelectedOptions(new Set());
    setUserInput('');

    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        setShowCard(false);
        setCompleted(true);
        localStorage.setItem('surveyCompleted', 'true');
    }
};

  

    const questions = [
        {
            id: 1,
            question: 'How satisfied are you with your current marketing efforts?',
            options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
        },
        {
            id: 2,
            question: "What are your main goals for improving your practice's marketing?",
            options: ['Increase patient inquiries', 'Enhance online visibility', 'Boost appointment bookings', 'Improve brand awareness', 'Generate more leads', 'Other (please specify)'],
        },
        {
            id: 3,
            question: 'What challenges or obstacles are you currently facing with your marketing efforts?',
            input: true
        },
        {
            id: 4,
            question: 'How important is it for you to address these challenges and improve your marketing strategy?',
            options: ['Not Important', 'Somewhat Important', 'Neutral ', 'Important', 'Very Important']
        },
        {
            id: 5,
            question: 'How likely are you to consider partnering with a marketing agency to address these challenges?',
            options: ['Very Unlikely', 'Unlikely', 'Neutral', 'Likely', 'Very Likely']
        }
    ];

    return (
        <div className='container__survey'>

            {showCard && (
                <div className='survey--card'>
                    
                    <button className='survey__btn--close' onClick={handleCloseSurvey}>X</button>

                    <h2>{questions[currentQuestionIndex].question}</h2>

                    {questions[currentQuestionIndex].options
                        ? (
                            <ul className='answers--list'>
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <li key={index}>
                                        {currentQuestionIndex === 1 ? (
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    checked={selectedOptions.has(option)}
                                                    onChange={() => handleOptionSelect(option)}
                                                    className='checkboxes'
                                                />
                                                <p>{option}</p>
                                            </label>
                                        ) : (
                                            <button onClick={() => handleOptionSelect(option)} disabled={selectedOptions.has(option)}>
                                                {option}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )
                        : (
                            <textarea value={userInput} onChange={handleUserInput} />
                        )}

                    {currentQuestionIndex === 1 && selectedOptions.has("Other (please specify)") && (
                        <textarea
                            value={userInput}
                            onChange={handleUserInput}
                            placeholder="Ingrese su respuesta aquí..."
                        />
                    )}

                    <div className='survey__btn--nav'>
                        {currentQuestionIndex > 0 && (
                            <button className='survey__btn--anterior' onClick={handlePreviousQuestion}>Anterior</button>
                        )}
                        {(selectedOptions.size > 0 || userInput) && (
                            <button className='survey__btn--siguiente' onClick={handleNextQuestion}>
                                {currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente pregunta'}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;

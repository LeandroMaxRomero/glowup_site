import { useState, useContext, useEffect } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Lang } from '../NavBar/Lang';

const QuestionCard = () => {
    
    const useLengua = () => useContext(LenguaContext);
    const { lang } = useLengua();
    
    const useSurvey = () =>  useContext(SurveyContext);
    const { showCard, setShowCard, setCompleted, completed } = useSurvey();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(new Set());
    const [userInput, setUserInput] = useState('');
    const [userResponses, setUserResponses] = useState({});
    // const [closedWithoutCompletion, setClosedWithoutCompletion] = useState(false);
    

    useEffect(() => {
        const isCompleted = localStorage.getItem('surveyCompleted');
        const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');

        if (isCompleted) {
            setShowCard(false); //* Si el cuestionario se ha completado, no lo mostramos
        } else if (isClosedWithoutCompletion) {
            setShowCard(true); //* Si el cuestionario fue cerrado sin completarse, lo mostramos nuevamente
        }
    }, [setShowCard]);

    const handleCloseSurvey = () => {
        if (!completed) {
            localStorage.setItem('surveyClosedWithoutCompletion', 'true'); //* Guardamos el registro en el almacenamiento local
        }
        setShowCard(false); //* Siempre cerramos el cuestionario al hacer clic en "Cerrar cuestionario"
    };

    useEffect(() => {
        if (Object.keys(userResponses).length > 0) {
            localStorage.setItem('userResponses', JSON.stringify(userResponses));
        }
    }, [userResponses]);//* Función que actualiza el userResponses y lo guarda en el localStorage


    // useEffect(() => {
    //     const isCompleted = localStorage.getItem('surveyCompleted');
    //     let closeCount = localStorage.getItem('surveyCloseCount') || 0;

    //     if (isCompleted || closeCount >= 2) {
    //         setShowCard(false); // Si el cuestionario se ha completado o se ha cerrado dos veces, no lo mostramos
    //     }
    // }, [setShowCard]);

    // const handleCloseSurvey = () => {
    //     let closeCount = localStorage.getItem('surveyCloseCount') || 0;
        
    //     if (!completed) {
    //         closeCount++;
    //         localStorage.setItem('surveyCloseCount', closeCount); // Incrementar el contador de cierre
    //     }

    //     if (closeCount >= 2) {
    //         setShowCard(false); // Si el cuestionario ha sido cerrado dos veces, no lo mostramos
    //     } else {
    //         setShowCard(true); // Mostrar el cuestionario nuevamente
    //     }
    // };

    // useEffect(() => {
    //     const isCompleted = localStorage.getItem('surveyCompleted');

    //     if (isCompleted) {
    //         setShowCard(false); //* Si el cuestionario se ha completado, no lo mostramos
    //     } else if (closedWithoutCompletion) {
    //         setShowCard(true); //* Si el cuestionario fue cerrado sin completarse, lo mostramos nuevamente
    //     }
    // }, [setShowCard, closedWithoutCompletion]);

    // const handleCloseSurvey = () => {
    //     if (!completed) {
    //         if (!closedWithoutCompletion) {
    //             setClosedWithoutCompletion(true);
    //         } else {
    //             setCompleted(true);
    //             localStorage.setItem('surveyCompleted', 'true');
    //         }
    //     }
    //     setShowCard(false); //* Siempre cerramos el cuestionario al hacer clic en "Cerrar cuestionario"
    // };

    // useEffect(() => {
    //     const isCompleted = localStorage.getItem('surveyCompleted');
    //     const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');

    //     if (isCompleted) {
    //         setShowCard(false); //* Si el cuestionario se ha completado, no lo mostramos
    //     } else if (isClosedWithoutCompletion) {
    //         setShowCard(true); //* Si el cuestionario fue cerrado sin completarse, lo mostramos nuevamente
    //     }
    // }, [setShowCard]);

    // const handleCloseSurvey = () => {
    //     if (!completed) {
    //         if (!closedWithoutCompletion) {
    //             setClosedWithoutCompletion(true);
    //         } else {
    //             setCompleted(true);
    //             localStorage.setItem('surveyCompleted', 'true');
    //         }
    //     }
    //     setShowCard(false); //* Siempre cerramos el cuestionario al hacer clic en "Cerrar cuestionario"
    // };

    // useEffect(() => {
    //     if (Object.keys(userResponses).length > 0) {
    //         localStorage.setItem('userResponses', JSON.stringify(userResponses));
    //     }
    // }, [userResponses]);


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
      //* Determinación del tipo de respuesta esperada
      let optionsKey;
      if (lang === 'castellano' && currentQuestion.options_es) {
          optionsKey = 'options_es';
      } else if (lang === 'english' && currentQuestion.options_en) {
          optionsKey = 'options_en';
      }

      if (optionsKey) {
          //* La pregunta tiene opciones
          response = [...selectedOptions];

          //* Verificar si la opción "Other (please specify)" está seleccionada
          if (selectedOptions.has("Other (please specify)") || selectedOptions.has("Otro (especificar)")) {
              response.push(userInput.trim());
          }
      } else {
          //* La pregunta es abierta y requiere entrada de texto
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
            question_es: '¿Qué tan satisfecho estás con tus esfuerzos de marketing actuales?',
            question_en: 'How satisfied are you with your current marketing efforts?',
            options_es: ['Muy satisfecho', 'Satisfecho', 'Neutral', 'Insatisfecho', 'Muy insatisfecho'],
            options_en: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
        },
        {
            id: 2,
            question_es: "¿Cuáles son tus principales objetivos para mejorar el marketing de tu práctica?",
            options_es: ['Aumentar las consultas de pacientes', 'Mejorar la visibilidad en línea', 'Aumentar las reservas de citas', 'Mejorar el conocimiento de la marca', 'Generar más clientes potenciales', 'Otro (especificar)'],
            question_en: "What are your main goals for improving your practice's marketing?",
            options_en: ['Increase patient inquiries', 'Enhance online visibility', 'Boost appointment bookings', 'Improve brand awareness', 'Generate more leads', 'Other (please specify)'],
        },
        {
            id: 3,
            question_es: '¿Qué desafíos u obstáculos enfrentas actualmente con tus esfuerzos de marketing?',
            question_en: 'What challenges or obstacles are you currently facing with your marketing efforts?',
            input: true
        },
        {
            id: 4,
            question_es: '¿Qué tan importante es para ti abordar estos desafíos y mejorar tu estrategia de marketing?',
            options_es: ['No importante', 'Algo importante', 'Neutral', 'Importante', 'Muy importante'],
            question_en: 'How important is it for you to address these challenges and improve your marketing strategy?',
            options_en: ['Not Important', 'Somewhat Important', 'Neutral ', 'Important', 'Very Important']
        },
        {
            id: 5,
            question_es: '¿Qué tan probable es que consideres asociarte con una agencia de marketing para abordar estos desafíos?',
            options_es: ['Muy poco probable', 'Poco probable', 'Neutral', 'Probable', 'Muy probable'],
            question_en: 'How likely are you to consider partnering with a marketing agency to address these challenges?',
            options_en: ['Very Unlikely', 'Unlikely', 'Neutral', 'Likely', 'Very Likely']
        }
    ];
    

    return (
        <div className='container__survey'>

            {showCard && (
                <div className='survey--card'>
                    <div className='survey--sup'>

                        <Lang />

                        <button className='survey__btn--close' onClick={handleCloseSurvey}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="22.6274" width="32" height="3" transform="rotate(-45 0 22.6274)" fill="white"/>
                            <rect x="2.12109" width="32" height="3" transform="rotate(45 2.12109 0)" fill="white"/>
                            </svg>
                        </button>

                    </div>
                    

                    <h2>{lang==='castellano' ? questions[currentQuestionIndex].question_es : questions[currentQuestionIndex].question_en}</h2>

                    {questions[currentQuestionIndex].options_es
                        ? (
                            <ul className='answers--list'>
                                {questions[currentQuestionIndex].options_es.map((option, index) => (
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
                                                <span className='checkboxes'></span>
                                                <p>{lang === 'castellano' ? option : questions[currentQuestionIndex].options_en[index]}</p>
                                            </label>
                                        ) : (
                                            <button onClick={() => handleOptionSelect(option)} disabled={selectedOptions.has(option)}>
                                                {lang === 'castellano' ? option : questions[currentQuestionIndex].options_en[index]}
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )
                        : (
                            <textarea className='textarea--card'value={userInput} onChange={handleUserInput} />
                        )}

                    {currentQuestionIndex === 1 && (selectedOptions.has("Other (please specify)") || selectedOptions.has("Otro (especificar)")) && (
                        <textarea
                            className='textarea--card'
                            value={userInput}
                            onChange={handleUserInput}
                            placeholder={lang==='castellano'?"Ingrese su respuesta aquí":"Enter your response here..."}
                        />
                    )}

                    <div className='survey__btn--nav'>
                        {currentQuestionIndex > 0 && (
                            <button className='survey__btn--anterior' onClick={handlePreviousQuestion}>
                                <svg width="39" height="14" viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M38.9082 7.3099C38.9082 6.76316 38.465 6.31995 37.9183 6.31995H4.0323C3.48557 6.31995 3.04235 6.76316 3.04235 7.3099C3.04235 7.85663 3.48557 8.29984 4.0323 8.29984H37.9183C38.465 8.29984 38.9082 7.85663 38.9082 7.3099Z" fill="white"/>
                                  <path d="M0.908203 7.38029C1.68779 8.15492 2.94651 8.15491 3.72609 7.38027L8.65288 2.4847C9.04369 2.09637 9.04369 1.46412 8.65287 1.07579C8.26556 0.690938 7.64021 0.690941 7.2529 1.0758L0.908203 7.38029Z" fill="white"/>
                                  <path d="M3.72609 7.38027C2.9465 6.60564 1.68779 6.60565 0.908203 7.38029L7.25297 13.6847C7.64028 14.0696 8.26563 14.0696 8.65294 13.6847C9.04375 13.2964 9.04375 12.6641 8.65293 12.2758L3.72609 7.38027Z" fill="white"/>
                                </svg>
                                {lang==='castellano'?"Atras":"Back"}
                            </button>
                        )}
                        {(selectedOptions.size > 0 || userInput) && (
                            <button className='survey__btn--siguiente' onClick={handleNextQuestion}>
                                {currentQuestionIndex === questions.length - 1 ? (lang==='castellano'?"Terminar":"Finish") : (lang==='castellano'?"Siguiente":"Next")}
                                <svg width="39" height="15" viewBox="0 0 39 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.336914 7.3092C0.336914 6.75692 0.784629 6.3092 1.33691 6.3092H35.3369C35.8892 6.3092 36.3369 6.75692 36.3369 7.3092C36.3369 7.86149 35.8892 8.3092 35.3369 8.3092H1.33691C0.78463 8.3092 0.336914 7.86149 0.336914 7.3092Z" fill="white"/>
                                  <path d="M38.479 7.38031C37.698 8.16135 36.4317 8.16135 35.6506 7.38029L30.7009 2.43052C30.3104 2.03999 30.3104 1.40683 30.7009 1.01631C31.0914 0.625785 31.7246 0.625788 32.1151 1.01631L38.479 7.38031Z" fill="white"/>
                                  <path d="M35.6506 7.38029C36.4317 6.59925 37.698 6.59926 38.479 7.38031L32.1151 13.7442C31.7245 14.1348 31.0914 14.1348 30.7008 13.7442C30.3103 13.3537 30.3103 12.7205 30.7008 12.33L35.6506 7.38029Z" fill="white"/>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;

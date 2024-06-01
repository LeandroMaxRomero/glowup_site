import { useState, useContext, useEffect } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';
import { LenguaContext } from "../../Context/LangProvider";
import { Lang } from '../NavBar/Lang';

export const QuestionCard = () => {
    
    const useLengua = () => useContext(LenguaContext);
    const { lang } = useLengua();
    
    const useSurvey = () =>  useContext(SurveyContext);
    const { showCard, setShowCard, setCompleted, completed, setClosedDef } = useSurvey();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(new Set());
    const [userInput, setUserInput] = useState('');
    const [userResponses, setUserResponses] = useState({});
    
    useEffect(() => {
        const isCompleted = localStorage.getItem('surveyCompleted');
        const isClosedWithoutCompletion = localStorage.getItem('surveyClosedWithoutCompletion');
        
        if (isCompleted) {
            setShowCard(false); //* Si el cuestionario se ha completado, no lo mostramos
        } else if (isClosedWithoutCompletion) {
            setShowCard(true); //* Si el cuestionario fue cerrado sin completarse, lo mostramos nuevamente
        }
    }, [ setShowCard ]);

    const handleCloseSurvey = () => {
        if (!completed) {
            localStorage.setItem('surveyClosedWithoutCompletion', 'true'); //* Guardamos el registro en el almacenamiento local
            setClosedDef(prev => {
                const newClosedDef = prev + 1;
                if (newClosedDef >= 2) {
                    setCompleted(true);
                    localStorage.setItem('surveyCompleted', 'true');
                }
                return newClosedDef;
            });
        }
        setShowCard(false); //* Siempre cerramos el cuestionario al hacer clic en "Cerrar cuestionario"
    };
    
    useEffect(() => {
        if (Object.keys(userResponses).length > 0) {
            localStorage.setItem('userResponses', JSON.stringify(userResponses));
        }
        //! USER RESPONSES
        console.log(userResponses)
    }, [userResponses]);//* Función que actualiza el userResponses y lo guarda en el localStorage

   
      

    // const handleOptionSelect = (option) => {
    //     if (currentQuestionIndex === 1 || currentQuestionIndex === 3 || currentQuestionIndex === 4) {
    //         const updatedSelectedOptions = new Set(selectedOptions);
    //         if (updatedSelectedOptions.has(option)) {
    //             updatedSelectedOptions.delete(option);
    //         } else {
    //             updatedSelectedOptions.add(option);
    //         }
    //         setSelectedOptions(updatedSelectedOptions);
    //     } else {
    //         setSelectedOptions(new Set([option]));
    //     }
    // };

    // const handleOptionSelect = (option) => {
    //     const updatedSelectedOptions = new Set(selectedOptions);
    //     console.log(updatedSelectedOptions);
      
    //     // Verificar si la opción "E. Other" está seleccionada
    //     const otherOption = lang === 'castellano' ? 'E. Otro' : 'E. Other';
    //     if (option === otherOption) {
    //       // Si se selecciona "E. Other", limpiar el userInput
    //       setUserInput('');
    //     }
      
    //     // Determinar si la pregunta acepta múltiples respuestas
    //     const currentQuestion = questions[currentQuestionIndex];
      
    //     // Índices de preguntas que aceptan múltiples respuestas
    //     const multiResponseQuestionIndexes = [0, 1, 3, 4];
      
    //     if (multiResponseQuestionIndexes.includes(currentQuestion.id - 1)) {
    //       // Toggle de opciones seleccionadas para preguntas de múltiple respuesta
    //       if (updatedSelectedOptions.has(option)) {
    //         updatedSelectedOptions.delete(option);
    //       } else {
    //         updatedSelectedOptions.add(option);
    //       }
    //     } else {
    //       // Selección única para preguntas de respuesta única
    //       updatedSelectedOptions.clear();
    //       updatedSelectedOptions.add(option);
    //     }
    //     //! UPDATED SELECTED OPTIONS
    //     console.log(updatedSelectedOptions)
      
    //     setSelectedOptions(updatedSelectedOptions);
        
    //     //! SELECTED OPTIONS
    //     console.log(selectedOptions);
    //   };

    // const handleOptionSelect = (option) => {
    //     const updatedSelectedOptions = new Set(selectedOptions);
    //     console.log(updatedSelectedOptions);
    
    //     // Verificar si la opción "E. Other" está seleccionada
    //     const otherOption = lang === 'castellano' ? 'E. Otro' : 'E. Other';
    //     if (option === otherOption) {
    //         // Si se selecciona "E. Other", limpiar el userInput
    //         setUserInput('');
    //     }
    
    //     // Determinar si la pregunta acepta múltiples respuestas
    //     const currentQuestion = questions[currentQuestionIndex];
    
    //     // Índices de preguntas que aceptan múltiples respuestas
    //     const multiResponseQuestionIndexes = [0, 1, 3, 4];
    
    //     if (multiResponseQuestionIndexes.includes(currentQuestion.id - 1)) {
    //         // Toggle de opciones seleccionadas para preguntas de múltiple respuesta
    //         if (updatedSelectedOptions.has(option)) {
    //             updatedSelectedOptions.delete(option);
    //         } else {
    //             updatedSelectedOptions.add(option);
    //         }
    //     } else {
    //         // Selección única para preguntas de respuesta única
    //         updatedSelectedOptions.clear();
    //         updatedSelectedOptions.add(option);
    //     }
    //     //! UPDATED SELECTED OPTIONS
    //     console.log(updatedSelectedOptions);
    
    //     setSelectedOptions(new Set(updatedSelectedOptions));
    // };

    const handleOptionSelect = (option) => {
        const updatedSelectedOptions = new Set(selectedOptions);
    
        // Verificar si la opción "E. Other" está seleccionada
        const otherOption = lang === 'castellano' ? 'E. Otro' : 'E. Other';
        if (option === otherOption) {
            // Si se selecciona "E. Other", limpiar el userInput
            setUserInput('');
        }
    
        // Determinar si la pregunta acepta múltiples respuestas
        const currentQuestion = questions[currentQuestionIndex];
        const multiResponseQuestionIndexes = [0, 1, 3, 4];
    
        if (multiResponseQuestionIndexes.includes(currentQuestion.id - 1)) {
            // Toggle de opciones seleccionadas para preguntas de múltiple respuesta
            if (updatedSelectedOptions.has(option)) {
                updatedSelectedOptions.delete(option);
            } else {
                updatedSelectedOptions.add(option);
            }
        } else {
            // Selección única para preguntas de respuesta única
            updatedSelectedOptions.clear();
            updatedSelectedOptions.add(option);
        }
    
        setSelectedOptions(new Set(updatedSelectedOptions));
    };
    
    useEffect(() => {
        // Ver el estado actualizado de selectedOptions
        console.log(selectedOptions);
    }, [selectedOptions]);
    
    
    useEffect(() => {
        //! SELECTED OPTIONS
        console.log(selectedOptions);
    }, [selectedOptions]);
    

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
    };

    // const handleNextQuestion = () => {
    //   const currentQuestion = questions[currentQuestionIndex];
    //   let response;
    //   //* Determinación del tipo de respuesta esperada
    //   let optionsKey;
    //   if (lang === 'castellano' && currentQuestion.options_es) {
    //       optionsKey = 'options_es';
    //   } else if (lang === 'english' && currentQuestion.options_en) {
    //       optionsKey = 'options_en';
    //   }

    //   if (optionsKey) {
    //       //* La pregunta tiene opciones
    //       response = [...selectedOptions];

    //       //* Verificar si la opción "E. Other" está seleccionada
    //       if (selectedOptions.has("E. Other") || selectedOptions.has("E. Otro")) {
    //           response.push(userInput.trim());
    //       }
    //   } else {
    //       //* La pregunta es abierta y requiere entrada de texto
    //       response = userInput;
    //   }

    //   setUserResponses((prevResponses) => ({
    //       ...prevResponses,
    //       [currentQuestionIndex]: response,
    //   }));

    //   setSelectedOptions(new Set());
    //   setUserInput('');

    //   if (currentQuestionIndex < questions.length - 1) {
    //       setCurrentQuestionIndex(currentQuestionIndex + 1);
    //   } else {
    //       setShowCard(false);
    //       setCompleted(true);
    //       localStorage.setItem('surveyCompleted', 'true');
    //   }
    // };

    const handleNextQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        let response;
        
        // Verificar la clave de las opciones según el idioma
        let optionsKey;
        if (lang === 'castellano' && currentQuestion.options_es) {
            optionsKey = 'options_es';
        } else if (lang !== 'castellano' && currentQuestion.options_en) {
            optionsKey = 'options_en';
        }
    
        // Validar si optionsKey fue establecido
        if (optionsKey) {
            // La pregunta tiene opciones
            response = [...selectedOptions];
    
            // Verificar si la opción "E. Other" está seleccionada
            const otherOption = lang === 'castellano' ? 'E. Otro' : 'E. Other';
            if (selectedOptions.has(otherOption)) {
                response.push(userInput.trim());
            }
        } else {
            // La pregunta es abierta y requiere entrada de texto
            response = userInput.trim();
        }
    
        // Actualizar userResponses
        setUserResponses((prevResponses) => ({
            ...prevResponses,
            [currentQuestionIndex]: response,
        }));
    
        // Limpiar estados
        setSelectedOptions(new Set());
        setUserInput('');
    
        // Continuar a la siguiente pregunta o finalizar la encuesta
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowCard(false);
            setCompleted(true);
            localStorage.setItem('surveyCompleted', 'true');
        }
    };
    

    // const handleNextQuestion = () => {
    //     const currentQuestion = questions[currentQuestionIndex];
    //     let response;
      
    //     // Determinar la clave de las opciones según el idioma
    //     let optionsKey;
    //     if (lang === 'castellano' && currentQuestion.options_es) {
    //       optionsKey = 'options_es';
    //     } else if (lang === 'english' && currentQuestion.options_en) {
    //       optionsKey = 'options_en';
    //     }
      
    //     if (optionsKey) {
    //       // La pregunta tiene opciones
    //       response = [...selectedOptions];
      
    //       // Verificar si la opción "E. Other" está seleccionada
    //       const otherOption = lang === 'castellano' ? 'E. Otro' : 'E. Other';
    //       if (selectedOptions.has(otherOption)) {
    //         response.push(userInput.trim());
    //       }
    //     }
      
    //     // Actualizar userResponses
    //     setUserResponses((prevResponses) => ({
    //       ...prevResponses,
    //       [currentQuestionIndex]: response,
    //     }));
      
    //     // Limpiar estados
    //     setSelectedOptions(new Set());
    //     setUserInput('');
      
    //     // Continuar a la siguiente pregunta o finalizar la encuesta
    //     if (currentQuestionIndex < questions.length - 1) {
    //       setCurrentQuestionIndex(currentQuestionIndex + 1);
    //     } else {
    //       setShowCard(false);
    //       setCompleted(true);
    //       localStorage.setItem('surveyCompleted', 'true');
    //     }
    //   };
      
    
    

    const questions = [
        {
            id: 1,
            title_es: 'Pregunta 1/6',
            title_en: 'Question 1/6',
            question_es:'¿Qué tipo de práctica médica opera?',
            question_en:'What type of medical practice do you operate?',
            options_en: ['A. Solo Practice', 'B. Group Practice', 'C. Clinic', 'D. Hospital', 'E. Other'],
            options_es: ['A. Práctica Individual', 'B. Práctica en Grupo', 'C. Clínica', 'D. Hospital', 'E. Otro']
        },
        {
            id: 2,
            title_es: 'Pregunta 2/6',
            title_en: 'Question 2/6',
            question_es:'¿Cuál es su objetivo principal de marketing?',
            question_en:'What is your primary marketing objective?',
            options_es: ['A. Aumentar las Citas de Pacientes', 'B. Mejorar la Presencia en Línea', 'C. Incrementar la Participación de los Pacientes', 'D. Mejorar la Retención de Pacientes', 'E. Otro'],
            options_en: ['A. Increase Patient Appointments', 'B. Enhance Online Presence', 'C. Boost Patient Engagement', 'D. Improve Patient Retention', 'E. Other']
        },
        {
            id: 3,
            title_es: 'Pregunta 3/6',
            title_en: 'Question 3/6',
            question_es:'¿Cuál es su presupuesto mensual actual de marketing?',
            question_en:'What is your current monthly marketing budget?',
            options_es: ['A. $500 - $1,000', 'B. $1,000 - $3,000', 'C. $3,000 - $5,000', 'D. $5,000 - $10,000', 'E. $10,000 +'],
            options_en: ['A. $500 - $1,000', 'B. $1,000 - $3,000', 'C. $3,000 - $5,000', 'D. $5,000 - $10,000', 'E. $10,000 +']
        },
        {
            id: 4,
            title_es: 'Pregunta 4/6',
            title_en: 'Question 4/6',
            question_es:'¿Quién es su audiencia objetivo principal?',
            question_en:'Who is your primary target audience?',
            options_es: ['A. Pacientes Locales', 'B. Pacientes Regionales', 'C. Pacientes Nacionales', 'D. Pacientes Internacionales'],
            options_en: ['A. Local Patients', 'B. Regional Patients', 'C. National Patients', 'D. International Patients']
        },
        {
            id: 5,
            title_es: 'Pregunta 5/6',
            title_en: 'Question 5/6',
            question_es:'¿Cuál es su mayor desafío de marketing en este momento?',
            question_en:'What is your biggest marketing challenge right now?',
            options_es: ['A. Generar Prospectos', 'B. Convertir Prospectos', 'C. Retener Pacientes', 'D. Medir el ROI', 'E. Otro'],
            options_en: ['A. Generating Leads', 'B. Converting Leads', 'C. Retaining Patients', 'D. Measuring ROI', 'E. Other']
        },
        {
            id: 6,
            title_es: 'Pregunta 6/6',
            title_en: 'Question 6/6',
            question_es:'¿Cuándo planea iniciar sus esfuerzos de marketing?',
            question_en:'How soon are you looking to start your marketing efforts?',
            options_es: ['A. Inmediatamente', 'B. Dentro de los próximos 1-3 meses', 'C. Dentro de los próximos 3-6 meses', 'D. No estoy seguro'],
            options_en: ['A. Immediately', 'B. Within the next 1-3 months', 'C. Within the next 3-6 months', 'D. Not sure']
        },
        
    ];
    

    return (
        <div className= 'container__survey'>

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

                    <div className='survey--content'>
                        <div className='encabezado--survey'>
                            <h2 className='title'>{lang==='castellano' ? questions[currentQuestionIndex].title_es : questions[currentQuestionIndex].title_en}</h2>
                            <h2 className='question'>{lang==='castellano' ? questions[currentQuestionIndex].question_es : questions[currentQuestionIndex].question_en}</h2>
                        </div>

                        <ul className='answers--list'>
                            {(lang === 'castellano' ? questions[currentQuestionIndex].options_es : questions[currentQuestionIndex].options_en).map((option, index) => (
                                <li key={index}>
                                    {(currentQuestionIndex === 0 || currentQuestionIndex === 1 || currentQuestionIndex === 3 || currentQuestionIndex === 4) ? (
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={option}
                                                checked={selectedOptions.has(option)}
                                                onChange={() => handleOptionSelect(option)}
                                                className='checkboxes'
                                            />
                                            <span className='checkboxes'></span>
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
                        
                        {(currentQuestionIndex === 0 || currentQuestionIndex === 1 || currentQuestionIndex === 4) && (selectedOptions.has("E. Other") || selectedOptions.has("E. Otro")) && (
                            <textarea
                                className='textarea--card'
                                value={userInput}
                                onChange={handleUserInput}
                                placeholder={lang==='castellano'?"Ingrese su respuesta aquí":"Enter your response here..."}
                            />
                        )}
                    </div>


                    <div className='survey__btn--nav'>
                        {currentQuestionIndex > 0 && (
                            <button className='survey__btn--anterior' onClick={handlePreviousQuestion}>
                                <svg width="39" height="14" viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M38.9082 7.3099C38.9082 6.76316 38.465 6.31995 37.9183 6.31995H4.0323C3.48557 6.31995 3.04235 6.76316 3.04235 7.3099C3.04235 7.85663 3.48557 8.29984 4.0323 8.29984H37.9183C38.465 8.29984 38.9082 7.85663 38.9082 7.3099Z" fill="white"/>
                                  <path d="M0.908203 7.38029C1.68779 8.15492 2.94651 8.15491 3.72609 7.38027L8.65288 2.4847C9.04369 2.09637 9.04369 1.46412 8.65287 1.07579C8.26556 0.690938 7.64021 0.690941 7.2529 1.0758L0.908203 7.38029Z" fill="white"/>
                                  <path d="M3.72609 7.38027C2.9465 6.60564 1.68779 6.60565 0.908203 7.38029L7.25297 13.6847C7.64028 14.0696 8.26563 14.0696 8.65294 13.6847C9.04375 13.2964 9.04375 12.6641 8.65293 12.2758L3.72609 7.38027Z" fill="white"/>
                                </svg>
                                <p>
                                    {lang==='castellano'?"Atras":"Back"}
                                </p>
                            </button>
                        )}
                        {(selectedOptions.size > 0 || userInput) && (
                            <button className='survey__btn--siguiente' onClick={handleNextQuestion}>
                                <p>
                                    {currentQuestionIndex === questions.length - 1 ? (lang==='castellano'?"Finalizar":"Finish") : (lang==='castellano'?"Siguiente":"Next")}
                                </p>
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
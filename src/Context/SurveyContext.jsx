
import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

export const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
  const [showCard, setShowCard] = useState(true);
  const [completed, setCompleted] = useState(false);

   // Inicializar closedDef desde localStorage o con un valor por defecto
   const [closedDef, setClosedDef] = useState(() => {
    const savedClosedDef = localStorage.getItem('closedDef');
    
    return savedClosedDef !== null ? Number(savedClosedDef) : 0;
  });

  // Actualizar localStorage cuando closedDef cambie
  useEffect(() => {
    localStorage.setItem('closedDef', closedDef);
  }, [closedDef]);

  return (
    <SurveyContext.Provider value={{ showCard, setShowCard, completed, setCompleted, closedDef, setClosedDef }}>
      {children}
    </SurveyContext.Provider>
  );
};

SurveyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SurveyProvider };

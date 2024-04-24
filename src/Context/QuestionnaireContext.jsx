
import { createContext, useState, useContext } from 'react';
import PropTypes from "prop-types";

export const QuestionnaireContext = createContext();

export const useQuestionnaire = () => {
  return useContext(QuestionnaireContext);
};

const QuestionnaireProvider = ({ children }) => {
  const [showCard, setShowCard] = useState(true);
  const [completed, setCompleted] = useState(false);

  return (
    <QuestionnaireContext.Provider value={{ showCard, setShowCard, completed, setCompleted }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};

QuestionnaireProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { QuestionnaireProvider };

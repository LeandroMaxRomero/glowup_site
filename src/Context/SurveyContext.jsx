
import { createContext, useState, useContext } from 'react';
import PropTypes from "prop-types";

export const SurveyContext = createContext();

export const useSurvey = () => {
  return useContext(SurveyContext);
};

const SurveyProvider = ({ children }) => {
  const [showCard, setShowCard] = useState(true);
  const [completed, setCompleted] = useState(false);

  return (
    <SurveyContext.Provider value={{ showCard, setShowCard, completed, setCompleted }}>
      {children}
    </SurveyContext.Provider>
  );
};

SurveyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SurveyProvider };

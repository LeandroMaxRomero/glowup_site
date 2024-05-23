import { useContext } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';

export const BackGroundTerms = () => {
    const { showCard } = useContext(SurveyContext);

  return (
    <div className={(showCard===true?'blur':'')+' container__background--terms'}>

        <div className="line-one">
        </div>
        <div className="line-two">
        </div>
        <div className="line-three">
        </div>

        <svg width="1440" height="483" viewBox="0 0 1440 483" fill="none" xmlns="http://www.w3.org/2000/svg" className="zigzag">
          <path d="M0.0483398 378.416L360.463 481.772L720.514 193.433L1072.47 389.46L1440.05 0.367188" stroke="#5BD8FF" strokeOpacity="0.1"/>
        </svg>

    </div>
  )
}

import { useContext } from 'react';
import { SurveyContext } from '../../Context/SurveyContext';

export const BackgroundBlogs = () => {
  const { showCard } = useContext(SurveyContext);

  return (
    <div className={(showCard===true?'blur':'')+" container__background--blogs"}>
        <svg width="923" height="936" viewBox="0 0 923 936" fill="none" xmlns="http://www.w3.org/2000/svg" className="light--one">
          <g filter="url(#filter0_f_188_181)">
            <path d="M822.957 474.402C822.957 673.764 661.342 835.379 461.98 835.379C262.617 835.379 -165.46 592.818 -165.46 393.456C-165.46 194.094 6.70685 -22.1452 461.98 113.425C800.855 214.334 822.957 275.04 822.957 474.402Z" fill="url(#paint0_linear_188_181)" fillOpacity="0.15"/>
          </g>
          <defs>
            <filter id="filter0_f_188_181" x="-265.46" y="-28.8998" width="1188.42" height="964.279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_181"/>
            </filter>
            <linearGradient id="paint0_linear_188_181" x1="461.979" y1="113.425" x2="461.979" y2="536.876" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5BD8FF"/>
              <stop offset="1" stopColor="#5BD8FF" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        <svg width="798" height="965" viewBox="0 0 798 965" fill="none" xmlns="http://www.w3.org/2000/svg" className="light--two">
          <g filter="url(#filter0_f_188_182)">
            <path d="M1089.39 503.598C1089.39 702.96 927.779 864.574 728.417 864.574C529.055 864.574 100.977 622.014 100.977 422.652C100.977 223.29 273.144 7.05046 728.417 142.62C1067.29 243.53 1089.39 304.235 1089.39 503.598Z" fill="url(#paint0_linear_188_182)" fillOpacity="0.15"/>
          </g>
          <defs>
            <filter id="filter0_f_188_182" x="0.977051" y="0.295929" width="1188.42" height="964.279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_188_182"/>
            </filter>
            <linearGradient id="paint0_linear_188_182" x1="728.416" y1="142.62" x2="728.416" y2="566.072" gradientUnits="userSpaceOnUse">
              <stop stopColor="#69FFB7"/>
              <stop offset="1" stopColor="#69FFB7" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        <svg width="1440" height="483" viewBox="0 0 1440 483" fill="none" xmlns="http://www.w3.org/2000/svg" className="zigzag">
          <path d="M0.0483398 378.416L360.463 481.772L720.514 193.433L1072.47 389.46L1440.05 0.367188" stroke="#5BD8FF" strokeOpacity="0.1"/>
        </svg>
    </div>
  )
}

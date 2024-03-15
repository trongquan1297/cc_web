
import React from 'react';
import "./style.css";
import "./galaxy.css";
import "./aboutme.css"
import createStars from "./animation"


const AboutMe: React.FC = ({}) => {

  

    return (
      <div className="">
        <div className="sky min-h-screen">
          <div className="sky__phase sky__dawn"></div>
          <div className="sky__phase sky__noon"></div>
          <div className="sky__phase sky__dusk"></div>
          <div className="sky__phase sky__midnight">
            <div id="sky__stars"></div>
          </div>
          <div className="orbit">
            <div className="sun"></div>
            <div className="moon"></div>
          </div>
        </div>
        <div className="content">
          <div className="content__container">
            <p className="content__container__text text-violet-200 dark:text-violet-200" >
              Eveything in 
            </p>
            
            <ul className="content__container__list">
              <li className="content__container__list__item" id="devops">DevOps !</li>
              <li className="content__container__list__item" id="guitar">Guitar !</li>
              <li className="content__container__list__item" id="astro">Astronomy !</li>
              <li className="content__container__list__item" id="photo">Photography !</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default AboutMe
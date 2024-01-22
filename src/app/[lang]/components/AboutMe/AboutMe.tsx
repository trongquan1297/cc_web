
import React from 'react';
import "./style.css";


const AboutMe: React.FC = ({}) => {

  

    return (
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">
            Eveything in 
          </p>
          
          <ul className="content__container__list">
            <li className="content__container__list__item">DevOps !</li>
            <li className="content__container__list__item">Guitar !</li>
            <li className="content__container__list__item">Astronomy !</li>
            <li className="content__container__list__item">Photography !</li>
          </ul>
        </div>
</div>
    );
};

export default AboutMe
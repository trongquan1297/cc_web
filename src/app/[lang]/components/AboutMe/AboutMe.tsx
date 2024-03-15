
import React from 'react';
import "./style.css";
import "./galaxy.css";


const AboutMe: React.FC = ({}) => {

  

    return (
      <div className="">
        <div className="night">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="hello ">
          <h1 className="hello_text text-violet-400 dark:bg-black dark:text-gray-100" >Hi !</h1>
        </div>
        <div className="content">
          <div className="content__container">
            <p className="content__container__text text-violet-400 dark:bg-black dark:text-gray-100" >
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
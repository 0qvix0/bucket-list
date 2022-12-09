import React from 'react';

import consent from '../assets/img/consent.svg'
import refusal from '../assets/img/refusal.svg'
import redact from '../assets/img/redact.svg'


const List = () => {
  return (
    <div className="list">
      <div className="container">
        <div className="list__main">
          <div className="list__main-block">
            <div className="list__main-block-title">Список дел:</div>
            <ul className="list__main-block-ul">
              <li className="list__main-block-ul-li">
                <p className="list__main-block-ul-li-text">Покормить кота</p>
                <img className="list__main-block-ul-li-consent img" src={consent} alt="consent" />
                <img className="list__main-block-ul-li-refusal img" src={refusal} alt="refusal" />
                <img className="list__main-block-ul-li-redact img" src={redact} alt="redact" />
              </li>
              <li className="list__main-block-ul-li">
                <p className="list__main-block-ul-li-text">Взять спагетти</p>
                <img className="list__main-block-ul-li-consent img" src={consent} alt="consent" />
                <img className="list__main-block-ul-li-refusal img" src={refusal} alt="refusal" />
                <img className="list__main-block-ul-li-redact img" src={redact} alt="redact" />
              </li>
              <li className="list__main-block-ul-li">
                <p className="list__main-block-ul-li-text">Покрасить кота</p>
                <img className="list__main-block-ul-li-consent img" src={consent} alt="consent" />
                <img className="list__main-block-ul-li-refusal img" src={refusal} alt="refusal" />
                <img className="list__main-block-ul-li-redact img" src={redact} alt="redact" />
              </li>
            </ul>
          </div>
          <div className="list__main-block">
            <div className="list__main-block-title">Выполненные дела:</div>
            <ul className="list__main-block-ul">
              <li className="list__main-block-ul-li done">
                <p className="list__main-block-ul-li-text">Покормить кота</p>
                <img className='list__main-block-ul-li-refusal img done-img' src={refusal} alt="refusal" />
              </li>
              <li className="list__main-block-ul-li done">
                <p className="list__main-block-ul-li-text">Взять спагетти</p>
                <img className='list__main-block-ul-li-refusal img done-img' src={refusal} alt="refusal" />
              </li>
              <li className="list__main-block-ul-li done">
                <p className="list__main-block-ul-li-text">Покрасить кота</p>
                <img className='list__main-block-ul-li-refusal img done-img' src={refusal} alt="refusal" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

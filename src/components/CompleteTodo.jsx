import React from 'react';

import refusal from '../assets/img/refusal.svg'

const DoneDeeds = () => {
  return (
    <li className="list__main-block-ul-li done">
      <p className="list__main-block-ul-li-text">Покормить кота</p>
      <img className="list__main-block-ul-li-refusal img done-img" src={refusal} alt="refusal" />
    </li>
  );
};

export default DoneDeeds;

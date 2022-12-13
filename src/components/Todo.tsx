import React from 'react';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type DeedsProps = {
  id: string,
  title: string,
  onClickRemove: any,
  onClickComplete: any,
}

const Deeds: React.FC<DeedsProps> = ({ onClickComplete, onClickRemove, title, id}) => {
  
  return (
    <>
      <p className="list__main-block-ul-li-text">{title}</p>
      <img className="list__main-block-ul-li-consent img" onClick={() => onClickComplete(id)} src={consent} alt="consent" />
      <img className="list__main-block-ul-li-refusal img" onClick={() => onClickRemove(id)} src={refusal} alt="refusal" />
      <img className="list__main-block-ul-li-redact img" src={redact} alt="redact" />
    </>
  );
};

export default Deeds;

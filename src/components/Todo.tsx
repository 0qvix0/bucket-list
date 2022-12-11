import React from 'react';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type DeedsProps = {
  title: string,
}

const Deeds: React.FC<DeedsProps> = ({title}) => {
  
  return (
    <>
      <p className="list__main-block-ul-li-text">{title}</p>
      <img className="list__main-block-ul-li-consent img" src={consent} alt="consent" />
      <img className="list__main-block-ul-li-refusal img" src={refusal} alt="refusal" />
      <img className="list__main-block-ul-li-redact img" src={redact} alt="redact" />
    </>
  );
};

export default Deeds;

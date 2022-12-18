import React from 'react';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type DeedsProps = {
  id: string,
  title: string,
  onClickRemove: (id: string) => {},
}

const Deeds: React.FC<DeedsProps> = ({ onClickRemove, title, id}) => {
  
  return (
    <>
      <p className="list__main-block-list-item-text">{title}</p>
      <img className="list__main-block-list-item-consent img" src={consent} alt="consent" />
      <img className="list__main-block-list-item-refusal img" onClick={() => onClickRemove(id)} src={refusal} alt="refusal" />
      <img className="list__main-block-list-item-redact img" src={redact} alt="redact" />
    </>
  );
};

export default Deeds;

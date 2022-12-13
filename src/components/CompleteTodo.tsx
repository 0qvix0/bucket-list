import React from 'react';

import refusal from '../assets/img/refusal.svg';

type DeedsProps = {
  title: string;
  id: string;
  onClickRemove: any;
};

const DoneDeeds: React.FC<DeedsProps> = ({ onClickRemove, title, id }) => {
  return (
    <>
      <p className="list__main-block-ul-li-text">{title}</p>
      <img
        onClick={() => onClickRemove(id)}
        className="list__main-block-ul-li-refusal img done-img"
        src={refusal}
        alt="refusal"
      />
    </>
  );
};

export default DoneDeeds;

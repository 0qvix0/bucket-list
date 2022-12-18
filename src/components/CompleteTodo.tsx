import React from 'react';

import refusal from '../assets/img/refusal.svg';

type DeedsProps = {
  title: string;
  id: string;
  onClickRemove: (id: string) => {};
};

const DoneDeeds: React.FC<DeedsProps> = ({ onClickRemove, title, id }) => {
  return (
    <>
      <p className="list__main-block-list-item-text">{title}</p>
      <img
        onClick={() => onClickRemove(id)}
        className="list__main-block-list-item-refusal img done-img"
        src={refusal}
        alt="refusal"
      />
    </>
  );
};

export default DoneDeeds;
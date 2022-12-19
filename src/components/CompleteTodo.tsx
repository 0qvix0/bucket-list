import React from 'react';

import refusal from '../assets/img/refusal.svg';

type TodoProps = {
  id: string,
  title: string,
  onClickRemove: (id: string) => {},
}

const CompleteTodo: React.FC<TodoProps> = ({ onClickRemove, title, id }) => {
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

export default CompleteTodo;
import React from 'react';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type TodoProps = {
  id: string,
  title: string,
  onClickRemove: (id: string) => {},
  onClickDone: (id: string, title: string) => {},
  onClickEdit: () => void,
}

const Todo: React.FC<TodoProps> = ({ onClickEdit, onClickDone, onClickRemove, title, id}) => {
  return (
    <>
      <p className="list__main-block-list-item-text">{title}</p>
      <img className="list__main-block-list-item-consent img" onClick={() => onClickDone(id, title)} src={consent} alt="consent" />
      <img className="list__main-block-list-item-refusal img" onClick={() => onClickRemove(id)} src={refusal} alt="refusal" />
      <img className="list__main-block-list-item-redact img" onClick={onClickEdit} src={redact} alt="redact" />
    </>
  );
};

export default Todo;

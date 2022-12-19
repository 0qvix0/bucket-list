import React from 'react';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type TodoProps = {
  id: string,
  title: string,
  // onClickRemove: (id: string) => {},
  // onClickDone: (id: string, title: string) => {},
  onClickEdit: () => void,
}

const InputTodo: React.FC<TodoProps> = ({ onClickEdit, title, id}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={inputRef} className="list__main-block-list-item-input" placeholder={title} />
      <img className="list__main-block-list-item-consent img"  src={consent} alt="consent" />
      <img className="list__main-block-list-item-refusal img"  src={refusal} alt="refusal" />
      <img className="list__main-block-list-item-redact img" onClick={onClickEdit} src={redact} alt="redact" />
    </>
  );
};

export default InputTodo;
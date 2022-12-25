import React from 'react';
import axios from 'axios';

import consent from '../assets/img/consent.svg';
import refusal from '../assets/img/refusal.svg';
import redact from '../assets/img/redact.svg';

type TodoProps = {
  id: string,
  title: string,
  onClickRemove: (id: string) => {},
  onClickDone: (id: string, title: string) => {},
}

const Todo: React.FC<TodoProps> = ({ onClickDone, onClickRemove, title, id}) => {
  const [isEdit, setIsEdit] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickEdit = async () => {
    if (isEdit === false) {
      setIsEdit(true)
    } else {
      try {
        await axios.put(`https://6395e89b90ac47c680775c7d.mockapi.io/todo/${id}`, { title: inputRef.current.value})
      } catch (error) {
        alert(error)
      }
      setIsEdit(false)
    }
  }

  return (
    <li className="list__main-block-list-item">
      {isEdit === false ? (
        <p className="list__main-block-list-item-text">{title}</p>
      ):(
        <input ref={inputRef} className="list__main-block-list-item-input" placeholder={title} />
      )}
      <img className="list__main-block-list-item-consent img" onClick={() => onClickDone(id, title)} src={consent} alt="consent" />
      <img className="list__main-block-list-item-refusal img" onClick={() => onClickRemove(id)} src={refusal} alt="refusal" />
      <img className="list__main-block-list-item-redact img" onClick={onClickEdit} src={redact} alt="redact" />
    </li>
  )
};

export default Todo;

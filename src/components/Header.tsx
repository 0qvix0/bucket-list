import React from 'react';
import axios from 'axios';
import consent from '../assets/img/consent.svg';

const Header = () => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const updateTodo = async () => {
    try {
      if (value === '') {
        alert('Заполните поле ввода!!!')
      } else {
        const { data } = await axios.post(`https://6395e89b90ac47c680775c7d.mockapi.io/deeds`, {
          title: value,
        });
        inputRef.current.value = '';
        console.log(data);
      }
    } catch (error) {
      alert('ошибка при загрузке дела');
    }
  };

  return (
    <div className="header">
      <div className="header__main">
        <input
          ref={inputRef}
          onChange={onChangeInput}
          className="header__main-input"
          placeholder="Хотите добавить что-то в список дел?"
          type="text"
        />
        <img onClick={updateTodo} className="header__main-img" src={consent} alt="consent" />
      </div>
    </div>
  );
};
export default Header;

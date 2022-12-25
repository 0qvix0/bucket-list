import React from 'react';
import axios from 'axios';

import { TodoItem } from '../redux/types'

import Todo from './Todo';

const TodoWrap = () => {
  const [job, setJob] = React.useState([]);

  React.useEffect(() => {
    async function fetchTodo() {
      try {
        const { data } = await axios.get('https://6395e89b90ac47c680775c7d.mockapi.io/todo');

        setJob(data);
      } catch (error) {
        alert('Ошибка при получении данных с сервера');
      }
    }

    fetchTodo();
  }, []);

  if (!job) {
    return <>загрузка...</>;
  }

  const onClickRemove = async (deletedId: string) => {
    try {
      await axios.delete(`https://6395e89b90ac47c680775c7d.mockapi.io/todo/${deletedId}`)
      setJob(prev => prev.filter(item => item.id !== deletedId))
    } catch (error) {
      alert('ошибка при удалении дела')
    }
  }
  
  const onClickDone = async (doneId: string, doneTitle: string) => {
    try {
      await axios.delete(`https://6395e89b90ac47c680775c7d.mockapi.io/todo/${doneId}`)
      await axios.post(`https://6395e89b90ac47c680775c7d.mockapi.io/completed-todo`, {
          title: doneTitle,
        });
      setJob(prev => prev.filter(item => item.id !== doneId))
    } catch (error) {
      alert('ошибка при выполнении дела!')
    }
  }

  return (
    <div className="list__main-block">
      <div className="list__main-block-title">Список дел:</div>
      <ul className="list__main-block-list">
        {job.map((obj: TodoItem) => (
          <Todo key={obj.id} onClickDone={onClickDone} onClickRemove={onClickRemove} title={obj.title} id={obj.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoWrap;
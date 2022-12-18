import axios from 'axios';
import React from 'react';

import CompleteTodo from './CompleteTodo';

const CompleteTodoWrap = () => {
  const [job, setJob] = React.useState([]);

  React.useEffect(() => {
    async function fetchDeeds() {
      try {
        const { data } = await axios.get('https://6395e89b90ac47c680775c7d.mockapi.io/completed-deeds');

        setJob(data);
      } catch (error) {
        alert('Ошибка при получении данных с сервера');
      }
    }

    fetchDeeds();
  }, []);

  if (!job) {
    return <>загрузка...</>;
  }

  const onClickRemove = async (id: string) => {
    try {
      await axios.delete(`https://6395e89b90ac47c680775c7d.mockapi.io/completed-deeds/${id}`)
      setJob(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('ошибка при удалении дела')
    }
  }

  return (
    <div className="list__main-block">
      <div className="list__main-block-title">Выполненные дела:</div>
      <ul className="list__main-block-list">
      {job.map((obj: { id: string, title: string }) => (
          <li className="list__main-block-list-item done" key={obj.id}>
            <CompleteTodo onClickRemove={onClickRemove} title={obj.title} id={obj.id} />
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default CompleteTodoWrap;

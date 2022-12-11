import React from 'react';
import axios from 'axios';

import Todo from './Todo';

const TodoWrap = () => {
  const [job, setJob] = React.useState([]);

  React.useEffect(() => {
    async function fetchDeeds() {
      try {
        const { data } = await axios.get('https://6395e89b90ac47c680775c7d.mockapi.io/deeds');

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

  return (
    <div className="list__main-block">
      <div className="list__main-block-title">Список дел:</div>
      <ul className="list__main-block-ul">
        {job.map((obj: any) => (
          <li className="list__main-block-ul-li" key={obj.id}>
            <Todo title={obj.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoWrap;
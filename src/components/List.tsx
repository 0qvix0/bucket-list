import React from 'react';
import CompleteTodoWrap from './CompleteTodoWrap';

import TodoWrap from './TodoWrap';

const List = () => {
  return (
    <div className="list">
      <div className="container">
        <div className="list__main">
          <TodoWrap />
          <CompleteTodoWrap />
        </div>
      </div>
    </div>
  );
};

export default List;

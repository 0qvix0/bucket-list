import React from 'react';

import CompleteTodo from './CompleteTodo';

const CompleteTodoWrap = () => {
  return (
    <div className="list__main-block">
      <div className="list__main-block-title">Выполненные дела:</div>
      <ul className="list__main-block-ul">
        <CompleteTodo />
      </ul>
    </div>
  );
};

export default CompleteTodoWrap;

import CompleteTodoWrap from './CompleteTodoWrap';

import TodoWrap from './TodoWrap';

const List = () => {
  return (
    <div className="list">
      <div className="list__main">
        <TodoWrap />
        <CompleteTodoWrap />
      </div>
    </div>
  );
};

export default List;

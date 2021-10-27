import { React } from "react";

export const CompleteTodos = (props) => {
  const { todos, backClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {/* {completeTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                {/* <button onClick={() => onClickBack(index)}>戻す</button> */}
                <button onClick={() => backClick(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

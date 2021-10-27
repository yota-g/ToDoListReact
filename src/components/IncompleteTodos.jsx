import { React } from "react";

export const IncompleteTodos = (props) => {
  const { todos, completeClick, deleteClick } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* {incompleteTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                {/* 差分をReactは変更するので、何個目のループかを判断できるように正確に比較する為に目印をつける。 */}
                {/* keyをつける必要がある。 */}
                <p>{todo}</p>
                {/* <button onClick={() => onClickComplete(index)}>完了</button> */}
                <button onClick={() => completeClick(index)}>完了</button>
                {/* <button onClick={() => onClickDelete(index)}>削除</button> */}
                <button onClick={() => deleteClick(index)}>削除</button>
                {/* indexをonClickDeleteに渡すことで指定したものを削除できる。
            ()をつけて設定すると関数を実行されてしまう実行されないようにするにはアロー関数で囲んであげる必要がある。。 */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

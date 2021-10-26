import { React, useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  //ここを空文字にしていて、inputのvalueに紐付けると空文字が記載されているようになる。
  // inputに変更があったときにuseStateの内容を変えるということにできる。
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //実際の入力した値を取得することができる。
  //onChangeは引数を取る。
  const onClickAdd = () => {
    if (todoText === "") return;
    //空文字の時に入力できないようにする。
    const newTodos = [...incompleteTodos, todoText];
    //今のincompleteTodosを代入 で後ろに今の値を入れる
    setIncompleteTodos(newTodos);
    //配列に追加することができる。
    setTodoText("");
    //追加した後の文字を空文字にすることができる。
    // alert(todoText);
    //未完了のtodoに入れる方法。
  };
  const onClickDelete = (index) => {
    // alert('削除');
    //何行目が押されたのかを認識するようにする。
    // alert(index);
    // 何番目かがわかる。
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    //指定のindexを削除する。
  };
  const onClickComplete = (index) => {
    // alert(index);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        {/* todoTextのinputのvalueにしてあげる。 */}
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  {/* 差分をReactは変更するので、何個目のループかを判断できるように正確に比較する為に目印をつける。 */}
                  {/* keyをつける必要がある。 */}
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                  {/* indexをonClickDeleteに渡すことで指定したものを削除できる。
                  ()をつけて設定すると関数を実行されてしまう実行されないようにするにはアロー関数で囲んであげる必要がある。。 */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

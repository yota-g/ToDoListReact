import { React, useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
        // 5以上のときにtrueが渡るようにしている。そうなるとinputTodoがdisabledになる。
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までだよ〜。消化しろ〜。
        </p>
      )}
      {/* ５個以上の未完了のToDoリストが入ったら表示されるメッセージを表示する。 */}
      {/* その際にinputをdisableにするようにする。 */}
      <IncompleteTodos
        todos={incompleteTodos}
        completeClick={onClickComplete}
        deleteClick={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} backClick={onClickBack} />
    </>
  );
};

import { React } from "react";

//cssのjsxへの記載例
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
//jsでcssを記載するにはキャメルケースで記載する必要がある。値は文字列

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        // onChange={onChangeTodoText}
        onChange={onChange}
      />
      {/* todoTextのinputのvalueにしてあげる。 */}
      {/* <button onClick={onClickAdd}>追加</button> */}
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

//cssもコンポーネントごとに記載すればいいんじゃないのかという意見もある。 //その書き方は次回。 今回は、input-area をタグに直接記載する。
//こうゆうやり方があるというのを覚えておく。

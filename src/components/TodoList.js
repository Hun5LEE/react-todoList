import "../App.css";
import { useState } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [inputShow, setInputShow] = useState(false);
  const [close, setClose] = useState("");
  return (
    <>
      <p style={{ color: "rgb(50,198,148)" }}>{`할일 ${list.length} 남음`}</p>
      <hr />
      <ul>
        {list.map((item, i) => {
          const isChecked = checkList[i];
          return (
            <li key={i}>
              <button
                className={`list-btn ${isChecked ? "check" : ""}`}
                onClick={() => {
                  const newCheckList = [...checkList];
                  newCheckList[i] = !isChecked;
                  setCheckList(newCheckList);
                }}
              >
                <i
                  className={`fa-solid fa-check ${isChecked ? "check" : ""}`}
                ></i>
              </button>
              {item}
              {isChecked ? (
                <button
                  className="delete-btn"
                  onClick={() => {
                    const copyList = [...list];
                    const copyCheckList = [...checkList];
                    copyList.splice(i, 1);
                    copyCheckList.splice(i, 1);
                    setList(copyList);
                    setCheckList(copyCheckList);
                  }}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              ) : null}
            </li>
          );
        })}
      </ul>
      <hr />
      {/* input */}
      <div className="list-input-wrapper">
        {inputShow ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const copy = [...list, text];
              setList(copy);
              setCheckList([...checkList, false]);
              // text의 값을 다시 ""으로 바꿔줌.
              setText("");
            }}
          >
            <input
              className="list-input"
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </form>
        ) : null}
        <div
          onClick={() => {
            if (!inputShow) {
              setInputShow(true);
              setClose("close-btn");
            } else {
              setInputShow(false);
              setClose("");
            }
          }}
        >
          <i className={`fa-solid fa-plus ${close}`}></i>
        </div>
      </div>
      {/* {누르기전이면 +UI를 보여주고, 누르면 인풋창은 보여준다.} */}
    </>
  );
}

export default TodoList;

// text에다 input value를 담은후 -> list에다가 copy 해서 담기.
// 배열을 복사해서 담지않으면 신규state랑 기존state랑 변수명과 화살표가 같으므로 리액트 내에서 똑같다고 생각해서 state변경을 해주지 않음
// -> 그러므로 copy본 만들기(spread 문법으로 deepcopy). (변수1 & 변수2 화살표가 같으면 비교시 변수1 == 변수2 true나옴.)
// check 항목은 true, false 배열로담아서 관리.

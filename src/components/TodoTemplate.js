import "../App.css";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function TodoTemplate({ submitted }) {
  const [visible, setVisible] = useState("");
  const [template, setTemplate] = useState(false);
  const [templateOn, setTemplateOn] = useState("");
  const date = new Date();
  const todayDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  // function
  // 요일출력 함수
  const today = function () {
    let day = "";
    switch (date.getDay()) {
      case 0:
        day = "일요일";
        break;
      case 1:
        day = "월요일";
        break;
      case 2:
        day = "화요일";
        break;
      case 3:
        day = "수요일";
        break;
      case 4:
        day = "목요일";
        break;
      case 5:
        day = "금요일";
        break;
      case 6:
        day = "토요일";
        break;
    }
    return day;
  };
  const upTemplate = function () {
    setTemplateOn("");
    setVisible("visible");
    setTemplate(false);
  };
  // useEffect
  useEffect(() => {
    if (localStorage.getItem("name")) {
      setVisible("visible");
    } else {
      setVisible("");
    }
  }, [submitted]);
  // 아래 화살표 누르면 템플릿 보여주는 코드
  useEffect(() => {
    if (template) {
      setTemplateOn("showTmp");
      setVisible("");
    } else {
      setTemplateOn("");
    }
  }, [template]);
  return (
    <>
      <div
        className={`todoTemplate ${visible}`}
        onClick={() => {
          setTemplate(true);
          setVisible("");
        }}
      >
        <i className="fa-solid fa-arrow-down"></i>
      </div>
      {/* main-template */}
      {/* <div className="template-background"> */}
      <div className={`template-wrapper ${templateOn}`}>
        <div style={{ padding: "1.5rem" }}>
          <button className="template-close-btn" onClick={upTemplate}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <h2 style={{ marginBottom: "0px" }}>{todayDate}</h2>
          <div>{today()}</div>

          <TodoList />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default TodoTemplate;

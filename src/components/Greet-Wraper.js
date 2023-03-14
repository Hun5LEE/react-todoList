import "../App.css";
import { useEffect, useState } from "react";
import TodoTemplate from "./TodoTemplate";

function GreetWraper() {
  // state
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState("");

  // function
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // 만약 배열로 로컬스토리지에 저장시 JSON화 한다음 셋팅하고 꺼낼때 parse해서 사용하기.
    localStorage.setItem("name", name);
  };
  // useEffect
  useEffect(() => {
    if (submitted || localStorage.getItem("name")) {
      setShow("show");
    }
  }, [submitted]);

  return (
    <>
      <div className={`greet-wraper`}>
        <h1 style={{ margin: 0 }}>안녕하세요</h1>
        {submitted || localStorage.getItem("name") ? (
          <p style={{ textAlign: "center" }}>
            <span className={`name ${show}`}>
              {localStorage.getItem("name")}님 !
            </span>
            <br />
            <button
              className="btn nameChange"
              onClick={() => {
                localStorage.removeItem("name");
                setSubmitted(false);
                setName("");
                setShow("");
              }}
            >
              <i
                className="fa-solid fa-rotate-right"
                style={{ fontSize: "32px" }}
              ></i>
            </button>
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className="name-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="이름을 입력하세요"
              maxLength="10"
            />
          </form>
        )}
      </div>
      <TodoTemplate submitted={submitted} />
    </>
  );
}

export default GreetWraper;

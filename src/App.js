import "./App.css";
import { useEffect, useState } from "react";
import GreetWraper from "./components/Greet-Wraper";

function App() {
  // state
  const [show, setShow] = useState("");

  // useEffect
  useEffect(() => {
    //  automatic batch기능으로 인해 setTimeout 써주기.
    const showTimer = setTimeout(() => {
      setShow("show");
    }, 100);
    return () => {
      // 타이머 장착하기 전에 기존 타이머가 있으면 제거해줌.(clean up function) (버그방지)
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <div>
      <div className={`greet-page ${show}`}>
        {/* 위에코드 컴포넌트로 넣기 */}
        <GreetWraper />
        {/*  */}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once....");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes ....");
  }, [keyword]); //keyword가 변경될때만 console.log 수행하도록
  useEffect(() => {
    console.log("I run when 'counter' changes ....");
  }, [counter]); //counter 변경될때만 console.log 수행하도록
  useEffect(() => {
    console.log("I run when counter or keyword change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

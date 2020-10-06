import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  console.log("App()");
  const [user, setUser] = useState({
    id: "",
    username: "",
  });
  const [name, setName] = useState("App.js");

  const changeUsername = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const changeName = useCallback(() => {
    setName("Change App.js");
  }, []);

  const list = useMemo(() => {
    console.log("list함수 실행");
    return ["딸기", "수박", "사과"];
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{list}</h3>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={changeUsername}
      />

      <hr />
      <A username={user.username} />
      <B changeName={changeName} />
    </div>
  );
}

export default App;

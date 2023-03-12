import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import style from "./App.module.css";

import EditorPage from "./EditorPage";

function App() {

  return (
    <div className={style.App}>
      {/* <Navbar></Navbar> */}
      <EditorPage></EditorPage>
      <div>{/*   <Counter /> */}</div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import style from "./App.module.css";

import PageLayout from "./layouts/PageLayout";
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage";

function App() {
  return (
    <div className={style.App}>
      {/* <Navbar></Navbar> */}
      <PageLayout>
        <EmployeesPage></EmployeesPage>
      </PageLayout>
      <div>{/*   <Counter /> */}</div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import style from "./App.module.css";

import PageLayout from "./layouts/PageLayout";
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage";

import { EmployeeDetailsPage } from "./pages/EmployeeDetailsPage/EmployeeDetailsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout title="Employees">
        <EmployeesPage />
      </PageLayout>
    ),
  },
  {
    path: "/employees",
    element: (
      <PageLayout title="Employees">
        <EmployeesPage />
      </PageLayout>
    ),
  },
  {
    path: "/employees/:employeeId",
    element: (
      <PageLayout title="Employee">
        <EmployeeDetailsPage />
      </PageLayout>
    ),
  },
]);

function App() {
  return (
    <div className={style.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";

import PageLayout from "./layouts/PageLayout";
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage";

import { EmployeeDetailsPage } from "./pages/EmployeeDetailsPage/EmployeeDetailsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout
        title="Employees"
        breadcrumb={[{ label: "Employees", url: "/" }]}
      >
        <EmployeesPage />
      </PageLayout>
    ),
  },
  {
    path: "/employees",
    element: (
      <PageLayout
        title="Employees"
        breadcrumb={[{ label: "Employees", url: "/employees" }]}
      >
        <EmployeesPage />
      </PageLayout>
    ),
  },
  {
    path: "/employees/:employeeId",
    element: (
      <PageLayout
        title="Employee"
        breadcrumb={[{ label: "Employees" }, { label: "Employee Details" }]}
      >
        <EmployeeDetailsPage />
      </PageLayout>
    ),
  },
  {
    path: "*",
    element: (
      <PageLayout title="NotFoundPage" breadcrumb={[{ label: "NotFoundPage" }]}>
        <NotFoundPage />
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

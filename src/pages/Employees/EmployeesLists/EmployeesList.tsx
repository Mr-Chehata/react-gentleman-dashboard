import React, { useState, useEffect } from "react";
import { EmployeesService } from "../../../services/EmployeesService";
import {
  DataView,
  DataViewLayoutOptions,
  DataViewLayoutType,
  DataViewSortOrderType,
} from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import Employee from "../../../models/Employee";
import styles from "./EmployeesList.module.css";



export function EmployeesList() {
  const [products, setEmployees] = useState<Employee[]>([]);
  const [layout, setLayout] = useState<DataViewLayoutType>("grid");
  const [sortKey, setSortKey] = useState(1);
  const [sortOrder, setSortOrder] = useState<DataViewSortOrderType>(1);
  const [sortField, setSortField] = useState("");
  const employeesService = new EmployeesService();
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];
  useEffect(() => {
    employeesService
      .getAllEmployees()
      .then((data) => setEmployees(data.slice(0, 12)));
  }, []);
  const onSortChange = (event: any) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const getSeverity = (employee: Employee) => {
    switch (employee.name) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return "info";
    }
  };

  const listItem = (employee: Employee) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg`}
            alt={employee.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{employee.name}</div>
              <Rating value={employee.score} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{employee.name}</span>
                </span>
                <Tag
                  value={employee.score}
                  severity={getSeverity(employee)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${employee.name}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={employee.name === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (employee: Employee) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{employee.name}</span>
            </div>
            <Tag value={employee.name} severity={getSeverity(employee)}></Tag>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img
              className="w-9 shadow-2 border-round"
              src={`https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg`}
              alt={employee.name}
            />
            <div className="text-2xl font-bold">{employee.name}</div>
            <Rating value={employee.score} readOnly cancel={false}></Rating>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">${employee.name}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              disabled={employee.name === "OUTOFSTOCK"}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (employee: Employee, layout: string) => {
    if (!employee) {
      return;
    }

    if (layout === "list") return listItem(employee);
    else if (layout === "grid") return gridItem(employee);
  };

  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
        <div className="col-6" style={{ textAlign: "left" }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            optionLabel="label"
            placeholder="Sort By Price"
            onChange={onSortChange}
          />
        </div>
        <div className="col-6" style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={layout}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <DataView
        value={products}
        itemTemplate={itemTemplate}
        layout={layout}
        header={renderHeader()}
        paginator
        rows={6}
        sortOrder={sortOrder}
        sortField={sortField}
      />
    </div>
  );
}

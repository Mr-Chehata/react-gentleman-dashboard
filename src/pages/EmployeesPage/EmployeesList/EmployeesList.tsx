import React, { useState, useEffect } from "react";
import { EmployeesService } from "../../../services/EmployeesService";
import {
  DataView,
  DataViewLayoutOptions,
  DataViewLayoutType,
  DataViewSortOrderType,
} from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import { Employee, EmployeeInterface } from "../../../models/Employee";
import styles from "./EmployeesList.module.css";
import { CardItem } from "../../../components/Employee/CardItem/CardItem";
import { ListItem } from "../../../components/Employee/ListItem/ListItem";

export function EmployeesList({ employees = [] }: { employees: EmployeeInterface[] }) {

  const [layout, setLayout] = useState<DataViewLayoutType>("grid");
  const [sortKey, setSortKey] = useState(1);
  const [sortOrder, setSortOrder] = useState<DataViewSortOrderType>(1);
  const [sortField, setSortField] = useState("");
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

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

  const itemTemplate = (employee: EmployeeInterface, layout: string) => {
    if (!employee) {
      return;
    }

    if (layout === "list") return <ListItem employee={employee}></ListItem>;
    else if (layout === "grid")
      return <CardItem employee={employee}></CardItem>;
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
        value={employees}
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

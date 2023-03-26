import React, { ChangeEvent, useState, useEffect, useMemo } from "react";

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
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export function EmployeesList({
  isLoading = false,
  employees = [],
}: {
  isLoading: boolean;
  employees: EmployeeInterface[];
}) {
  const [sortKey, setSortKey] = useState(1);
  const [sortOrder, setSortOrder] = useState<DataViewSortOrderType>(1);
  const [sortField, setSortField] = useState("score");
  const [searchKeyword, setSearchKeyword] = useState("");
  const sortOptions = [
    { label: "Score(High to Low)", value: "!score" },
    { label: "Score(Low to High)", value: "score" },
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

  const onSearchChange = (event: ChangeEvent<{ value: string }>) => {
    setSearchKeyword(event?.currentTarget?.value);
  };

  const itemTemplate = (employee: EmployeeInterface) => {
    if (!employee) {
      return;
    }

    return <CardItem employee={employee} isLoading={isLoading} />;
  };

  const SearchedEmployees: EmployeeInterface[] = useMemo(
    () =>
      employees.filter(function (employee) {
        return employee.name
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());
      }),
    [searchKeyword, employees]
  );

  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
        <div className="col-md-6 col-sm-12" style={{ textAlign: "left" }}>
          <div className="flex w-full  align-items-center ">
            <Dropdown
              options={sortOptions}
              value={sortKey}
              optionLabel="label"
              placeholder="Sort By Score"
              onChange={onSortChange}
              className="mr-2"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12" style={{ textAlign: "right" }}>
          <div className="">
            {/*    <Button icon="pi pi-search" className="ml-2" /> */}
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={searchKeyword}
                placeholder="Search"
                className={
                  "p-inputtext-sm block  border-round " + styles.SearchInput
                }
                onChange={onSearchChange}
              />
            </span>
          </div>
        </div>
      </div>
    );
  };

  if (!isLoading) {
    return (
      <div className="card">
        <DataView
          value={SearchedEmployees}
          itemTemplate={itemTemplate}
          layout={"grid"}
          header={renderHeader()}
          paginator
          rows={6}
          sortOrder={sortOrder}
          sortField={sortField}
        />
      </div>
    );
  } else {
    /* Laoding status UI */
    return (
      <div className="card mt-3">
        <div className="p-grid grid p-nogutter grid-nogutter">
          {(() => {
            let td = [];
            for (let i = 1; i <= 6; i++) {
              td.push(<CardItem isLoading={true} />);
            }
            return td;
          })()}
        </div>
      </div>
    );
  }
}

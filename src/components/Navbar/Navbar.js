import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

export default function Navbar() {
  const menu = useRef(null);
  const items = [
    {
      label: "Navigate",
      items: [
        {
          label: "Employees",
          icon: "pi pi-users",
          url: `/employees`,
        }
      ],
    },
  ];

  return (
      <div className="card">
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <Button
          label=""
          className="p-button-rounded"
          icon="pi pi-bars"
          onClick={(event) => menu.current.toggle(event)}
          aria-controls="popup_menu"
          aria-haspopup
        />
      </div>
  );
}

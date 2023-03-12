import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Navbar() {
  const menu = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
        {
          label: "Router",
          icon: "pi pi-upload",
          command: (e) => {
            window.location.hash = "/fileupload";
          },
        },
      ],
    },
  ];

  return (
    <div>
      <Toast ref={toast}></Toast>
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
    </div>
  );
}

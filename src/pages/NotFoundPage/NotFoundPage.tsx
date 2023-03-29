import React, { useState, useEffect } from "react";
import { Message } from "primereact/message";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div className="card mt-4 p-4">
      <Message severity="error" text="Page not found."></Message>
    </div>
  );
}

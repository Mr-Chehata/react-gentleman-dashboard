import React from "react";
import LeftLayout from "./Layouts/LeftLayout/LeftLayout";
import TopBar from "./Layouts/MainLayout/TopBar/TopBar";
import MainLayout from "./Layouts/MainLayout/MainLayout";

import style from "./EditorPage.module.css";

class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={style.MainLayout}>
          <LeftLayout></LeftLayout>
          <MainLayout></MainLayout>
        </div>
      </>
    );
  }
}

export default EditorPage;

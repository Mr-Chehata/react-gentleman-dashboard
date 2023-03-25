import React from "react";
import LeftLayout from "./LeftLayout/LeftLayout";
import TopBar from "./MainLayout/TopBar/TopBar";
import MainLayout from "./MainLayout/MainLayout";

import style from "./PageLayout.module.css";

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <>
        <div className={style.PageLayout}>
          <LeftLayout></LeftLayout>
          <MainLayout>{this.props.children}</MainLayout>
        </div>
      </>
    );
  }
}

export default PageLayout;

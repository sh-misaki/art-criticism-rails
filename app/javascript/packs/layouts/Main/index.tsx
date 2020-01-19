import React, { FunctionComponent } from "react";

import SidePane from "../../organisms/SidePane";
import Header from "../../organisms/Header";

import styles from './styles.css';

const MainLayout: FunctionComponent = ({
  children,
}) => {
  return (
    <div className={styles.LayoutMain}>
      <Header className={styles.LayoutHeader}/>
      <div className={styles.LayoutContainer}>
        <SidePane />
        <div className={styles.LayoutChildren}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout;
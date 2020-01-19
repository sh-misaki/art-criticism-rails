import React, { FunctionComponent } from "react";

import SidePane from "../../organisms/SidePane";

import styles from './styles.css';

const MainLayout: FunctionComponent = ({
  children,
}) => {
  return (
    <div className={styles.LayoutMain}>
      <SidePane />
      <div className={styles.LayoutContainer}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout;
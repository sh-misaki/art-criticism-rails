import React, { FunctionComponent } from "react";
import injectSheet from 'react-jss';

import SidePane from "../../organisms/SidePane";

import styles, { IStyleProps } from "./styles";

const MainLayout: FunctionComponent<IStyleProps> = ({
  classes,
  children,
}) => {
  return (
    <div className={classes.LayoutMain}>
      <SidePane className={classes.LaytoutSidePane} />
      <div className={classes.LayoutContainer}>
        {children}
      </div>
    </div>
  )
}

export default injectSheet(styles)(MainLayout);
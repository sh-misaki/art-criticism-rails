import React, { FunctionComponent } from 'react'
import classNames from "classnames";
import {
  Typography
} from "@material-ui/core";

import styles from "./styles.css";

interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps;

const SidePane: FunctionComponent<IProps> = ({
  className,
}) => (
  <div className={classNames(styles.SidePane, className)}>
    <div className={classNames(styles.SidePaneItems)}>
      <Typography>
        Art
      </Typography>
    </div>
  </div>
)

export default SidePane;

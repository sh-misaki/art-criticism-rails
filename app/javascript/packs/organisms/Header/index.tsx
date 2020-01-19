import React, { FunctionComponent } from 'react'
import classNames from "classnames";

import styles from "./styles.css";

interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps;

const SidePane: FunctionComponent<IProps> = ({
  className,
}) => (
  <div className={classNames(styles.Header, className)}>
    Header
  </div>
)

export default SidePane;

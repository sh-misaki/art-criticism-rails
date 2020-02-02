import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.scss";

interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps;

const Typography: FunctionComponent<IProps> = ({ children, className }) => {
  return <p className={classNames(styles.Typography, className)}>{children}</p>;
};

export default Typography;

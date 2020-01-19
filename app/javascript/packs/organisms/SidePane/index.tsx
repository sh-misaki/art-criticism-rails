import React, { FunctionComponent } from 'react'
import classNames from "classnames";
import {
  Typography
} from "@material-ui/core";

import {
  Person as PersonIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  Timeline as TimelineIcon,
  PieChart as PieChartIcon,
  Build as BuildIcon,
  PowerSettingsNew as PowerSettingsNewIcon
} from '@material-ui/icons';

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
      <PersonIcon />
      <Typography>
        Janie
      </Typography>
    </div>
    <div className={classNames(styles.SidePaneItems)}>
      <HomeIcon />
      <PeopleIcon />
      <TimelineIcon />
      <PieChartIcon />
    </div>
    <div className={classNames(styles.SidePaneItems)}>
      <BuildIcon />
      <PowerSettingsNewIcon />
    </div>
  </div>
)

export default SidePane;

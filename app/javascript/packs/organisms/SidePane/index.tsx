import React, { FunctionComponent } from 'react'
import injectSheet from 'react-jss';
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

import styles, { IStyleProps } from "./styles";

interface IOwnProps {
  className?: string;
}

type IProps = IOwnProps & IStyleProps;

const SidePane: FunctionComponent<IProps> = ({
  classes,
  className,
}) => (
  <div className={classNames(classes.SidePane, className)}>
    <div className={classNames(classes.SidePaneItems)}>
      <PersonIcon />
      <Typography>
        Janie
      </Typography>
    </div>
    <div className={classNames(classes.SidePaneItems)}>
      <HomeIcon />
      <PeopleIcon />
      <TimelineIcon />
      <PieChartIcon />
    </div>
    <div className={classNames(classes.SidePaneItems)}>
      <BuildIcon />
      <PowerSettingsNewIcon />
    </div>
  </div>
)

export default injectSheet(styles)(SidePane);

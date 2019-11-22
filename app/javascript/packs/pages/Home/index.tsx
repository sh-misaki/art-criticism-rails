import React, { FunctionComponent } from 'react'
import injectSheet, { WithStyles } from 'react-jss';
import {
  Typography
} from "@material-ui/core";

import MainLayout from "../../layouts/Main";
import styles, { IStyleProps } from "./styles";

interface IOwnProps {
  name: string;
}

type IProps = IOwnProps & IStyleProps;

const Hello: FunctionComponent<IProps> = ({
  name,
  classes
}) => (
  <MainLayout>
    <Typography classes={{ root: classes.hello }}>
      Hello {name}!
    </Typography>
  </MainLayout>
)

export default injectSheet(styles)(Hello);

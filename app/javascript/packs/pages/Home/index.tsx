import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss';
import {
  Typography
} from "@material-ui/core";
import axios from "axios";

import MainLayout from "../../layouts/Main";
import styles, { IStyleProps } from "./styles";

interface IOwnProps {
  objects: any[];
}

type IProps = IOwnProps & IStyleProps;

class Hello extends React.Component<IProps> {
  public render() {
    const {
      objects,
      classes,
    } = this.props;

    console.log(objects);

    return (
      <MainLayout>
        <div className={classes.objectWrapper}>
          {objects.map(object => (
            <div className={classes.object}>
              <img
                className={classes.objectImage}
                src={`/images/${object.source_id}-small.jpg`}
              />
              <div className={classes.objectOverview}>
                <Typography classes={{root: classes.objectTitle}}>
                  { object.name }
                </Typography>
                <Typography classes={{root: classes.objectArtist}}>
                  { object.artist_name }
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    )
  }
}

export default injectSheet(styles)(Hello);

import * as React from 'react'
import {
  Typography
} from "@material-ui/core";
import axios from "axios";

import MainLayout from "../../layouts/Main";
import styles from "./styles.css";

interface IOwnProps {
  objects: any[];
}

type IProps = IOwnProps;

class Hello extends React.Component<IProps> {
  public render() {
    const {
      objects,
    } = this.props;

    return (
      <MainLayout>
        <div className={styles.objectWrapper}>
          {objects.map(object => (
            <div className={styles.object}>
              <img
                className={styles.objectImage}
                src={`/images/${object.source_id}-small.jpg`}
              />
              <div className={styles.objectOverview}>
                <Typography classes={{root: styles.objectTitle}}>
                  { object.name }
                </Typography>
                <Typography classes={{root: styles.objectArtist}}>
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

export default Hello;

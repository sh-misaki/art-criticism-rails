import * as React from 'react';
import classNames from "classnames";

import Typography from "../../atoms/Typography";
import MainLayout from "../../layouts/Main";
import styles from "./styles.scss";

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
            <a
              className={styles.object}
              href={`/works/${object.id}`}
            >
              <div className={styles.objectImageWrapper}>
                <img
                  className={styles.objectImage}
                  src={`/images/${object.source_id}-small.jpg`}
                />
              </div>
              <div className={styles.objectOverview}>
                <Typography className={styles.objectOverviewTitle}>
                  { object.name }
                </Typography>
                <Typography className={styles.objectOverviewItem}>
                  { object.artist_name } / { object.year }
                </Typography>
              </div>
            </a>
          ))}
        </div>
      </MainLayout>
    )
  }
}

export default Hello;

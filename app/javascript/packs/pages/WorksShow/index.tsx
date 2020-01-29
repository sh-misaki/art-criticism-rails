import * as React from "react";

import MainLayout from "../../layouts/Main";
import Typography from "../../atoms/Typography";

import styles from "./styles.scss";

interface IOwnProps {
  work: any;
}

type IProps = IOwnProps;

class Hello extends React.Component<IProps> {
  public render() {
    const { work } = this.props;

    return (
      <MainLayout>
        <div className={styles.LayoutWorksShow}>
          <div className={styles.Image}>
            <img
              className={styles.ImageMain}
              src={`/images/${work.source_id}.jpg`}
            />
          </div>
          <div className={styles.Overview}>
            <Typography className={styles.OverviewName}>{work.name}</Typography>
            <ul className={styles.OverviewList}>
              <li>作者: {work.artist_name}</li>
              <li>カテゴリー: {work.classification}</li>
              <li>分類: {work.department}</li>
              <li>作成年: {work.year}</li>
              <li>ソース: {work.source}</li>
            </ul>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Hello;

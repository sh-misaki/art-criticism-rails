import * as React from 'react';
import classNames from "classnames";

import Typography from "../../atoms/Typography";
import MainLayout from "../../layouts/Main";
import styles from "./styles.css";

interface IOwnProps {
  work: any;
}

type IProps = IOwnProps;

class Hello extends React.Component<IProps> {
  public render() {
    const { work } = this.props;

    return (
      <MainLayout>
        works show
      </MainLayout>
    )
  }
}

export default Hello;

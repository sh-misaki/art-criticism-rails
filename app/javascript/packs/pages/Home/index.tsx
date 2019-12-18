import * as React from 'react'
import injectSheet, { WithStyles } from 'react-jss';
import {
  Typography
} from "@material-ui/core";
import axios from "axios";

import MainLayout from "../../layouts/Main";
import styles, { IStyleProps } from "./styles";

interface IOwnProps {
  name: string;
}

type IProps = IOwnProps & IStyleProps;

interface IState {
  objects: any[];
}

class Hello extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    
    this.state = {
      objects: [],
    };
  }

  public async componentDidMount() {
    const { data: { objectIDs } } = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search', {
      params: {
        departmentId: 21,
        q: "a",
      }
    })

    const datas = await Promise.all(objectIDs.slice(0, 30).map(async objectID => {
      const { data } = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
      return data;
    }))

    this.setState({
      objects: datas,
    });
  }

  public render() {
    const {
      name,
      classes,
    } = this.props;
    const { objects } = this.state;

    console.log(objects)

    return (
      <MainLayout>
        <div className={classes.objectWrapper}>
          {objects.map(object => (
            <div className={classes.object}>
              <img
                className={classes.objectImage}
                src={object.primaryImageSmall}
              />
              <div className={classes.objectOverview}>
                <Typography classes={{root: classes.objectTitle}}>
                  { object.title }
                </Typography>
                <Typography classes={{root: classes.objectArtist}}>
                  { object.artistDisplayName } ({ object.artistBeginDate } ~ { object.artistEndDate })
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

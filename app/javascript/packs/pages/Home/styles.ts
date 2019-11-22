import { WithStyles } from 'react-jss';

const styles = {
  hello: {
    color: 'green',
  }
}

export type IStyleProps = WithStyles<Record<keyof typeof styles, string>>;

export default styles;
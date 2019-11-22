import { WithStyles } from 'react-jss';

const styles = {
  LayoutMain: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
  LaytoutSidePane: {
    
  },
  LayoutContainer: {
    backgroundColor: "#f6f6fc",
    flexGrow: 1,
    alignItems: "center",
    padding: "16px 40px",
  }
}

export type IStyleProps = WithStyles<Record<keyof typeof styles, string>>;

export default styles;

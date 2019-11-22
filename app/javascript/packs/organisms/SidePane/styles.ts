import { WithStyles } from 'react-jss';

const styles = {
  SidePane: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "16px 24px",
  },
  SidePaneItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    '& > svg': {
      fontSize: 20,
      marginTop: 48,
      color: "#e2e0f8",

      '&:hover': {
        color: "#746af4"
      }
    }
  },
}

export type IStyleProps = WithStyles<Record<keyof typeof styles, string>>;

export default styles;
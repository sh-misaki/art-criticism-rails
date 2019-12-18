import { WithStyles } from 'react-jss';

const styles = {
  objectWrapper: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-between',
    height: '5000px',
    '&:before': {
      content: '""',
      flexBasis: '100%',
      width: '0',
      order: '2',
    },
    '&:after': {
      content: '""',
      flexBasis: '100%',
      width: '0',
      order: '2',
    }
  },
  object: {
    width: '31%',
    padding: '16px',
    boxShadow: '8px 8px 16px rgba(0,0,0,0.25)',
    borderRadius: '4px',
    marginBottom: '48px',
    '&:nth-child(3n+1)': {
      order: 1,
    },
    '&:nth-child(3n+2)': {
      order: 2,
    },
    '&:nth-child(3n)': {
      order: 3,
    },
  },
  objectImage: {
    width: '100%',
  },
  objectOverview: {
    marginTop: '16px',
  },
  objectTitle: {
    fontSize: '15px',
  },
  objectArtist: {
    fontSize: '13px',
    textAlign: 'right',
    marginTop: '8px',
  },
}

export type IStyleProps = WithStyles<Record<keyof typeof styles, string>>;

export default styles;
import { createMuiTheme } from '@material-ui/core';
import background from '../assets/background.jpg';

let darkGrey = '#666666';
let darkerGrey = '#424242';
let iconGrey = '#232323'
let white = '#ffffff';
let error = '#DB3237';



export default createMuiTheme({
  palette: {
    common: {
      iconGrey: iconGrey,
    },
    primary: {
      main: darkGrey,
    },
    secondary: {
      main: darkerGrey,
    },
    error: {
      main: error,
    },
  },
  typography: {
    h1: {
      fontSize: '2.4rem',
      color: darkGrey,
    },
    h3: {
      fontSize: '1.8rem',
      color: white,
    },
    h4: {
      fontSize: '.8rem',
      color: darkGrey,
    },
    body1: {
      color: darkGrey,
    },
    body2: {
      color: darkGrey,
      fontSize: '.7rem',
    },
    subtitle1: {
      color: white,
      fontSize: '.8rem',
    },
    subtitle2: {
      color: white,
      fontSize: '.7rem',
    },
    caption: {
      color: white,
      fontSize: '.5rem',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'norepeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          width: '100%',
          height: '100%',
        },
      },
    },
    MuiInput: {
      root: {
        color: darkerGrey,
        fontWeight: 300,
      },
      underline: {
        '&::before, &::after': {
          borderBottom: `1px solid ${darkerGrey}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `1px solid ${darkerGrey}`,
        },
        '&:hover': {
          borderBottom: `none`,
        },
      },
    },
    MuiInputBase: {
      input: {
        color: darkGrey,
      },
    },
    MuiInputLabel: {
      root: {
        color: darkerGrey,
      },
    },
    MuiMobileStepper: {
      dot: {
        backgroundColor: white,
      },
    },
    MuiButton: {
      root: {
        color: white,
        '&$disabled': {
          color: darkGrey,
        },
      },
    },
    MuiDialog: {
      paperWidthSm: {
        width: 1200,
        maxWidth: 'unset',
      },
    },
  },
});

  
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import BackToTop from './BackToTop';

const fonts = new Array(47)
  .fill()
  .map((_, idx) => ({ name: `font ${idx + 1}` }));

const useStyles = makeStyles((theme) => ({
  fab: {
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppHeader />
        <AppMain fonts={fonts} />
        <AppFooter />
        <BackToTop>
          <Tooltip title="Back to top">
            <Fab
              aria-label="back to top"
              className={classes.fab}
              color="inherit"
              size="medium"
            >
              <ArrowUpward />
            </Fab>
          </Tooltip>
        </BackToTop>
      </Box>
    </>
  );
}

export default App;

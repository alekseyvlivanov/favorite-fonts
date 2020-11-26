import { useState } from 'react';
import { Box, CssBaseline, Fab, Tooltip } from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { ArrowUpward } from '@material-ui/icons';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import BackToTop from './BackToTop';

const fonts = new Array(47)
  .fill()
  .map((_, idx) => ({ name: `Font ${idx + 1}` }));

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  fab: {
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppHeader />
        <AppMain fonts={fonts} theme={theme} setTheme={setTheme} />
        <AppFooter />
        <BackToTop>
          <Tooltip title="Back to top">
            <Fab
              aria-label="back to top"
              className={classes.fab}
              color="default"
              size="medium"
            >
              <ArrowUpward />
            </Fab>
          </Tooltip>
        </BackToTop>
      </Box>
    </ThemeProvider>
  );
}

export default App;

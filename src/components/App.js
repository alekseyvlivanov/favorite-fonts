import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Tooltip,
} from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { ArrowUpward } from '@material-ui/icons';
import axios from 'axios';

import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import BackToTop from './BackToTop';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: 'Jetbrains Mono, sans-serif;',
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: 'Jetbrains Mono, sans-serif;',
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

  const [error, setError] = useState(null);
  const [fonts, setFonts] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleCloseDialog = () => {
    setError(null);
  };

  useEffect(() => {
    async function fetchData() {
      const fontsDataUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.REACT_APP_WEBFONTS_KEY}`;
      const apiUrl = 'https://fonts.googleapis.com/css?family=';

      try {
        const response = await axios.get(fontsDataUrl);
        const result = response.data.items;

        const fontsData = result
          .filter(
            (f) =>
              f.variants.includes('regular') && f.subsets.includes('latin'),
          )
          .map(({ category, family }) => ({
            category,
            family,
            lcFamily: family.toLowerCase(),
            url: `${apiUrl}${family.replace(/ /g, '+')}`,
          }));

        setFonts(fontsData);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppHeader />
        {!!error && (
          <Dialog open={!!error} onClose={handleCloseDialog}>
            <DialogTitle>HTTP Error</DialogTitle>
            <DialogContent>
              <DialogContentText>{error}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        )}
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

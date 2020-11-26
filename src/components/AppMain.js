import { useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Cards from './Cards';
import Control from './Control';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));

function AppMain({ fonts, theme, setTheme }) {
  const classes = useStyles();

  const [fontName, setFontName] = useState('');
  const [fontText, setFontText] = useState('');
  const [fontSize, setFontSize] = useState(32);
  const [listMode, setListMode] = useState(false);
  const [favoritesMode, setFavoritestMode] = useState(false);

  return (
    <Paper className={classes.main} component="main" square>
      <Control
        options={{
          fontName,
          setFontName,
          fontText,
          setFontText,
          fontSize,
          setFontSize,
          listMode,
          setListMode,
          favoritesMode,
          setFavoritestMode,
          theme,
          setTheme,
        }}
      />
      <Cards fonts={fonts} options={{ fontText, fontSize, listMode }} />
    </Paper>
  );
}

export default AppMain;

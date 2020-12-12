import { useEffect, useState } from 'react';
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

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || [],
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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
      <Cards
        fonts={fonts
          .filter(
            (f) =>
              !favoritesMode || (favoritesMode && favorites.includes(f.family)),
          )
          .filter((f) => f.lcFamily.includes(fontName.trim().toLowerCase()))}
        options={{
          fontText,
          fontSize,
          listMode,
          favorites,
          setFavorites,
          totalFonts: fonts.length,
        }}
      />
    </Paper>
  );
}

export default AppMain;

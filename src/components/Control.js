import {
  Container,
  IconButton,
  List,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlareIcon from '@material-ui/icons/Flare';
import GridOnIcon from '@material-ui/icons/GridOn';
import ListIcon from '@material-ui/icons/List';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import UndoIcon from '@material-ui/icons/Undo';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  form: {
    zIndex: 10,
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(2),
  },
  textField: {
    paddingRight: theme.spacing(1),
  },
}));

function Control({
  options: {
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
  },
}) {
  const classes = useStyles();

  const darkTheme = theme === 'dark';

  return (
    <Paper className={classes.form} component="form" square>
      <Container className={classes.container}>
        <TextField
          className={classes.textField}
          label="Search fonts"
          value={fontName}
          onChange={(e) => setFontName(e.target.value)}
        />
        <TextField
          className={classes.textField}
          label="Type something"
          value={fontText}
          onChange={(e) => setFontText(e.target.value)}
        />
        <List>
          <Select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <MenuItem value={20}>20px</MenuItem>
            <MenuItem value={24}>24px</MenuItem>
            <MenuItem value={32}>32px</MenuItem>
            <MenuItem value={40}>40px</MenuItem>
          </Select>
          <Tooltip title="Toggle grid/list mode">
            <IconButton
              aria-label="grid/list"
              onClick={() => setListMode(!listMode)}
            >
              {listMode ? <ListIcon /> : <GridOnIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Show all/favorites fonts">
            <IconButton
              aria-label="all/favorites"
              onClick={() => setFavoritestMode(!favoritesMode)}
            >
              {favoritesMode ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle light/dark theme">
            <IconButton
              aria-label="light/dark"
              onClick={() => setTheme(darkTheme ? 'light' : 'dark')}
            >
              {darkTheme ? <NightsStayIcon /> : <FlareIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset settings">
            <IconButton
              aria-label="reset settings"
              onClick={() => {
                setFontName('');
                setFontText('');
                setFontSize(32);
                setListMode(false);
                setFavoritestMode(false);
                setTheme('light');
              }}
            >
              <UndoIcon />
            </IconButton>
          </Tooltip>
        </List>
      </Container>
    </Paper>
  );
}

export default Control;

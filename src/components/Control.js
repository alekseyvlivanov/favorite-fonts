import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import FlareIcon from '@material-ui/icons/Flare';
// import GridOnIcon from '@material-ui/icons/GridOn';
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
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(2),
  },
}));

function Control() {
  const classes = useStyles();

  return (
    <Paper className={classes.form} component="form" square>
      <Container className={classes.container}>
        <TextField label="Search fonts" />
        <TextField label="Type something" />
        <List>
          <Select defaultValue={32} labelId="font-size-label">
            <MenuItem value={20}>20px</MenuItem>
            <MenuItem value={24}>24px</MenuItem>
            <MenuItem value={32}>32px</MenuItem>
            <MenuItem value={40}>40px</MenuItem>
          </Select>
          <Tooltip title="Toggle light/dark theme">
            <IconButton aria-label="light/dark">
              {/* <FlareIcon /> */}
              <NightsStayIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Toggle grid/list mode">
            <IconButton aria-label="grid/list">
              <ListIcon />
              {/* <GridOnIcon /> */}
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset settings">
            <IconButton aria-label="reset settings">
              <UndoIcon />
            </IconButton>
          </Tooltip>
        </List>
      </Container>
    </Paper>
  );
}

export default Control;

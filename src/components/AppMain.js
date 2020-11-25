import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Cards from './Cards';
import Control from './Control';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));

function AppMain({ fonts }) {
  const classes = useStyles();

  return (
    <Paper className={classes.main} component="main" square>
      <Control />
      <Cards fonts={fonts} />
    </Paper>
  );
}

export default AppMain;

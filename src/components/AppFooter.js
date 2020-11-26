import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <Paper className={classes.footer} component="footer" square>
      <Button
        aria-label="github"
        className={classes.button}
        href="https://github.com/alekseyvlivanov/favorite-fonts"
        rel="noopener noreferrer"
        size="small"
        startIcon={<GitHubIcon />}
        target="_blank"
      >
        GitHub
      </Button>
    </Paper>
  );
}

export default AppFooter;

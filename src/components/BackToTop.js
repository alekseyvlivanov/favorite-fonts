import { useScrollTrigger, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  div: {
    position: 'fixed',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

function BackToTop({ children }) {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    window['scroll']({ behavior: 'smooth', top: 0 });
  };

  return (
    <Zoom in={trigger}>
      <div className={classes.div} role="presentation" onClick={handleClick}>
        {children}
      </div>
    </Zoom>
  );
}

export default BackToTop;

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import FontCard from './FontCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

function Cards({ fonts }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {fonts.map(({ name }) => (
          <Grid item key={name} xs={12} sm={6} lg={4} xl={3}>
            <FontCard name={name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;

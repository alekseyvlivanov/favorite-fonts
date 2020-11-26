import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FontCard from './FontCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

function Cards({ fonts, options: { fontText, fontSize, listMode } }) {
  const classes = useStyles();

  const textValue =
    fontText.trim() === ''
      ? 'Almost before we knew it, we had left the ground.'
      : fontText.trim();

  const smValue = listMode ? 12 : 6;
  const lgValue = listMode ? 12 : 4;
  const xlValue = listMode ? 12 : 3;

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {fonts.map(({ name }) => (
          <Grid item key={name} xs={12} sm={smValue} lg={lgValue} xl={xlValue}>
            <FontCard name={name} textValue={textValue} fontSize={fontSize} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;

import LazyLoad from 'react-lazyload';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FontCard from './FontCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

function Cards({
  fonts,
  options: { fontText, fontSize, listMode, favorites, setVaforitesAndStorage },
}) {
  const classes = useStyles();

  const textValue =
    fontText.trim() === ''
      ? 'Almost before we knew it, we had left the ground.'
      : fontText.trim();

  const smValue = listMode ? 12 : 6;
  const lgValue = listMode ? 12 : 4;
  const xlValue = listMode ? 12 : 3;

  const toggleFavorite = (family) => {
    if (favorites.includes(family)) {
      console.log(favorites.filter((f) => f !== family));
      setVaforitesAndStorage(favorites.filter((f) => f !== family));
    } else {
      console.log([...favorites, family]);
      setVaforitesAndStorage([...favorites, family]);
    }
  };

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {fonts.map(({ category, family, url }) => (
          <Grid
            item
            key={family}
            xs={12}
            sm={smValue}
            lg={lgValue}
            xl={xlValue}
          >
            <LazyLoad placeholder="Loading..." style={{ height: '100%' }}>
              <FontCard
                category={category}
                family={family}
                url={url}
                textValue={textValue}
                fontSize={fontSize}
                isFavorite={favorites.includes(family)}
                toggleFavorite={toggleFavorite}
              />
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;

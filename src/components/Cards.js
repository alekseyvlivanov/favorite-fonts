import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import FontCard from './FontCard';

function Cards({ fonts }) {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {fonts.map(({ name }) => (
          <Grid item key={name} xs={3}>
            <FontCard name={name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Cards;

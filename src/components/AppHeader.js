import {
  AppBar,
  Button,
  Container,
  Hidden,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SideDrawer from './SideDrawer';

const navLinks = [
  { title: 'Catalog', path: 'https://fonts.google.com' },
  { title: 'Featured', path: 'https://fonts.google.com/featured' },
  { title: 'Articles', path: 'https://design.google/library/google-fonts' },
  { title: 'About', path: 'https://fonts.google.com/about' },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
  },
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar color="inherit" component="header" position="static">
      <Toolbar>
        <Container className={classes.container}>
          <Typography component="h1" variant="h6">
            Favorite&nbsp;Fonts
          </Typography>
          <Hidden xsDown>
            <List aria-labelledby="main nav" component="nav">
              {navLinks.map(({ title, path }) => (
                <Button
                  href={path}
                  key={title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </Button>
              ))}
            </List>
          </Hidden>
          <Hidden smUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

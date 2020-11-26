import { useState } from 'react';
import { Button, Drawer, IconButton, List, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '25vh',
  },
});

function SideDrawer({ navLinks }) {
  const classes = useStyles();

  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List aria-labelledby="main nav" className={classes.nav} component="nav">
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
    </div>
  );

  return (
    <>
      <Tooltip title="Menu">
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer('right', true)}
        >
          <Menu />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </>
  );
}

export default SideDrawer;

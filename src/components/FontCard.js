import { useEffect } from 'react';
import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
}));

function FontCard({
  category,
  family,
  url,
  textValue,
  fontSize,
  isFavorite,
  toggleFavorite,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (!document.getElementById(family)) {
      const font = document.createElement('link');
      font.rel = 'stylesheet';
      font.href = url;
      font.id = family;
      document.head.appendChild(font);
    }
  }, [family, url]);

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleFavorite(family)}
          >
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        }
        title={family}
      />
      <CardContent>
        <p
          style={{
            fontFamily: `${family}, ${category}`,
            fontSize: fontSize,
            overflowWrap: 'break-word',
          }}
        >
          {textValue}
        </p>
      </CardContent>
    </Card>
  );
}

export default FontCard;

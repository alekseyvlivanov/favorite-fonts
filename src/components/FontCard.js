import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import BookmarkIcon from '@material-ui/icons/Bookmark';

function FontCard({ name, textValue, fontSize }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <BookmarkBorderIcon />
          </IconButton>
        }
        title={name}
        subheader="Author"
      />
      <CardContent>
        <p style={{ fontSize: fontSize }}>{textValue}</p>
      </CardContent>
    </Card>
  );
}

export default FontCard;

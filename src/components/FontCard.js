import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function FontCard({ name }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>Author</Typography>
      </CardContent>
    </Card>
  );
}

export default FontCard;

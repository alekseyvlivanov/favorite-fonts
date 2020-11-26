import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

function FontCard({ name }) {
  return (
    <Card>
      <CardHeader title={name} subheader="Author" />
      <CardContent>
        Almost before we knew it, we had left the ground.
      </CardContent>
    </Card>
  );
}

export default FontCard;

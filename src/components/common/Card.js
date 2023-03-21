// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

export default function SimpleCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Lorem ipsum
        </Typography>
        <Typography variant='h5' component='div'></Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Button</Button>
      </CardActions>
    </Card>
  );
}

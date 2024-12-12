import Card from '@ui/atoms/Card';
import CardContent from '@ui/atoms/CardContent';
import CardHeader from '@ui/atoms/CardHeader';
import CardTitle from '@ui/atoms/CardTitle';


function CartInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        Card content goes here
      </CardContent>
    </Card>
  )
}

export default CartInfoCard;

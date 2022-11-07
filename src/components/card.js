import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LoginCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>please login</Card.Title>
        <Card.Text>
          Login
        </Card.Text>
        <Button variant="primary">login</Button>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;
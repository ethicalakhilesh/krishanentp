import Card from 'react-bootstrap/Card';


function CardGrid() {
  return (
    
          <Card>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/ethicalakhilesh/krishanentp/master/public/images/krishanentp.jpg" />
            <Card.Body>
              <Card.Title>Card grid title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default CardGrid;
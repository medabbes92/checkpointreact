
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Card,ListGroup,Placeholder,Form} from 'react-bootstrap';
function App() {

  return (
    <>
    <div className="App">
      
     
  
  
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome to our website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100031704746916">Link</Nav.Link>
            <NavDropdown title="Articles & Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Engrais</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Irrigation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Machinisme</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


</div>
 <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     This is a card 
   </Card.Text>
 </Card.Body>
 <ListGroup className="list-group-flush">
   <ListGroup.Item>Write your description</ListGroup.Item>
   <ListGroup.Item>This is a good card</ListGroup.Item>
   <ListGroup.Item>Magic card</ListGroup.Item>
 </ListGroup>
 <Card.Body>
   <Card.Link href="https://www.hydroelec-tn.com/wp-content/uploads/2022/03/Fonte-S630.png">Card Link</Card.Link>
   <Card.Link href="https://www.hydroelec-tn.com/wp-content/uploads/2022/03/Fonte-S630.png">Another Link</Card.Link>
 </Card.Body>
</Card>



    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  
</>
);

}
export default App;

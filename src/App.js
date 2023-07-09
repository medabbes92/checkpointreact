
// import './App.css';
import { Navbar,Container,Nav,NavDropdown,Card,Form} from 'react-bootstrap';
import './style.css'
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

<div className='carte' style={{display : "flex" , justifyContent: "space-around", margin:"50px" }} >

<div className='carte1'>
 <Card style={{ width: '26rem' }}>
 <Card.Img variant="top" src="https://www.hydroelec-tn.com/wp-content/uploads/2022/03/Fonte-S630.png"style={{height:"500px",}} />
 <Card.Body>
   <Card.Title>Electropompe 30 cv</Card.Title>
   <Card.Text>
     This is a submersible pompe
   </Card.Text>
 </Card.Body>
 
 <Card.Body>
   <Card.Link href="https://www.hydroelec-tn.com/wp-content/uploads/2022/03/Fonte-S630.png">Card Link</Card.Link>
   <Card.Link href="https://www.hydroelec-tn.com/wp-content/uploads/2022/03/Fonte-S630.png">Another Link</Card.Link>
 </Card.Body>
</Card>
</div>

<div className='carte2'>
<Card style={{ width: '26rem' }}>
 <Card.Img variant="top" src="https://cptechmaroc.ma/wp-content/uploads/2020/12/4SR.jpg" style={{height:"500px"}} />
 <Card.Body>
   <Card.Title>Electropompe 15 cv</Card.Title>
   <Card.Text>
     This a submersible pompe
   </Card.Text>
 </Card.Body>
 
 <Card.Body>
   <Card.Link href="https://cptechmaroc.ma/wp-content/uploads/2020/12/4SR.jpg">Card Link</Card.Link>
   <Card.Link href="https://cptechmaroc.ma/wp-content/uploads/2020/12/4SR.jpg">Another Link</Card.Link>
 </Card.Body>
</Card>
</div>

<div className='carte3'>
<Card style={{ width: '26rem' }}>
 <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a1kd5wpBYJonqfD-U8P2ePYXTllklCOFyG8HB8_bGBdqVplNw_Jdsdnfq1xgCl7tXLY&usqp=CAU" style={{height:"500px"}}/>
 <Card.Body>
   <Card.Title>Electropompe 1cv</Card.Title>
   <Card.Text>
     This is a electropmpe immergeable
   </Card.Text>
 </Card.Body>
 
 <Card.Body>
   <Card.Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a1kd5wpBYJonqfD-U8P2ePYXTllklCOFyG8HB8_bGBdqVplNw_Jdsdnfq1xgCl7tXLY&usqp=CAU">Card Link</Card.Link>
   <Card.Link href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a1kd5wpBYJonqfD-U8P2ePYXTllklCOFyG8HB8_bGBdqVplNw_Jdsdnfq1xgCl7tXLY&usqp=CAU">Another Link</Card.Link>
 </Card.Body>
</Card>
</div>
</div>



    <Form style={{marginLeft : "100px" , marginBottom :"150px" , backgroundColor :"beige"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
    </Form>
  
</>
);

}
export default App;

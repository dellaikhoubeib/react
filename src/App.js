import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div className='bac'> 
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Tunisie</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
    
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mb-4' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div className='khoubeib'>
    <Image  src="https://mediaim.expedia.com/destination/1/a9bda1fa50949556185721e94b0e2106.jpg" fluid  />
    <p >Célèbre pour ses rues pavées et ses maisons bleues et blanches, Sidi Bou Saïd est un 
      village pittoresque installé sur un promontoire qui surplombe la mer Méditerranée. Des cafés en plein air, 
      des restaurants tunisiens et des petites galeries d'art sont également parsemés sur les hauteurs. Construit
       au début du XXe siècle, le palais Ennejma Ezzahra est agrémenté d'arches, de mosaïques et d'éléments en
        stuc richement décorés, et la demeure historique Dar el-Annabi abrite des personnages de cire vêtus de 
        costumes traditionnels.</p>
        </div>
        <div className='khoubeib'>
        <Image src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR-1yVR1E-xipmxtFZBJAJQbGSbpr1IgZelLhGzPwuAmOf2VjHExD_cexcqsifpuF3v" fluid  />
    <p>Au bord de la mer, Carthage est installée dans la périphérie de la capitale de la Tunisie, Tunis.
       Elle est connue pour ses sites archéologiques. Fondée par les Phéniciens lors du premier millénaire av.
        J.-C., elle fut le siège du puissant empire carthaginois (punique), vaincu par Rome au IIe siècle av. 
        J.-C. Elle en garde aujourd'hui une collection éparse de thermes, théâtres, villas et autres ruines,
         dont un grand nombre offrent une vue dégagée sur le golfe de Tunis..</p>
         </div>
         <div className='khoubeib'>
         <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mosque_of_the_Barber_%28Mausoleum_of_Sidi_Sahabi%29.jpg/1280px-Mosque_of_the_Barber_%28Mausoleum_of_Sidi_Sahabi%29.jpg" fluid  />
    <p>مقـام أبـي زمعـة البلـوي
أقيمت هذه الزّاوية تخليدا لذكرى الصّحابي الجليل أبي زمعة البلوي الذي وافته المنيّة سنة 34هـ/ 654م على إثر معركة ضدّ الجيوش 
البيزنطيّة قرب عين جلولة وقد دُفن جثمانه بموضع القيروان قبل تأسيسها. ويذكر أن هذا 
الصّحابي كان يحمل معه شعيرات من الرّسول دُفنت إلى جانبه . ويرجع تاريخ بناء المقام فيما يبدو إلى العهد الحفصي.
 ثم قام حمودة باشا سنة 1072هـ/1661م بإضافة المدرسة. كما تولّى محمّد بن مراد سنة 1092هـ/1681م إعادة بناء الضريح.</p>
       </div>
       <div className="d-grid gap-2"><br></br>
      <Button variant="primary" size="lg">
       login
      </Button>
      <Button variant="secondary" size="lg">
        logout
      
      </Button>
    </div>
       

   
 
  </div>
  );
}

export default App;

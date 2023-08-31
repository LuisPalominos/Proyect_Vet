import React from "react";
import { MdOutlinePets } from "react-icons/md"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const PageTemplate = (props) => {
  return (
    <div>
      <Navbar bg="success" data-bs-theme="dark" expand="lg">
        <Container>
          <MdOutlinePets size={40} className="me-4 text-white" />
          <Navbar.Brand >Veterinaria Pepita</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/sobrenosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                <Nav.Link href="/tomadehora">Toma de Hora</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{props.children}</div>
      <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            <svg className='bi' width={30} height={24}>
              <use xlinkHref='#bootstrap' />
            </svg>
          </a>
          <span className='text-muted'>© 2010 Veterinaria Pepita</span>
        </div>
        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#twitter' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#instagram' />
              </svg>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/'>
              <svg className='bi' width={24} height={24}>
                <use xlinkHref='#facebook' />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
    </div>
  );
};

export default PageTemplate;

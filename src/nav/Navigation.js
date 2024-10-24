import {Navbar, NavDropdown, Offcanvas, Container, Nav} from "react-bootstrap";
import content from '../pages/basic/content.json';
import Brand from '../brand.svg';
import {useTranslation} from "react-i18next";
import contentNL from "../pages/basic/content_nl.json";
import { useNavigate } from "react-router-dom";


export const Navigation = () => {

    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    let _content_translation = i18n.language === 'en'?content:contentNL;
    let Links = _content_translation.filter(c => c.menu).map(c => {
        return <Nav.Item href={`${c?.slug}`}>
            <Nav.Link onClick={()=>navigate(c?.slug)}>{c.menu}</Nav.Link>
        </Nav.Item>
    })

    return <Navbar expand={'sm'} sticky={'top'} className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <div className="d-flex">
                    <img onClick={()=>navigate('/')} width={30} src={Brand}/> <Nav className="me-3">
                    {i18n.language == 'en'? <Nav.Link onClick={()=>i18n.changeLanguage('nl')}>NL</Nav.Link>:<Nav.Link onClick={()=>i18n.changeLanguage('en')}>EN</Nav.Link>}
                </Nav>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Offcanvas className={'justify-content-end'} placement="end" id="basic-navbar-nav">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                        Pysport
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
                        {Links}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>


}
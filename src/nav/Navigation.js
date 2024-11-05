import {Navbar, NavDropdown, Offcanvas, Container, Nav} from "react-bootstrap";
import content from '../pages/basic/content.json';
import Brand from '../brand.svg';
import {useTranslation} from "react-i18next";
import contentNL from "../pages/basic/content_nl.json";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();


    // Set language prefix and content based on the selected language
    let languagePrefix = i18n.language === 'nl' ? '/nl' : '';
    let _content_translation = i18n.language === 'en' ? content : contentNL;

    // Generate menu links based on the content file for the current language
    let Links = _content_translation.filter(c => c.menu).map((c, index) => (
        <Nav.Item key={index}>
            <Nav.Link href={`${languagePrefix}${c?.slug}`}>{c.menu}</Nav.Link>
        </Nav.Item>
    ));

    // Handle language change and navigation
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        navigate(lang === 'nl' ? '/nl' : '/');
    };

    return (
        <Navbar expand={'sm'} sticky={'top'} className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <div className="d-flex align-items-center">
                        <img onClick={() => navigate('/')} width={30} src={Brand} alt="Brand"/>

                    </div>
                </Navbar.Brand>

                {/* Language dropdown for language selection */}
                <NavDropdown title={i18n.language.toUpperCase()} id="language-dropdown" className={'me-md-3 me-auto'}>
                    <NavDropdown.Item className={i18n.language === 'en'?'active': ''} onClick={() => changeLanguage('en')}>EN</NavDropdown.Item>
                    <NavDropdown.Item className={i18n.language === 'nl'?'active': ''} onClick={() => changeLanguage('nl')}>NL</NavDropdown.Item>
                </NavDropdown>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Offcanvas collapseOnSelect className="justify-content-end" placement="end"
                                  id="basic-navbar-nav">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                            Pysport
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link href={`${languagePrefix}/`}>Home</Nav.Link>
                            {Links}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>

        </Navbar>
    );
}

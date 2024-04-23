import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';
import Spacer from './Spacer';
export default function Footer() {

    return (
        <>
            <Link to="/kontakty" className='footer_kontakt'>
                <footer className="footer bg-body-tertiary ">         
                    <Container className="fluid d-flex align-items-center justify-content-around p-4 border-bottom">
                        <Row>
                            <Container className='m-1'>
                                <h5 className="text-uppercase fw-bold text-start"> HANSPAULSKÉ STAVITELSTVÍ s. r. o.</h5>
                                <Row className='justify-content-md-center'>
                                    <Col>
                                        <p>
                                            <span className='fw-bold'>Ing. Matěj Steiner</span>
                                            <br />
                                            +420 603 179 467<br />
                                            msteiner@seznam.cz<br />
                                        </p>
                                    </Col>
                                    <Col >
                                        <p>
                                            <span className='fw-bold'>Jeroným Hašek</span>
                                            <br />
                                            +420 777 888 499<br />
                                            jeronymhasek@seznam.cz<br />
                                        </p>
                                    </Col>
                                    {/* <Col >
                                        <p>
                                            <span className='fw-bold'>Ing. Miloslav Steiner, CSc.</span>
                                            <br />
                                            +420 603 833 419<br />
                                            steiner.projekty@seznam.cz<br />
                                        </p>
                                    </Col> */}
                                </Row>
                            </Container>
                        </Row>
                        <Spacer/>
                        <Row>
                            <Container className='m-1 kontakty_footer'>
                                {/* <h5 className="text-uppercase fw-bold text-start">Kontakt</h5> */}
                                <Row className='justify-content-md-center kontaky_footer_row'>
                                    <Col>
                                        <p>
                                            <span className='fw-bold'>Nad Šárkou 1212/82</span>
                                            <br />
                                            <span className='fw-bold'>160 00 Praha 6</span>
                                            <br />
                                            <span className='fw-bold'>Dejvice</span>
                                            <br />
                                        </p>
                                    </Col>
                                    {/* <Col >
                                        <p>
                                            <span className='fw-bold'>IČ:</span> 273 87 372
                                            <br />
                                            <span className='fw-bold'>DIČ:</span> CZ 273 87 372
                                            <br />
                                        </p>

                                    </Col> */}
                                </Row>
                            </Container>
                        </Row>
                    </Container>               
                </footer>
            </Link>
        </>
    );
}
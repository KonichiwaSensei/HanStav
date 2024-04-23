import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Spacer from "../Components/Spacer";

export default function Kontakt() {
    
    return (
        <>
            <Container className='page-container home'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className="hans-card-blue p-4">
                        <h1 className='fs-1 text-decoration-underline'>Jednatelé</h1>
                        <br />
                        <Row>
                            <Col>
                                <p className='fs-4'>
                                    <span className="fw-bold">Ing. Matěj Steiner</span>
                                    <br />
                                    GSM: <a className="link-white fw-bold" href="tel:603179467">+420 603 179 467</a>
                                    <br />
                                    email: <a className="link-white fw-bold" href="mailto:msteiner@seznam.cz">msteiner@seznam.cz</a>
                                </p>
                            </Col>
                            <Col>
                                <p className='fs-4'>
                                    <span className="fw-bold">Jeroným Hašek</span>
                                    <br />
                                    GSM: <a className="link-white fw-bold" href="tel:777888499">+420 777 888 499</a>
                                    <br />
                                    email: <a className="link-white fw-bold" href="mailto:jeronymhasek@seznam.cz">jeronymhasek@seznam.cz</a>
                                </p>
                            </Col>
                        </Row>
                        {/* <Spacer /> */}
                        {/* <Spacer />
                        <h1 className='fs-2 text-decoration-underline'>Technický a odborný garant</h1>
                        <br />
                        <p className='fs-4'>
                            <span className="fw-bold">Ing. Miloslav Steiner, CSc.</span>
                            <br />
                            GSM: <a className="link-white fw-bold" href="tel:603833419">+420 603 833 419</a>
                            <br />
                            email: <a className="link-white fw-bold" href="mailto:steiner.projekty@seznam.cz">steiner.projekty@seznam.cz</a>
                        </p> */}
                    </Card>

                    <Card className="hans-card-white p-4">
                        <h1 className='fs-1 text-decoration-underline'>Kontakty na Hanspaulské stavitelství s.r.o.</h1>
                        <br />
                        <p className='fs-4 fw-bold'>
                            HANSPAULSKÉ STAVITELSTVÍ, s. r. o.
                            <br />
                            Nad Šárkou 1212/82
                            <br />
                            160 00 Praha 6 Dejvice
                            <br />
                            
                            IČ: 273 87 372
                            <br />
                            DIČ: CZ 273 87 372
                            {/* <br /> */}
                            {/* Fax: +420 233 339 258 */}
                        </p>
                        <p className="fs-5 fst-italic">Společnost vedená u rejstříkového soudu v Praze C 115672</p>
                    </Card>

                    <Card className="hans-card-blue p-4">
                        <iframe
                            className="mapycz rounded"
                            height="400rem"
                            src="https://frame.mapy.cz/s/labulubeto"
                        />
                    </Card>

                </Container>

            </Container>
        </>
    )
}
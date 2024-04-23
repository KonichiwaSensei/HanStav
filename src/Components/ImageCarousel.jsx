import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


export default function ImageCarousel() {

    return (
        <Carousel>


            <Carousel.Item>
                <Link to="/stavby">
                    <img src="/images/reference/na_piskach/na_piskach1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/reference">
                        Provádění Rekonstrukcí
                    </Link>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <Link to="/projekcni-kancelar">
                    <img src="/images/reference/kopanina/kopanina1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/stavby">
                        Provádění Novostaveb
                    </Link>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/inzenyrska-cinnost">
                    <img src="/images/reference/dum_s_hospodou_na_malesickem_namesti.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/inzenyrska-cinnost">
                        Projednání s Úřady
                    </Link>

                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/reality">
                    <img src="/images/reference/kamycka/kamycka1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>                  <Carousel.Caption>
                    <Link className='link-white fs-2' to="/kontakt">
                        Vyřízení Dotace
                    </Link>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/hypoteka">
                    <img src="/images/reference/tobrucka_stavebni_dozor/tobrucka_stavebni_dozor1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/kontakt">
                        Stavební Dozor
                    </Link>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/projekty-rodinnych-domu">
                    <img src="/images/reference/roztoky.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/projekcni-kancelar">
                        Projektování Staveb
                    </Link>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/kontakt">
                    <img src="/images/reference/potesil/potesil1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/inzenyrska-cinnost">
                        Inženýring
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/kontakt">
                    <img src="/images/reference/moby/moby1.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/kontakt">
                        Servis pro Bytové Domy - SVJ, BD
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Link to="/kontakt">
                    <img src="/images/reference/potesil/potesil2.jpg" className="d-block img-fluid rounded w-100" text="First slide" />
                </Link>
                <Carousel.Caption>
                    <Link className='link-white fs-2' to="/kontakt">
                        A mnoho dalšího…
                    </Link>
                    {/* <p>
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
}
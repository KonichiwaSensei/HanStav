import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

import ImageCarousel from '../Components/ImageCarousel';
import Divider from '../Components/Divider'
import Spacer from '../Components/Spacer'

export default function Home() {

    return (
        <>
            <Container className='page-container home'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-white p-4'>

                        <h1 className='fs-1'>
                            <span>Potřebujete spolehlivou zavedenou stavební firmu?</span>
                            {/* <Link to='/hypoteka'>hypotéku</Link>? */}
                        </h1>

                        <br />

                        <p className='fs-4'>
                            <span className='fs-3'>Spolehněte se na
                            <span className='fw-bold'> <Link to='/reference'>Hanspaulské Stavitelství s.r.o.</Link> </span> která je již 20 let na trhu! </span>
                            <br />
                            U nás si můžete být jistí
                            <span className='fw-bold fst-italic'> vysokou kvalitou všech činností, spolehlivostí, dodržování smluvených termínů a rozumné ceny. </span>
                            Postavíme nebo zrekonstruujeme 
                            <span className='fw-bold fst-italic'> dům, bytový dům, byt, i komerční objekt.</span> Zajistíme od 
                            <span className='fw-bold fst-italic'> projektové dokumentace přes projednání s úřady včetně realizace a kolaudace. </span> Zajistíme 
                            <span className='fw-bold fst-italic'> dotaci z programu Zelená Úsporám. </span> Provádíme 
                            <span className='fw-bold fst-italic'> stavební dozor. </span>
                            <br />
                            <span className='fs-3 fw-bold'>Naší specializací je Praha a její okolí.</span>
                        </p>

                        <p className='fs-4'>
                            Děláme vše pro to, aby se náklady 
                            <span className='fw-bold fst-italic'> nezvyšovaly v průběhu stavby.</span>
                            <span className='fw-bold fst-italic'> Postaráme se Vám o vše</span>, co je se stavbami spojeno, a 
                            <span className='fw-bold fst-italic'> pomůžeme Vám se všemi starostmi</span>,  které s rekonstrukcí, či výstavbou domů jsou spojené.
                        </p>

                    </Card>

                    {/* <Card className='hans-card-blue p-4'>
                        <p className='fs-4'>
                            Děláme vše pro to, aby se náklady nezvyšovaly v průběhu stavby. Postaráme se Vám o vše, co je se stavbami spojeno, a pomůžeme Vám se všemi starostmi, které s rekonstrukcí, či výstavbou domů jsou spojené, včetně
                            <span className='fw-bold'> kolaudace</span>.
                        </p>
                    </Card> */}



                </Container>

                {/* <Divider />
                <Spacer /> */}

                <Container className='text-div text-center p-0 m-0 fs-4'>
                    <Card className='hans-card-blue p-4'>
                        <Row>
                            <h1>
                                Co pro Vás můžeme udělat:
                            </h1>
                        </Row>

                        <Row>
                            <ImageCarousel />
                        </Row>
                    </Card>

                </Container>

                <Divider />

                <Container className='text-div text-center p-4 fs-5'>
                    <p className='fst-italic'>
                        Naše stavební firma Hanspaulské stavitelství s.r.o. vznikla v roce 2006 jako výsledek dlouholeté spolupráce dvou rodinných firem
                        <br />
                        a naše <Link to='/reference'>reference</Link> Vám jsou důkazem kvalitně odvedené práce.
                        <br />
                        Už nemusíte hledat spoustu firem, které Vám provedou jednotlivé činnosti, na vše máme špičkové odborníky, anebo prověřené dodavatele.
                    </p>
                </Container>

                <Spacer />

            </Container>
        </>
    )

}
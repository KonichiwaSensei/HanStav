import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'

export default function Reality() {

    return (
        <>
            <Container className='page-container roddom'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Reality - pomůžeme s koupí i prodejem</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Hledáte reality ke koupi, nebo je potřebujete prodat a chcete se spolehnout na privátní servis?</span>
                            <br />
                            Spolehněte se na <span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span> které Vám dokáže pomoci individuálně a s osobním přístupem. Rádi pro Vás vyhledáme vhodné reality podle Vašich představ ke koupi, anebo ty Vaše Vám pomůžeme prodat.
                            <br />
                            <br />
                            S realitami máme letité zkušenosti a máme velký přehled na Praze 6 a v jejím okolí. Dokážeme Vám však úspěšně pomoci i po celé Praze, či Středních Čechách. Naše společnost Vám rovněž nabízí všechny služby realitní kanceláře včetně zajištění kompletního právního servisu i zajištění hypotéky.
                            <br />
                            <br />
                            <span className='fs-4 fst-italic'>
                                <Link to="/kontakty">Kontaktujte nás</Link>
                                <span>, seženeme Vám Vaše vysněné reality, anebo úspěšně prodáme ty, které chcete nabídnout k prodeji.</span>
                            </span>
                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Od koupě reality až po stavbu a kolaudaci domu</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Pokud si to budete přát, jsme připravení Vám poskytnout servis realit na opravdu mimořádně vysoké úrovni.</span>
                            <br />
                            Naprosto se přizpůsobíme Vašim přáním a požadavkům a jsme schopni Vám poskytnout <span className='fw-bold fst-italic'>realitní fullservis na VIP úrovni</span>. Stačí jen, abyste nám zadali Vaše požadavky, a my ihned začneme pracovat.
                            <br />
                            <br />
                            Například:
                        </p>
                        <div className='centered-ul'>
                            <ul>
                                <li>Seženeme Vám vhodný pozemek, či dům podle Vašich představ</li>
                                <li>Pomůžeme vyjednat cenu</li>
                                <li>Zajistíme financování, hypotéku apod.</li>
                                <li>Pomůžeme se smlouvami a právními úkony</li>
                                <li>Zajistíme veškerou <Link to="/inzenyrska-cinnost">inženýrskou činnost</Link></li>
                                <li><Link to="/projekcni-kancelar">Projekční kancelář</Link> navrhne řešení rekonstrukce, nebo stavby podle Vašich přání</li>
                                <li>Postavíme, zrekonstruujeme <Link to="/stavby">stavby</Link></li>
                                <li>Pomůžeme s kolaudací</li>
                                <li>A mnoho dalšího…</li>
                                <li className='fw-bold fst-italic'>A pak už Vám jen předáme klíče</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Reality - odborné poradenství</h1>
                        <br />
                        <p className='fs-5'>
                            V rámci prezentovaných developerských projektů Vám také <span className='fw-bold fst-italic'>poskytujeme odborné informace o pozemcích i z hlediska realit</span>. Dále služby související se získáním finančních zdrojů pro koupi pozemků formou realitních obchodů (prodej bytů, domů nebo pozemků).
                            <br />
                            Pokud chcete koupit nějaké reality a potřebujete s tím odborně pomoci, či poradit, neváhejte a <Link to="/kontakty">kontaktuje nás</Link>, <span className='fw-bold fst-italic'>spolehlivě, diskrétně a efektivně</span> Vám pomůžeme.
                        </p>
                        <p className='fs-4 fst-italic'>
                        Popřípadě Vaše požadavky, či dotazy na naše služby a nabídky nemovitostí k prodeji směrujte prosím na naši emailovou adresu <a href='mailto:jeronymhasek@seznam.cz'>jeronymhasek@seznam.cz</a>.
                        </p>
                    </Card>


                </Container>

            </Container>

        </>
    )

}
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'

export default function InzCin() {

    return (
        <>
            <Container className='page-container roddom'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Inženýrská činnost pomůže s úřady</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Potřebujete, aby se s Vaší stavbou rodinného domu také někdo postaral o kontakt s úřady?</span>
                            <br />
                            <span className='fw-bold'>Pak se spolehněte na naši inženýrskou činnost a máte po starostech.</span>
                            <br />
                            Stačí nám jen Vašem plná moc pro <span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span> k zastupování při jednání s orgány státní správy a ostatními účastníky řízení. Díky naší inženýrské činnosti budete mít všechny dokumenty a administrativu odborně zpracovanou a v termínech. Tím se snažíme minimalizovat možná rizika a prodlužování jednání s úřady.
                            <br />
                            <br />
                            <span className='fs-4 fst-italic'>
                                Inženýrská činnost je také rozdělena do několika fází dle rozsahu a druhu plánované výstavby:
                            </span>
                        </p>
                        <div className='centered-ul'>
                            <ul>
                                <li>Vyřízení hypotéky</li>
                                <li>Před-projektová inženýrská činnost</li>
                                <li>Inženýrská činnost pro zajištění územního rozhodnutí</li>
                                <li>Inženýrská činnost pro zajištění stavebního povolení</li>
                                <li>Zajištění kolaudace stavby a případných povolení provozu</li>
                                <li>A další…</li>
                            </ul>
                        </div>
                        <p>
                            <span className='fs-4 fst-italic'>
                                <Link to="/kontakty">Kontaktujte nás</Link>
                                <span>, naše inženýrská činnost Vám velmi pomůže s úřady.</span>
                            </span>
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Před-projektová inženýrská činnost</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Tato inženýrská činnost je prvopočátkem celého koloběhu prací pro výstavbu Vašeho projektu rodinného domu.</span>
                            <br />
                            Výsledkem této části jsou předběžné souhlasy a vyjádření dotčených orgánů státní správy a ostatních účastníků následujícího správního řízení (včetně správců sítí). Dle těchto výsledků je následně postupováno při zpracování jednotlivých fází projektové dokumentace. Jedná se tedy o zjištění všech podmínek a požadavků, které je nutné zapracovat do projektové dokumentace (<span className='fst-italic'>platí pro pozemky mimo námi prováděné lokality</span>).
                        </p>
                        <br />
                        <br />
                        <p className='fs-5'>
                            V některých případech je tento průzkum podmínek a požadavků na <Link to="/stavby">stavby</Link> v dané lokalitě výstavby, jedinou možností úspory zbytečně investovaných finančních prostředků. Doporučením naší <Link to="/projekcni-kancelar">projekční kanceláře</Link> je tedy před jakoukoli koupí pozemku pro následné výstavby, zadat provedení této inženýrské činnosti, která Vám může v případech problému s daným pozemkem odvrátit všechny problémy a zbytečné finanční výdaje a případné spory.

                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Inženýrská činnost pro zajištění územního rozhodnutí</h1>
                        <br />
                        <p className='fs-5'>
                            Již při zpracování projektové dokumentace pro územní rozhodnutí je projektant v kontaktu s dotčenými orgány státní správy. Jednotlivé fáze projektu jsou konzultovány nejen s Vámi, ale také s úřady (<span className='fst-italic'>platí pro pozemky mimo námi prováděné lokality</span>).
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Inženýrská činnost pro zajištění stavebního povolení</h1>
                        <br />
                        <p className='fs-5'>
                            Do projektové dokumentace pro stavební povolení jsou již zapracovány podmínky dané územním rozhodnutím a některá vyjádření získaná z výsledků inženýrské činnosti pro zajištění územního rozhodnutí můžete také použít pro stavební povolení. Tato možnost je například u vyjádření správců sítí, ale musí být na tomto vyjádření vyznačena.
                            <br />
                            <br />
                            V některých případech, specifikovaných Stavebním zákonem, není pro navrženou stavbu vydáváno územní rozhodnutí, nebo je stavební povolení vydáváno v tzv. sloučeném řízení. V těchto případech se pro vydání stavebního povolení zajišťují všechny inženýrské činnosti zajišťující všechny vyjádření dotčených orgánů státní správy a ostatních účastníků řízení v plném rozsahu.
                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Inženýrská činnost pro zajištění kolaudace stavby a případných povolení provozu</h1>
                        <br />
                        <p className='fs-5'>
                            Výsledkem této inženýrské činnosti je zajištění všech nutných podkladů předkládaných při kolaudačním řízení <Link to="stavby">stavby</Link>. Například geometrický plán stavby, revizní zpráva elektroinstalace, tlakové zkoušky instalací, atd. V neposlední řadě je to zajištění vlastního kolaudačního řízení a získání kolaudačního protokolu s vyznačením právní moci tohoto rozhodnutí.
                            <br />
                            <br />
                            Součástí této inženýrské činnosti jsou konzultace, které musí vést projektant se zástupci úřadů a správců sítí. V těchto jednáních je projektant nezastupitelný. Některé případné připomínky zástupců úřadů může tak projektant znalý problematiky, vyřídit za Vás přímo na místě a okamžitě.
                        </p>
                    </Card>

                    <h1>
                        <Link to="/kontakty">
                            Kontaktujte nás
                        </Link>, naše inženýrská činnost Vám velmi pomůže vše směřovat k úspěšnému cíli.
                    </h1>

                    {/* <Spacer /> */}

                    {/* <Divider /> */}

                </Container>




            </Container>

        </>
    )

}
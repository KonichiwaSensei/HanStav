import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'

export default function Hypoteka() {

    return (
        <>
            <Container className='page-container roddom'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Hypotéka Vám pomůže koupit dům</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Je pro Vás hypotéka složitý proces a potřebujete s ní pomoci? Spolehněte se na <span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span></span>
                            <br />
                            Pomůžeme Vám vybrat vhodný bankovní ústav pro získání hypotéky a pomůžeme Vám ji vyřídit. Hypotéka Vám dokáže velmi efektivně financovat Vaše stavby, které si od nás můžete objednat. Hypotéka, pro naše <Link to="/projekty-rodinnych-domu">projekty rodinných domů</Link> je velmi časté řešení, jak získat finanční prostředky na pořízení rodinného domu.
                            <br />
                            <span className='fs-4 fst-italic'>
                                <Link to="/kontakty">Kontaktujte nás</Link>
                                <span>, pomůžeme Vám vyřídit hypotéku.</span>
                            </span>
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Co je to hypotéka?</h1>
                        <br />
                        <p className='fs-5'>
                            Hypotéka je dlouhodobý účelový úvěr určený fyzickým osobám mající příjem ze závislé činnosti nebo z podnikání, který muže být použit na investici do nemovitosti na území České republiky.
                        </p>
                        <br />
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Komu je hypotéka určena?</h1>
                        <br />
                        <p className='fs-5'>
                            Hypotéka je určen fyzickým osobám starším 18. ti let s trvalým pobytem na území České republiky nebo občanům ČR nebo držiteli průkazu o povolení pobytu člena státu Evropských společenství. O hypotéku mohou současně žádat až čtyři žadatelé ve dvou domácnostech. Manželé mající společné jmění manželu musí žádat o úvěr společně.
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Účel hypotéky</h1>          
                        <div className='centered-ul'>
                            <ul>
                                <li>Koupě nemovitosti</li>
                                <li>Nákup stavebního pozemku, nebo <Link to="/reality">realit</Link></li>
                                <li>Výstavba nemovitosti</li>
                                <li>Rekonstrukce nemovitosti</li>
                                <li>Modernizace a údržba nemovitosti</li>
                                <li>Vypořádání dědictví, společného jmění manželu</li>
                                <li>Splacení úvěru</li>
                                <li>Půjčky použité na investice do nemovitosti</li>
                                <li>Kombinace výše uvedených účelů</li>
                            </ul>
                        </div>
                        <p className='fs-5'>
                        Hypotéku můžete rovněž využít i jako investici do <Link to="stavby">stavby</Link> bytových, administrativních a polyfunkčních budov (s převažující plochou bydlení nebo administrativní), kde návratnost úvěru je postavena na výnosech z nájemného z této nemovitosti.
                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Objekt hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Stavební pozemek</li>
                                <li>Nemovitosti sloužící k bydlení (např. <Link to="/projekty-rodinnych-domu">projekt rodinného domu</Link> či bytová jednotka)</li>
                                <li>Nemovitosti sloužící k individuální rekreaci</li>
                                <li>Bytový dům</li>
                                <li>Administrativní a polyfunkční budovy s převažující plochou k bydlení nebo administrativní</li>
                                <li>Nemovité příslušenství, které je součástí výše uvedených nemovitostí (garáž, bazén, sauna, terénní úpravy pozemku atd.)</li>
                                <li>Profinancovat lze jako součást hypotéky rovněž projekt, <Link to="/inzenyrska-cinnost">inženýrské činnosti</Link> a zařízení staveniště</li>
                                <li>Půjčky použité na investice do nemovitosti</li>
                                <li>Kombinace výše uvedených účelů</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>V jaké výši lze získat hypotéku?</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Hypotéka je poskytována až do výše 100 % zástavní hodnoty nemovitosti</li>
                                <li>Minimální výše hypotéky je 300 tis. Kč</li>
                                <li>Maximální výše hypotéky není omezena a výše hypotéky je současně limitována schopností klienta splácet</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Čerpání hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Jednorázové (např. koupe nemovitosti, refinancování úvěru)</li>
                                <li>Postupné (např. výstavba či rekonstrukce nemovitosti nebo v případě, že dohodnutá platba za nemovitost je rozložena do více splátek)</li>
                            </ul>
                        </div>
                        <p className='fs-5'>
                        Čerpání hypotéky je účelové bezhotovostní a provádí se na účet prodávajícího uvedeného v kupní smlouvě nebo dodavatele. V případě, kdy klienti nejsou dočasně schopni předložit definitivní doklady ověřující účelovost hypotéky, mohou doložit účelovost hypotéky zpětně. Ke schválení hypotéky předkládá klient alespoň předběžné dokumenty, ze kterých bude zřejmé, že se bude jednat o účelové čerpání.
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Splácení hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Dobu splatnosti je možné zvolit v rozmezí 5 - 30 let</li>
                                <li>Hypotéka musí být splacena nejpozději do 75. ti let věku žadatele</li>
                                <li>Po dobu čerpání klient hradí pouze úroky z aktuálně čerpané částky hypotéky</li>
                                <li>Po úplném vyčerpání dle volby klienta: formou pravidelných měsíčních splátek (tzv. anuit). Anuita je konstantní platba zahrnující úrok a jistinu formou progresivních splátek nebo formou degresivních splátek</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Úroková sazba hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Fixní sazba dle volby klienta na 1 rok, 3 roky, 5, 10 nebo 15 let</li>
                                <li>Po dobu zvolené fixace je garantována platnost smluvně sjednaných úrokových podmínek po uplynutí této doby jsou s klientem sjednány úrokové podmínky na další období a současně má při změně fixace možnost splatit hypotéku nebo její část bez jakýchkoli sankcí a poplatků</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Zajištění hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Vždy formou zástavního práva k předmětné nebo jiné nemovitosti ležící na území České republiky (lze zastavit i více nemovitostí)</li>
                                <li>Nemovitost, která je předmětem zajištění, nesmí být k datu čerpání zatížena zástavním právem třetí osoby a ani její převod nesmí být omezen s výjimkou zástavního práva, kterým je zajištěn úvěr poskytnutý stavební spořitelnou</li>
                                <li>Nemovitost, která je předmětem zástavního práva, musí být nejpozději před čerpáním úvěru pojištěna a pojistné plnění musí být vinkulováno v prospěch banky</li>
                            </ul>
                        </div>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Výhody hypotéky</h1>
                        <div className='centered-ul'>
                            <ul>
                                <li>Možnost získat okamžitě zdroje na financování investice do nemovitosti bez nutnosti dlouhodobě spořit</li>
                                <li>Není vyžadováno sjednání životního pojištění u žadatele o hypoteční úvěr</li>
                                <li>Možnost s hypotékou na investici do nemovitosti získat zároveň určitou část finančních prostředků, které lze použít na cokoliv- služba Neúčelová část hypotečního úvěru</li>
                                <li>Nemovitost s hypotékou lze kdykoliv během doby splatnosti prodat</li>
                                <li>Poplatek za zpracování úvěru je hrazen jen v případě, že je úvěr schválen</li>
                                <li>Možnost kombinace hypotečního úvěru s úvěrem od Státního fondu rozvoje bydlení (SFRB) - Hypotéka pro mladé zprostředkování státní finanční podpory</li>
                                <li>Možnost uplatnit daňový odpočet zaplacených úroků od základu daně až do výše 300 tis. Kč ročně</li>
                                <li>Možnost výrazného snížení výše měsíční splátky rozložením splácení úvěru do delšího časového období až 40. ti let</li>
                                <li>Na požádání klienta je možné z hypotečního úvěru proplatit již uhrazené faktury, popř. kupní cenu max. do výše 75 % úvěru. Díky zpětnému proplacení prostředků může klient profinancovat již dříve zaplacené vlastní prostředky použité v souvislosti s výstavbou či rekonstrukcí nemovitostí. Získané peníze ze zpětného proplacení je třeba opět použít na investici do nemovitosti.</li>
                            </ul>
                        </div>
                    </Card>


                    <h1>
                        <Link to="/kontakty">
                            Kontaktujte nás
                        </Link>, pomůžeme Vám vyřídit a získat hypotéku.
                    </h1>
       

                </Container>




            </Container>

        </>
    )

}
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'

export default function Stavby() {

    return (
        <>
            <Container className='page-container stavby'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Row >
                        <Col>

                            <Card className='hans-card-blue p-4'>
                                <h1 className='fs-2 text-decoration-underline'>Stavby - postavíme Váš dům</h1>
                                <br />
                                <p className='fs-5'>
                                    <span className='fw-bold'>Hledáte někoho, kdo Vaše stavby provede opravdu kvalitně, v termínu a za nízké ceny od projektu, až po realizaci?</span>
                                    <br />
                                    Spolehněte se na korporaci firem Hanspaulské stavitelství s.r.o., Steiner-Projekty, a J&C Dipos. Nabízíme Vám výběr ze široké škály projektů rodinných domů. Nabídka staveb je složena od domů ekonomických až po domy nadstandardní a její rozsah jistě uspokojí každého z Vás, ať máte jakkoli vysoké nároky.
                                    <br />
                                    <span className='fs-4 fst-italic'>
                                        <Link to="/kontakty">Kontaktujte nás</Link>
                                        <span>, budete mít stavby, jaké jste vždy chtěli mít.</span>
                                    </span>
                                </p>
                            </Card>

                            <Card className='hans-card-white p-4'>
                                <h1 className='fs-2 text-decoration-underline'>Stavby podle Vašich přání</h1>
                                <br />
                                <p className='fs-5'>
                                    <span>V našem </span>
                                    <Link to="/projekty-rodinnych-domu">
                                        katalogu projektů
                                    </Link>
                                    <span> rodinných domů naleznete několik typových staveb, které dobře poslouží pro Vaši inspiraci a zároveň jako podklad pro další jednání.
                                        <br />
                                        Tyto stavby samozřejmě můžete i objednat. Každý z Vás je jiný a má také jiné nároky na vzhled a uspořádání domu.
                                        <br />
                                        Na základě Vašich požadavků budou stavby takové, aby odpovídaly všem Vašim představám a požadavkům.
                                    </span>
                                    <br />
                                    <br />
                                    <span>Při projekci stavby je důležitá úzká spolupráce mezi Vámi a naší </span>
                                    <Link to="/projekcni-kancelar">
                                        projekční kanceláří
                                    </Link>
                                    , jedině tak bude nejlépe odpovídat Vašim představám. My k nim přidáme odborné znalosti a zkušenosti.
                                    <br />
                                    <span>Důležité je, aby Vám Váš nový dům plně vyhovoval, cítili jste se v něm příjemně a byl pro Vás tím pravým originálem. Naší snahou není Vám jen prodat stavbu domu. Snažíme se pomoci naplnit Vaše představy o budoucím bydlení a být Vám partnerem při tomto významném kroku, třeba Vám i zajistit hypotéku. </span> </p>
                            </Card>

                            <Card className='hans-card-blue p-4'>
                                <h1 className='fs-2 text-decoration-underline'>Vysoká kvalita prováděných staveb</h1>
                                <br />
                                <p className='fs-5'>
                                    Všechny naše stavby jsou vysoké odborné kvality a poskytujeme Vám na ně veškeré záruky. Kvalitní projekt Vám zaručuje minimalizaci rizik při výstavbě, která bývají příčinou nárůstu cen stavebních prací. Všechny naše stavby jsou navrženy tak, aby bylo jejich provádění snadné a bez zbytečných komplikací. Doporučujeme stavby zděné.
                                    <br />
                                    <br />
                                    Stavby jsou navrženy z osvědčených materiálů na našem trhu tak, aby vyhovovaly všem evropským normovým požadavkům. Prověřené materiály, projekční činnost a technologie staveb Vám zaručují kvalitu zhotoveného díla. Vyhnete se tak případným následným vadám, které uměle prodražují stavbu. Kompletní projektovou dokumentaci Vám dodáme v krátké a předem domluvené lhůtě.
                                </p>
                            </Card>

                            <Card className='hans-card-white p-4'>
                                <h1 className='fs-2 text-decoration-underline'>Výhody našich staveb</h1>
                                <br />
                                <p className='fs-5'>
                                    Výhodou našich typových stavebních projektů je jejich nízká cena spojená s vysokou odbornou kvalitou a nadstandardním rozsahem výkresové dokumentace. Dodávané stavby jsou tzv. jednostupňové projekty včetně všech dílčích instalací. Podle takovéhoto projektu lze stavby bez problémů vystavět.
                                    <br />
                                    <br />
                                    <span>Na rozdíl od velkých společností, je každá naše stavba originál. V ceně stavby jsou zahrnuty nejen typové projekty, ale i veškeré změny v dispozici, které si budete přát. Rovněž projekt usazení do domu na pozemek a připojení domu na všechny sítě. Veškeré stavby je naše firma </span>
                                    <span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span>
                                    <span> schopna po vyhotovení cenové nabídky zrealizovat.</span>
                                </p>
                            </Card>

                        </Col>

                        <Col sm={4} className='d-none d-md-block'>
                            {/* "my-5" ? */}

                            <Card className='hans-card-white p-4'>
                                <img className="rounded img-fluid" src="/images/reference/prvorepublikova_vila_na_hanspaulce/prvorepublikova_vila_na_hanspaulce1.jpg" alt="" />
                                <p className='fs-6 fst-italic'>
                                    <Link to="/reference">
                                        Villa Na Hanspaulce
                                    </Link>
                                    <span> - totální rekonstrukci vily včetně záchrany prvolepublikových prvků</span>
                                </p>
                            </Card>

                            <Card className='hans-card-blue p-4'>
                                <img className="rounded img-fluid" src="/images/reference/provepublikova_vila_na_piskach_hanspaulka.jpg" alt="" />
                                <p className='fs-6 fst-italic'>
                                    <Link to="/reference">
                                        Prvorepubliková Vila
                                    </Link>
                                    <span> - totální rekonstrukci prvorepublikové vily v ulici Na Pískách</span>
                                </p>
                            </Card>

                            <Card className='hans-card-white p-4'>
                                <img className="rounded img-fluid" src="/images/reference/kamycka/kamycka1.jpg" alt="" />
                                <p className='fs-6 fst-italic'>
                                    <Link to="/reference">
                                        Zateplení Bytového Domu
                                    </Link>
                                    <span> - realizace proběhla jako stavba na klíč včetně projektu, projednání i vlastní stavby</span>
                                </p>
                            </Card>

                            <Card className='hans-card-blue p-4'>
                                <img className="rounded img-fluid" src="/images/reference/potesil/potesil1.jpg" alt="" />
                                <p className='fs-6 fst-italic'>
                                    <Link to="/reference">
                                       Rekonstrukce a Novostavba
                                    </Link>
                                    <span> - předmětem zakázky bylo rekonstruovat vyžilý dům z osmdesátých let vedle něj postavit zcela nový dům dle dnešních nejvyšších standartů</span>
                                </p>
                            </Card>



                        </Col>
                    </Row>

                    {/* <Divider /> */}
                    <Spacer />

                    <h1>
                        <Link to="/kontakty">
                            Kontaktujte nás
                        </Link>, Vaše stavby budou levné a špičkově provedené.
                    </h1>

                </Container >

            </Container >

        </>
    )

}
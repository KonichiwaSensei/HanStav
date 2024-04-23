import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'

export default function ProjKan() {

    return (
        <>
            <Container className='page-container roddom'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Projekční kancelář realizuje Vaše sny</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Hledáte projekční kancelář, která Vám vypracuje kvalitní projekt za sympatické ceny?</span>
                            <br />
                            Spolehněte se na <span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span> Naše projekční kancelář Vám vyhotoví kompletní projektovou dokumentaci k vaší stavbě. Naše projekční kancelář má velmi mnoho zkušeností a bohaté <Link to="/reference">reference</Link>. Vypracujeme Vám kompletní podklady pro výstavbu i pro řízení s úřady i pro vyřízení <Link to="/hypoteka">hypotéky</Link>.
                            <br />
                            <br />
                            Pokud máte vlastní nápady na celkové dispozice Vašeho vysněného domu, rádi budeme s Vámi spolupracovat, abychom dokázali realizovat Vaše požadavky a přání. Práce naší projekční kanceláře na vypracování dokumentace Vašeho rodinného domu je ztvárněním Vašich představ, požadavků, ale také finančních možností. Vlastní projektové přípravě je nutné věnovat dostatek času.
                            <br />
                            <span className='fs-4 fst-italic'>
                                <Link to="/kontakty">Kontaktujte nás</Link>
                                <span>, naše projekční kancelář se Vám ráda přizpůsobí při plnění Vašich snů.</span>
                            </span>
                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Projekční kancelář - šetříme Vaše náklady</h1>
                        <br />
                        <p className='fs-5'>
                            Veškerá dokumentace vypracovaná naší projekční kanceláří Vám při realizaci <Link to="/stavby">stavby</Link> šetří finanční prostředky. Základem pro vypracování kvalitní projektové dokumentace je vždy dostatečná znalost pozemku určeného pro výstavbu, napojovací body inženýrských sítí, ale také podmínky stanovené územním plánem či územním rozhodnutím v lokalitě stavby.
                        </p>
                        <br />
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Projekční kancelář pracuje podle Vašich představ</h1>
                        <br />
                        <p className='fs-5'>
                            Můžete do naší projekční kanceláře přijít i s vlastním návrhem či představou <Link to="/projekty-rodinnych-domu">projektu rodinného domu</Link>. Takto připravené podklady odborně posoudíme, s Vámi konzultujeme a případně po naší vzájemné dohodě upravíme v návaznosti na platné předpisy a právní úpravy, na statiku a ekonomiku stavby a také ekonomiku celého provozu.
                            <br />
                            <br />
                            <span className='fs-4 fst-italic'>
                                Další variantou je vypracování studie stavby naší projekční kanceláří na základě Vašich požadavků a podmínek:
                            </span>
                        </p>
                        <div className='centered-ul'>
                            <ul>
                                <li>Rozsah přípravné a prováděcí projektové dokumentace</li>
                                <li>Architektonické studie</li>
                                <li>Investiční záměry</li>
                                <li>Projektová dokumentace pro územní řízení</li>
                                <li>Projektová dokumentace pro stavební povolení</li>
                                <li>Projektová dokumentaci pro realizaci stavby</li>
                                <li>Dokumentace skutečného provedení</li>
                            </ul>
                        </div>
                    </Card>

                    <h1>
                    Naše <Link to="/inzenyrska-cinnost">Inženýrská činnost</Link> Vám provede komplexní projektovou přípravu projektů, včetně územního a stavebního řízení. Pokud máte jakékoli dotazy, ohledně Vaší spolupráce, či součinnosti s naší projekční kanceláří, neváhejte a <Link to="/kontakty">kontaktujte nás</Link>, rádi s Vámi vyspecifikujeme to nejlepší řešení.
                    </h1>

                </Container>

            </Container>

        </>
    )

}
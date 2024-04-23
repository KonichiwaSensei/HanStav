import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from 'react-router-dom';

import Spacer from '../Components/Spacer'
import PdfObject from '../Components/PdfObject'

export default function RodDom() {

    const pdfFileNameArray = [
        'RD_S01',
        'RD_S02',
        'RD_S03',
        'RD_S04',
        'RD_S05',
        'RD_S06',
        'RD_S07',
        'RD_S08',
        'RD_S09',
        'RD_S10',
        'RD_S11',
        'RD_S12',
    ]

    return (
        <>
            <Container className='page-container roddom'>

                <Spacer />

                <Container className='text-div text-center p-4 fs-5'>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Projekty rodinných domů - praktické a funkční</h1>
                        <br />
                        <p className='fs-5'>
                            <span className='fw-bold'>Hledáte kvalitní projekty rodinných domů za sympatické ceny? Spolehněte se na  </span><span className='fw-bold text-decoration-underline'>Hanspaulské stavitelství s.r.o.</span>
                            <br />
                            Projekty rodinných domů, které si můžete na našich stránkách stáhnout, Vám dokonale poslouží pro inspiraci, jak by měl Váš dům vypadat. Samozřejmě takové <Link to="/stavby">stavby</Link> Vám můžeme i nabídnout k prodeji, výstavbě a celé realizaci. Náš katalog projektů rodinných domů pro Vás sestavili špičkoví architekti s citem na Vaše požadavky a moderní pojetí domů s množstvím funkčních prvků pro Vaše pohodlí.
                            <br />
                            <span className='fs-4 fst-italic'>
                                <Link to="/kontakt">Kontaktujte nás</Link>
                                <span>, projekty rodinných domů se Vám budou líbit.</span>
                            </span>
                        </p>
                    </Card>

                    <Card className='hans-card-blue p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Levné a kvalitní projekty rodinných domů</h1>
                        <br />
                        <p className='fs-5'>
                            Projekty rodinných domů, které si můžete níže prohlédnout, můžete mít za velmi sympatické ceny.
                            <br />
                            Naše projektová kancelář díky letitým zkušenostem a velké odbornosti pro Vás připravila několik variant projektů rodinných domů, jež Vám dokonale demonstrují, že kvalitní práce může být i za nižší cenu, pokud se to umí.
                            <br />
                            <span className='fs-4 fst-italic'>Naše <Link to="/reference">reference</Link> jsou toho důkazem.</span>
                        </p>
                        <br />
                        <br />
                        <p className='fs-5'>
                            Projekty zde slouží pro Vaši inspiraci, pokud se chcete seznámit detailně s jednotlivými variantami, neváhejte a kontaktujte nás. Sjednáme si schůzku a Vámi vybrané projekty rodinných domů Vám osobně prezentujeme a získáte tak lepší představu.
                            <br />
                            <span className='fs-4 fst-italic'>Naše projekty rodinných domů Vás nadchnou nejen cenou, ale i kvalitou.</span>
                        </p>
                    </Card>

                    <Card className='hans-card-white p-4'>
                        <h1 className='fs-2 text-decoration-underline'>Projekty rodinných domů podle Vašich přání</h1>
                        <br />
                        <p className='fs-5'>
                            Chcete na nějakém Vámi zvoleném projektu rodinného domu něco pozměnit? Máte trošku jinou představu? Neváhejte se s námi poradit, na Vaše přání Vám naše projekty rodinných domů upravíme tak, aby naprosto odpovídaly Vašim požadavkům.
                            <br />
                            <span className='fs-4 fst-italic'>Jsme profesionálové a rádi pro Vás projekty rodinných domů upravíme.</span>
                            <br />

                            Naše <Link to="/projekcni-kancelar">projekční kancelář</Link> vždy pracuje podle Vašich představ, vždyť to budete Vy, kdo ve zvoleném projektu rodinného domu bude bydlet.
                        </p>
                    </Card>

                    <h1>
                        <Link to="/kontakt">
                            Kontaktujte nás
                        </Link>, sestavíme Vám projekt rodinného domu přesně podle Vašich představ.
                    </h1>

                    <Spacer />

                    {/* <Divider /> */}

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 576: 1, 768: 1, 992: 2, 1200: 3, 1400: 3 }}>

                        <Masonry>

                            {pdfFileNameArray.map((pdf, index) => (
                                <PdfObject
                                    pdf={pdf}
                                />
                            ))}

                        </Masonry>

                    </ResponsiveMasonry>

                </Container>




            </Container>

        </>
    )

}
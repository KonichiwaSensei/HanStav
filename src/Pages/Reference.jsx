import Container from "react-bootstrap/Container"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import Spacer from '../Components/Spacer'
import ReferenceCard from "../Components/ReferenceCard"

export default function Reference() {

    const referenceData = [
        {
            title: 'Dvojdomek v Podolí',
            text: 'Rekonstrukce a přístavba poloviny dvojdomku v Podolí. Dům byl prováděn ve vyšším standartu a je pefektně dospozičně vyřešen. Byla postavena nová přístavba ze systému porotherm s betonovými stropy, nová střecha na celém domě a celkové zateplení domu z sotačního programu "Zelená úsporám".',
            img: 'dvojdomek_v_podoli.jpg'
        },
        {
            title: 'Prvorepubliková vila v ulici Na Pískách - Hanspaulka',
            text: 'Jde o totální rekonstrukci prvorepublikové vily v ulici Na Pískách na Hanspaulce. Kvůli špatnému stavu domu před rekostrukcí nezůstal v domě kámen na kameni. Rekonstruoval se krov, střecha, stropy a suterén musel být odvlhčen. Nakonec byl dům kompletně zatplen z dotačního programu "Zelená úsporám". V budoucnu k vile ještě přibyde elegantní dvougaráž.',
            img: 'provepublikova_vila_na_piskach_hanspaulka.jpg'
        },
        {
            title: 'Dům s hospodou na Malešickém náměstí',
            text: 'Rekonstrukce domu s hospodou na Malešickém náměstí. Jednalo se o poměrně složitý projekt, kde se část domu s půdorysem tvaru L zdemolovala, poté se nově vystavila a část s restaurací se plně zrekonstruovala. Na celém domě byl pak proveden nový krov a nová střecha. Perličkou je, že po celou dobu rekonstrukce byla střední část dispozice podkroví obývána a nesměla se jí rekonstrukce jakkoliv dotknout. Nyní v domě bydlí rodina investora, která novou restauraci Malešický mikropivovar provozuje a nabízí výborné jídlo a mnoho skvělých piv. Přijďte ochutnat!',
            img: 'dum_s_hospodou_na_malesickem_namesti.jpg'
        },
        {
            title: 'Novostavba nízkoenergetického high-tech domu',
            text: 'Novostavba nízkoenergetického high-tech domu, který je nabitý perfektně fungujícími moderními technologiemi. Je postaven v sestému Porotherm, zateplen minerální vatou, střecha je z profilů Lindab.',
            img: 'novostavba_nizkoenergetickeho_higt_tech_domu.jpg'
        },
        {
            title: 'Dům Chodov',
            text: 'Jedná se novostavbu nízkoenergetického domu. Na jeho místě stála původně polovina dvojdomu, který jsme pro špatný technický stav zbourali. Nový nízkoenergetický dům je postaven železobetonové desce, zdivo je z tvárnic Porotherm Profi, lepených na tenkovrstvou maltu. Zdivo je pak zateplené 200 mm fasádního polystyrenu. Strop i střecha je železobetonová. Střecha je zateplena 40 - 80 cm polystyrenem a je na ní fóliová hydroizolace s násypem z praného kameniva.',
            img: 'chodov.jpg',
            textArray: [
                'Charakter stavby: Demolice + novostavba',
                'Nosné konstrukce: Porotherm Profi',
                'Zateplení: Styrotrade',
                'Střecha: Fóliová, plochá, Alkorplan',
                'Strop: Železobeton',
                'Příčky: Porotherm',
                'Vytápění: Elektrokotel, tepelné čerpadlo, solární ohřev vody'
            ]
        },
        {
            title: 'Nástavba Na Pískách - Hanspaulka',
            text: 'Jedná se o revitalizaci celého domu a vestavbu obytného podkroví. Celá stavba byla zásobována vnějškem přes lešení, protože se v domě po celou dobu stavby bydlelo.',
            img: 'dum_hanspaulka.jpg'
        },
        {
            title: 'Dům Praha 4 - Náměstí gen.Kutlvašra',
            text: 'Předmětem zakázky byla oprava a nátěr fasády celého domu, aby vypadal tak jako v době jeho výstavby. Byly měněny parapety a bylo repasováno původní ocelové zábradlí balkónů. Jedná se o sedmipatrový bytový dům z první republiky. Dům průběžně po bytech rekonstruujeme s ohledem na migraci nájemníků.',
            img: 'dum_nam_gen_kutlvasra.jpg'
        },
        {
            title: 'Stavební servis pro Ballymore Properties a.s.',
            text: 'Průběžné udržovací práce objektů Václavské Náměstí 15, Panská 8 a 10, Na Příkopě 19',
            img: 'no_foto.jpg'
        },
        {
            title: 'Dům Kačerov',
            text: 'Novostavba moderního domu byla provedena po demolici stávajícího dělnického domku, který stál na pozemku. Po značném objemu zemních prací byla započata hrubá monolitická železobetonová stavba suterénu, který byl navržen z vodostavebního betonu tak, aby nebylo nutné provádět hydroizolace.',
            img: 'dum_kacerov/dum_kacerov.jpg',
            img2: 'dum_kacerov/dum_kacerov2.jpg',
            text2: 'Během realizace bylo třeba staticky sousední dům, jemuž hrozilo vážné poškození. Vrchní stavba byla realizována ze systému Porotherm v kombinaci se železobetonovými stropy. Dům je zateplen minerální vatou a splňuje požadavky nízkoenergetického domu. Dům má podlahové vytápění v kombinaci s radiátory v podkroví a lité anhydridové podlahy. Realizace zimní zahrady na nepravidelném půdorysu byl opravdový oříšek, ale podařilo se jej zdárně vyřešit. K domu byly provedeny nové přípojky všech médií včetně napojení na kanalizační řad, který probíhá 7 metrů pod úrovní vozovky.',
            textArray: [
                'Charakter stavby: Novostavba',
                'Nosné konstrukce: Porotherm 44 P+D',
                'Zateplení: Minerální vata Knauf',
                'Střecha: Bramac',
                'Strop: Železobeton',
                'Příčky: Porotherm',
                'Vytápění: Plynový kondenzační',
            ]

        },
        {
            title: 'Dům Čakovice',
            text: 'Dům vystavený za první republiky by zásadně rekonstruován a byla realizována půdní vestavba. Dům měl velké problémy s vlhkostí v přízemí a především v suterénu.',
            img: 'dum_cakovice/dum_cakovice.jpg',
            img2: 'dum_cakovice/dum_cakovice2.jpg',
            img3: 'dum_cakovice/dum_cakovice3.jpg',
            text2: 'Byla provedena vlhkostní sanace s použití drenážního odvodnění a injektáže. Během realizace bylo zjištěno, že strop nad prvním podlažím vykazuje značné statické poruchy a že je napaden dřevokaznými houbami a hmyzem. Bylo provedeno ošetření domu a nový ocelobetonový spřažený strop, který celou budovu zpevnil. Dům byl zateplen s použitím dotací z programu Zelená úsporám. V domě byly nově provedeny veškeré instalace včetně klimatizace.',
            textArray: [
                'Charakter stavby: Rekonstrukce',
                'Nosné konstrukce: Stávají cihla pálená + Porotherm',
                'Zateplení: Mapei',
                'Střecha: Bramac clasic',
                'Strop: Ocelobeton',
                'Příčky: Sádrokarton, Ytong',
                'Vytápění: Elektrokotel, tepelné čerpadlo',
            ]
        },
        {
            title: 'Dům Horní Počernice',
            text: 'Jedná se o totální rekonstrukci vesnického domu s přístavbou a půdní vestavbou. K domu byla směrem do dvora provedena přístavba technického zázemí budovy. Dům byl původně ve dvacátých letech postaven zcela bez izolací, což se podepsalo na velmi vysokém stupni prosolení stávajícího zdiva.',
            img: 'dum_horni_pocernice/dum_horni_pocernice.jpg',
            img2: 'dum_horni_pocernice/dum_horni_pocernice2.jpg',
            img3: 'dum_horni_pocernice/dum_horni_pocernice3.jpg',
            text2: 'Dům bych kompletně podříznut, byly provedeny nové kvalitní izolace a nové podlahy. Stávajíc zdivo bylo staticky vyhovující, strop nad prvním podlažím musel být zesílen. Do krovu bylo provedeno několik zásahů kvůli realizaci půdní vestavby a vikýřů. Domu byly provedeny nové přípojky všech médií, včetně nového napojení na kanalizační řad. Domek byl kompletně zateplen s použitím dotací z programu Zelená úsporám. Zajímavostí je, že po celou dobu stavby byl dům obýván majiteli a bylo nutné udržet vždy alespoň 2 místnosti a jedno sociální zařízení obyvatelné. Připomínám, že se jedná o totální rekonstrukci.',
            textArray: [
                'Charakter stavby: Totální rekonstrukce, půdní vestavba, přístavba',
                'Nosné konstrukce: Stávající cihla plná, Porotherm 44 P+D',
                'Zateplení: Baumit',
                'Střecha: Bramac alpská taška',
                'Strop: Původní dřevěné s přidaným vyztužením',
                'Příčky: Sádrokarton',
                'Vytápění: Plynový kotel',
            ]
        },
        {
            title: 'Dům Vonoklasy',
            text: 'Novostavba High-tech domu byla prováděna dle projektu renomovaného architekta, který na celou stavbu pečlivě dohlížel. Jedná se velmi moderní dispoziční řešení, kdy jsou v přízemí 2 různé úrovně podlahy, které dělají interiér funkčně i vizuálně velmi zajímavý.',
            img: 'dum_vonoklasy/dum_vonoklasy.jpg',
            img2: 'dum_vonoklasy/dum_vonoklasy2.jpg',
            text2: 'Pro dokreslení moderního stylu byly provedeny zcela hladké sádrové omítky. Důje postaven ze systému Porotherm a je vytápěn tepelným čerpadlem voda – voda, napojeným do zemního vrtu. Zajímavostí je střecha, která nemá z desénového hlediska žádné přesahy. Dům byl nominován do soutěže dům roku.',
            textArray: [
                'Charakter stavby: Novostavba',
                'Nosné konstrukce: Porotherm 44 P+D',
                'Zateplení: Není',
                'Střecha: Cembrit',
                'Strop: Železobeton',
                'Příčky: Porotherm',
                'Vytápění: Tepelné čerpadlo + plyn',
            ]
        },
        {
            title: 'Dům Roztoky',
            text: 'Novostavba byla provedena jako stavba na klíč od projektu přes projednání až po realizaci. Jedná se o dvougenerační moderní dům, který plně zapadá do okolní zástavby. Jedná se o klasickou stavbu ze systému Porotherm s betonovými stropy.',
            img: 'roztoky.jpg',
            text2: 'U domu byl realizován zahradní bazén. Dům je díky technickému zaměření majitele vybaven plně automatizovanou elektronikou od zabezpečovacího systému přes elektrické ovládání oken až po automatické osvětlení bazénu.',
            textArray: [
                'Nosné konstrukce: Porotherm 44 P+D',
                'Zateplení: Knauf',
                'Střecha: Bramac',
                'Strop: Železobeton',
                'Příčky: Ytong, sádrokarton',
                'Vytápění: Plynový kote',
            ]
        },
        {
            title: 'Fruitisimo Myslbek',
            text: 'Stavba obchodní jednotky v Paláci Myslbek v ulici Na Příkopě bylo provedena jako komplexní dodávka včetně všech profesí za přísné kontroly představitelů obchodního centra.',
            img: 'myslbek/myslbek.jpg',
            img2: 'myslbek/myslbek2.jpg',
            text2: 'Požadavek investora na velký elektrický příkon musel být splněn výměnou hlavního silnoproudého rozvaděče. Nové vzduchotechnické jednotky byly napojeny na rozvod budovy. Bylo zasahováno do systému sprinterů, požárních čidel i požárního rozhlasu. Zajímavostí je, že veškeré práce mohly být provádění pouze v noci od 22.00 do 7.00, kdy je pasáž pro zákazníky uzavřena.',
            textArray: [
                'Charakter stavby: Novostavba - vestavba',
                'Nosné konstrukce: ŽB',
                'Strop: Sádrokarton',
                'Příčky: Sádrokarton',
                'Vytápění: Tepelné čerpadlo VZT',
            ]
        },
        {
            title: 'Dům Horoměřice',
            text: 'Novostavba nízkoenergetického domu na půdorysu 64 m2. Dům je postaven ze systému Porotherm, má železobetonové stropy, je zateplen zateplovacím systémem Baumit, má plastová šestikomorová okna a úsporné podlahové vytápění.',
            img: 'horomerice/horomerice.jpg',
            img2: 'horomerice/horomerice2.jpg',
            img3: 'horomerice/horomerice3.jpg',
            img4: 'horomerice/horomerice4.jpg',
            img5: 'horomerice/horomerice5.jpg',
            img6: 'horomerice/horomerice6.jpg',
            img7: 'horomerice/horomerice7.jpg',
            img8: 'horomerice/horomerice8.jpg',
            img9: 'horomerice/horomerice9.jpg',
            img10: 'horomerice/horomerice10.jpg',
            img11: 'horomerice/horomerice11.jpg',
            img12: 'horomerice/horomerice12.jpg',
            img13: 'horomerice/horomerice13.jpg',
            img14: 'horomerice/horomerice14.jpg',
            text2: 'Jediné médium, které je do domu přivedeno je elektřina, voda je čerpána z vlastního 33 metrů hlubokého vrtu. Dům respektuje požadavky investora na moderní provedení a zároveň splňuje požadavky obce na sedlovou střechu. Interiér je laděn funkcionalisticky s důrazem na použití skla a kovů. Realizace proběhla jako stavba na klíč včetně projektu, projednání i vlastní stavby.',
            textArray: [
                'Charakter stavby: Novostavba',
                'Nosné konstrukce: Porotherm 36,5 P+D',
                'Zateplení: STO',
                'Střecha: Lindab',
                'Strop: Železobeton',
                'Příčky: 11,5 P+D',
                'Vytápění: Elektrokotel',
            ]

        },
        {
            title: 'Dům Hostivice',
            text: 'Novostavba většího rodinného domu byla provedena na přání investora ze systému KM Beta a řádně zateplena. Dům má podlahové vytápění v kombinaci s kondenzačním kotlem, což mu poskytuje výbornou tepelnou pohodu.',
            img: 'hostivice.jpg',
            textArray: [
                'Charakter stavby: Novostavba',
                'Nosné konstrukce: KM Beta 30',
                'Zateplení: Knauf - fasádní polystyren',
                'Střecha: Tondach',
                'Strop: KM Beta',
                'Příčky: Ytong',
                'Vytápění: Plynový kondenzační kotel',
            ]
        },
        {
            title: 'Dům Loděnice',
            text: 'Novostavba bungalovu byla provedena jako stavbu na klíč za plné důvěry investora, kdy nám předal pozemek a převzal si až hotový dům. Jedná se o jednoduchou nízkonákladovou stavbu ze systému Porotherm, která je zastřešena sbíjenými dřevěným vazníky, tudíž odpadla podstatná finanční položka za strop.',
            img: 'lodenice/lodenice.jpg',
            img2: 'lodenice/lodenice2.jpg',
            text2: 'Dům je zateplen kontaktním zateplovacím systémem a krov minerální vatou. Zajímavostí je, že veškeré přípojky k domu byly realizovány v délce 70m.',
            textArray: [
                'Charakter stavby: Novostavba',
                'Nosné konstrukce: Porotherm 44 P+D',
                'Zateplení: Knauf - fasádní polystyren',
                'Střecha: Lindab',
                'Strop: Sádrokartonový podhled',
                'Příčky: Porotherm',
                'Vytápění: Plynový kondenzační kotel, krb',
            ]
        },
        {
            title: 'Sanace bytového domu',
            text: 'Bytový dům vykazoval značné vlhkostní poruchy v suterénu. Vlhkost se šířila do společných prostor domu a obtěžovala obyvatelé. Byla provedena vlhkostní sanace, která spočívala v provedení drenáží kolem budovy a vytvoření zpevněných vyspárovaných ploch na pozemcích kolem domu ze zámkové dlažby. V nejbližší době se plánuje komplexní zateplení domu s použitím dotací z programu Zelená úsporám.',
            img: 'sanace/sanace_bytoveho_domu.jpg',
            img2: 'sanace/sanace_bytoveho_domu2.jpg',
            img3: 'sanace/sanace_bytoveho_domu3.jpg',
            img4: 'sanace/sanace_bytoveho_domu4.jpg',
        },
        {
            title: 'Dům Praha 6 - Baba',
            text: 'Jedná se přístavbu původního řadového domu a rekonstrukci stávající části. Úkolem bylo, provést přístavbu a totálně zrekonstruovat stávající dům tak, aby po celou dobu výstavby mohla 1 rodina dům obývat. Stávající dům byl postaven kvalitně, měnily se pouze povrchy konstrukcí, rekonstruovala se plochá střecha a celek se potom zateploval. Přístavby domu je postavena železobetonové desce, zdivo je z tvárnic Porotherm P+D. Celý dům byl pak zateplen 120 mm fasádního polytyrenu. Strop i střecha je železobetonová. Střecha je plochá, dobře zateplena a spád je proveden pomocí polystyrenových spádových klínů.',
            img: 'praha_6__baba.jpg',
            textArray: [
                'Charakter stavby: Přístavba',
                'Nosné konstrukce: Porotherm P+D',
                'Zateplení: Styrotrade',
                'Střecha: Fóliová, plochá, Alkorplan',
                'Strop: Železobeton',
                'Příčky: Porotherm',
                'Vytápění: Plynový kondenzační kotel',
            ]
        },
        {
            title: 'Přestavba Tobrucká',
            text: 'Předmětem zakázky byla přestavba bývalé sídlištní kotelny na firemní sídlo. Objekt byl důkladně zrekonstruován pro potřeby firemního zákazníka. Do bývalé kotelny byl vložen nový betonový monolitický strop, což zdvojnásobilo podlahovou plochu. Během rekonstrukce jsme čelili nástrahám socialistického stavebnictví, kdy bylo nutné změnit standart průmyslové kotelny 70.let na dnešní standart moderního domu. Veškeré původní nosné konstrukce musely být upravovány tak, aby je šlo vyrovnat. Objekt byl odvlhčen, zateplen a byla provedena nová střecha. Veškeré instalace byly provedeny nově.',
            img: 'tobrucka/tobrucka1.jpg',
            img2: 'tobrucka/tobrucka2.jpg',
            img3: 'tobrucka/tobrucka3.jpg',
            img4: 'tobrucka/tobrucka4.jpg'
        },
        {
            title: 'Dům Horoměřice',
            text: 'Úkol jsem dostali zcela jasný. Za co nejméně peněz postavit dům o zastavěné ploše 64 m2 se sedlovou střechou a výškou hřebene 6,5m. Vše je provedeno v základním standartu, není zde nic navíc, co by zvedalo cenu. Dům je postaven na základové desce, zdi jsou z porobetonu s vnějším zateplením, strop je betonový, jednoduchý dřevěný krov a plechová střešní krytina. Betonový strop je snad jedné místo, kde by šlo ještě ušetřit tak, že by se udělal dřevěný. Není to sece žádná nádhera, ale stálo to málo, jak si zákazník přál.',
            img: 'horomerice2/horomerice2.jpg',
            img2: 'horomerice2/horomerice1.jpg'
        },
        {
            title: 'Rekonstrukce a Novostavba',
            text: 'Jedná se o 2 domy. Jeden byl původní řadový koncový z 80.let, druhý je novostavba. Předmětem zakázky bylo rekonstruovat vyžilý dům z osmdesátých let vedle něj postavit zcela nový dům dle dnešních nejvyšších standartů. Původní dům byla totální rekonstrukce, zbyly jen obdovové stěny a stropy. Vše ostatní bylo provedeno nově, byla odstraněna obvodová nosná zeď do zahrady tak, aby mohl vzniknout moderní prosklený portál, který spojuje obytný prostor se zahradou. Veškeré instalace a přípojky jsou samozřejmě nové. V případě novostavby je se jedná o nízkoenergetický dům vytápěný tepeným čerpadlem. Je postaven z moderních keramických bloků a má betonové stropy a důkladné zateplení. Zde nebylo třeba dělat kompromisy, jako u rekonstrukcí. Nový dům zapadl do stávající zástavby a kdo to neví, tak nepozná, že tu dříve nebyl.',
            img: 'potesil/potesil1.jpg',
            img2: 'potesil/potesil2.jpg'
        },
        {
            title: 'Rekonstrukce Domu Baba',
            text: 'Předmětem zakázky byla rekonstrukce vybydleného domu na Babě tak, aby se vytvořilo moderní zdravé bydlení pro mladou rodinu. Byly postaveny nové příčky, aby dispozice vyhovovala dnešním nárokům. Interér byl proveden zcela nově, byla vyměněna okna dům byl zateplen. Veškeré instalace jsou nové, revitalizací prošla i zahrada.',
            img: 'matejska_ryba.jpg'
        },
        {
            title: 'Rekonstrukce Řadového Domu Baba',
            text: 'Totální rekonstrukce řadového domu z 80. let na Babě. U domu byla nutná celková rekonstrukce z důvodu dnešních nároků na kvalitní bydlení a nevyhovujícímu tepelně technickému stavu. Z domu zbyly pouze obvodové zdi a stropy, všechno ostatní bylo provedeno zcela nové v dnešním vysokém standartu. Dům byl kompletně zateplen, byla provedena nová střecha. Veškeré instalace včetně přípojek byly provedeny nově.',
            img: 'moudry/moudry1.jpg',
            img2: 'moudry/mourdy2.jpg'
        },
        {
            title: 'Rekonstrukce Domu Šárecká',
            text: 'Rekonstrukce domu Šárecká. Dům prošel kompletní rekonstrukcí exteriéru i interiéru. Z minulé rekonstrukce z 90. let toho moc nezbylo. Veškeré povrchy byly provedeny nově a dům byl zateplen. Byly provedeny veškeré nové rozvody a dům byl odvlhčen. Revitalizací prošla i zahrada a opravena byla také samostatně stojící garáž.',
            img: 'sarecka.jpg'
        },
        {
            title: 'Prvorepubliková Vila Na Hanspaulce',
            text: 'Rekonstrukce prorepublikové vily Na Hanspaulce byla velká výzva, protože jej všichni místní znají. Jedná se o totální rekonstrukci vily včetně záchrany prvolepublikových prvků, které několika rekonstrukcemi za minulého režimu utrpěli značná poškození. Dům se rekonstruoval ve vysokém standartu pro potřeby ambasády. Na domu jsme postavili nový ocelodřevěný krov, byla provedana samozřejmě nová střecha, interiér byl kompletně proveden nově. K domu byla přistavena garáž a výtah. Celý dům je zateplen dle dnešních nejvyšších standartů pro rekonstrukce. Veškeré instalace jsou pochopitelně nové a dům je nabitý sofistikovanými technologiemi.',
            img: 'prvorepublikova_vila_na_hanspaulce/prvorepublikova_vila_na_hanspaulce1.jpg',
            img2: 'prvorepublikova_vila_na_hanspaulce/prvorepublikova_vila_na_hanspaulce2.jpg',
            img3: 'prvorepublikova_vila_na_hanspaulce/prvorepublikova_vila_na_hanspaulce3.jpg',
            img4: 'prvorepublikova_vila_na_hanspaulce/prvorepublikova_vila_na_hanspaulce4.jpg',
        },
        {
            title: 'Rekonstrukce Poloviny Dvojdomu',
            text: 'Velká rekonstrukce poloviny dvojdomu Na Hanspaulce. Dům byl původně sice vyjímečně kvalitně postaven, ale byl celkově vyžilý. Interiér byl důkladně zmodernizován za použití kvalitních materiálů, dům dostal nová okna, střešní krytinu, fasáda byla opravena, byl postaven nový plot a zbudován venkovní bazén. Veškeré instalace byly také provedeny nové. Při rekonstrukci bylo třeba dbát zvláštní opatrnosti s důvodu těsného sousedství základní školy.',
            img: 'klapa/klapa1.jpg',
            img2: 'klapa/klapa2.jpeg',
            img3: 'klapa/klapa3.jpg',
        },
        {
            title: 'Rekonstrukce Bytoveho Domu',
            text: 'Revitalizace bytového domu se střešní nástavbou. Předmětem bylo kompletní zatepní domu z dotačního programu Zelená úsporám. Naše firma provedla rekonstrukci na klíč včetně projektu. U domu bylo provedeno zesílení poddimenzovaného krovu nástavby z 80.let. Střecha byla pak kompletně nově provedena včetně zateplení dle dnešního standartu. Po celou dobu rekonstrukce se v nástavbě bydlelo, což byl velmi náročné na koordinaci prací a zabezpečení stavby proti povětrnostním vlivům. Fasáda byla opatřena kontaktním zateplovacím systémem. Dům byl kompletně odvlhčen. Do nástavby se složitým způsobem instalovalo nové ocelové zábradlí balkónů. Námi provedená rekonstrukce je inspirací pro ostatní bytové domy v širším okolí, kdy jich většina v původních stavech z 60.,70 a 80. let potřebuje rekonstrovat také.',
            img: 'moby/moby1.jpg',
            img2: 'moby/moby2.jpg',
            img3: 'moby/moby3.jpg',
        },
        {
            title: 'Novostavba Satalice',
            text: 'Novostavba moderní nízkoenergetické dřevostavby. Původní vlhký řadový dům byl zbourán a místo něho vznikla tato nová pasivní budova. Z původního domu zbyl pouze malý sklep, který je od nového domu důkladně stavebně oddělen. Dům byl s láskou majitelů postaven tak, aby byl co nejvíce ohleduplný k životnímu prostředí. Byly použity hlavně ekologické materiály, v domě jsou použity příčky s nepálených cihel, hliněné omítky a dřevěné podlahy. Střecha je z pálených tašek. Dům má rekuperační větrání a hlavní zdrojem energie pro jeho provoz bude slunce.',
            img: 'satalice.jpg',
        },
        {
            title: 'Rekonstrukce Domu Za Vodárnou',
            text: 'Rekonstrukce domu Za Vodárnou. Předmětem zakázky byla zásadní rekonstrukce řadového domu. Dům byl za asistence známého architekce kompletně přebudován, vznikla nová střešní vestavba a zcela nový design. Byla provedena akustická izolace od sousedních domů. Dům je vyladěn do posledního detailu a celý je ovládám systémem inteligentního domácnosti. Veškeré instalace jsou nové, dům byl zateplen z dotačního programu.  ',
            img: 'za_vodarnou/za_vodarnou1.jpeg',
            img2: 'za_vodarnou/za_vodarnou2.jpg',
        },
        {
            title: 'Rekonstrukce Domu Na Pískách',
            text: 'Rekonstrukce domu Na Pískách. Původní dům z první republiky byl téměř v původním stavu a potřeboval zásadní rekonstruci. K našemu překvapení neobsahoval vůbec žádnou tepelnou izolaci střechy. Interiér domu prošel velkou rekonstrukcí. Původní trámové stropy byly zachovány, avšak schodiště již zachránit nešlo. Skladby konstrukcí jsou zcela nové. Násypy podlah byly odtěženy a nahrazeny modernímy materiály tak, aby vzniklo zdravé bydlení. Veškeré instalce byly provedeny nové, dům je vytápěn tepelným čerpadlem, zahradní fasáda byla opatřena zateplovací systémem.',
            img: 'na_piskach/na_piskach1.jpg',
            img2: 'na_piskach/na_piskach2.jpg'
        },
        {
            title: 'Stavební Dozor Panelového Domu Tobrucká',
            text: 'Stavební dozor panelového domu Tobrucká. Byla provedena kompletní revitalizace panelového domu z 80. let. Kompletní zateplení z dotačního programu, nová střecha, nové lodžie.',
            img: 'tobrucka_stavebni_dozor/tobrucka_stavebni_dozor1.jpg',
            img2: 'tobrucka_stavebni_dozor/tobrucka_stavebni_dozor2.jpg',
            img3: 'tobrucka_stavebni_dozor/tobrucka_stavebni_dozor3.jpg',
        },
        {
            title: 'Novostavba Přední Kopanina',
            text: 'Novostavba domu Přední Kopanina. Původní dům, který v místě novostavby stál, jevil statické poruchy a proto byl zbourán. Na jeho místě jsme postavili nový moderní dům dle přísných regulí OPP. Dům je založen ve složitějších geologických poměrech, stojí na betonové desce. Je psotaven z pórobetonu, má betonový monolitický strop. Při stavbě bylo nutné staticky zajistit sousední dům, který sousedí s novostavbou štítem.',
            img: 'kopanina/kopanina1.jpg',
            img2: 'kopanina/kopanina2.jpg',
            img3: 'kopanina/kopanina3.jpg',
        },
        {
            title: 'Zateplení Bytového Domu Kamýcká',
            text: 'Zateplení bytového domu Kamýcká. Kompletní zateplovací systém fasády bytového domu, kdy byla využita dotace z Programu Zelená úsporám. Dům měl původní zanedbanou fasádu, jejím zateplením se výrazně zlepšil nejen vzhled domu, ale i komfort bydlení s podstatnou úsporou za vytápění.',
            img: 'kamycka/kamycka1.jpg',
            img2: 'kamycka/kamycka2.jpg',
        },
        // {
        //     title: '',
        //     text: '',
        //     img: '',
        // },
    ];

    return (
        <>
            <Container className='reference-container d-flex flex-column'>

                <Spacer />

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 3, 1200: 3, 1400: 4 }}
                >

                    <Masonry>

                        {[...referenceData].reverse().map((reference, index) => (
                            <ReferenceCard
                                key={index}
                                title={reference.title}
                                text={reference.text}

                                text2={reference.text2}
                                textArray={reference.textArray}

                                img={reference.img}
                                img2={reference.img2}
                                img3={reference.img3}
                                img4={reference.img4}
                                img5={reference.img5}
                                img6={reference.img6}
                                img7={reference.img7}
                                img8={reference.img8}
                                img9={reference.img9}
                                img10={reference.img10}
                                img11={reference.img11}
                                img12={reference.img12}
                                img13={reference.img13}
                                img14={reference.img14}
                            />
                        ))}

                    </Masonry>

                </ResponsiveMasonry>

                <Spacer />

            </Container>

        </>
    )
}
Eigenlijk had ArcOS nooit een visie. Ik begon ArcOS vrij impulsief. Op 4 november 2020 kwam ik een foutpagina tegen op school, met een menubalk bovenaan de pagina die mij deed denken aan MacOS. Ik kreeg gelijk het idee om die pagina te hergebruiken om een gebruikersinterface te creëren voor mijn gezin om hun materieel op mijn server te kunnen bereiken. Als je de echte reden achter ArcOS wilt weten, daar heb je 'm.

Toen ik begon heette ArcOS niet ArcOS. Ik noemde het WebOS, wat opzich best logisch klinkt, het is natuurlijk een besturingssysteem (of operating system) op het web, waarom zou je het een andere naam geen? De eerste versie, die ik v1 zal noemen vanaf nu, was enkel een paar HTML-pagina’s aan elkaar geknoopt met linkjes. Er waren geen verplaatsbare vensters, geen opstartscherm, inlogscherm of überhaupt een echte app. Als ik eerlijk ben was v1 afgekapt lang voordat het de mogelijkheid had om te groeien tot iets wat lijkt op een besturingssysteem.

De ontwikkeling van v1 is gestopt mede omdat ik lang niet genoeg ervaring had om een project, zo geavanceerd als wat ik in gedachte had, te maken; mijn JS-vaardigheden bestonden nagenoeg niet in deze tijd. Ik had er natuurlijk mee geëxperimenteerd in het verleden, maar niks zo significant als dit.

## WebOSv2 -- Apache

Een maand later, op 13 december 2020, begon ik te werken aan WebOSv2. Mijn motivatie voor v2 was een w3schools artikel die ik had gevonden, een artikel die mij de middelen gaf om een draagbaar venster te maken. v2 was een van de eerste web ontwikkelen projecten die ik helemaal zelf had gemaakt. Voorheen kopieerde ik bestaande sites (nee echt, ik _kopieerde_ ze met Ctrl+S in Google Chrome), ik paste ze aan, en dat was alles. Ik had simpelweg de benodigde kennis niet om zelf een volwaardige, goed uitziende website te maken, dus kopieerde ik dingen van ZorinOS.com, Speedtest.net, Microsoft Login en anderen.

WebOSv2 had een opstartscherm, inlogscherm en een volwaardig bureaublad. De taakbalk, start menu en venster ontwerpen waren gebaseerd op Windows XP. Ik zeg het heel vaak, maar ik ben groot fan van XP. Toen ik aan v2 werkte had ik zelfs een bestandsbeheerder door een Apache findx template hevig aan te passen zodat het leek op de verkenner van Windows XP.

Na aan v2 te hebben gewerkt voor ongeveer een maand, stopte ik. Ik had alle inspiratie voor het project verloren, dus begon ik te werken aan andere projecten. Mijn doel voor 2021 was om C# te leren, dus dat is wat ik deed. C# greep de voorgrond en geen andere projecten of talen kwamen dichtbij. Ik heb een hele hoop geweldige projecten geschreven in deze periode, maar niks kwam dicht bij een besturingssysteem-achtige ervaring.

## WebOSv3 -- Electron

Aan het einde van februari 2021 kwam ik Electron tegen; een project waarmee je bureaublad applicaties kan schrijven voor verschillende platformen, allemaal met web technologieën. Ik had er een aantal video’s over gekeken en besloot het een kans te geven. Dit is ook de eerste keer dat ik echt Node.js aangeraakt heb. Ik waagde een poging om mijn eigen Electron titelbalk te maken en wat CSS. Plotseling wou ik een installatie programma maken. Voor wat? Niks. Ik vond het idee van een installatiewizard in Electron gewoon leuk.

Dankzij mijn vorige project werkte ik voor de installatiewizard in een map genaamd `TitlebarHandMadeTest`. Nadat ik de eerste pagina van deze wizard had gemaakt, realiseerde ik mij dat deze pagina een hoop begon te lijken op het inlogscherm van een besturingssysteem. Durf je te wedden waar dit heen ging? Natuurlijk, WebOSv3. Ik kijk vandaag de dag nog steeds terug naar dit project met een glimlach op mijn gezicht. Het begon heel simpel, wederom met een opstartscherm. Dit is echter waar de gelijkenis ophield, omdat ik een Multi user systeem wou maken, wat inhield dat WebOS persoonlijke instellingen op kon slaan voor meerdere gebruikers. Dit systeem is de eerste vorm van gebruikers in de geschiedenis van het project. Deze aanpak gebruikte `localStorage` voor de opslag, een methode die in gebruik bleef net voor de uitbrenging van ArcOS 5.0.0.

v3 had een stuk meer applicaties en was de eerste versie van het besturingssysteem die gefocust was op de persoonlijke instellingen van de gebruiker. Dit is nog steeds te zien als je v3 download en installeert, maar in het kort was mijn idee om de gebruiker de mogelijkheid te geven om hun specifieke account te personaliseren zoals hun dat wouden. Gebruikers konden het thema veranderen, de plaatsing van de taakbalk, enzovoort. Ik had zelfs een bestandsbeheerder toegevoegd, die jou de mogelijkheid gaf om de daadwerkelijke bestanden van jouw apparaat weer te geven. Dit was mogelijk omdat ik in Electron de optie `nodeIntegeration` **aan** had gezet, waardoor je in grove termen kon doen wat je wilde.

Tot op dit punt heette ArcOS nog steeds WebOS. Echter begon de transitie naar een nieuwe naam om de hoek te spieken. Het probleem werd op tafel gelegd dat de WebOS naam ook wordt gebruikt in andere projecten in de industrie en dat ik de naam moest veranderen om de originaliteit van het project waar ik naar streef, vast te houden. Dus, ik keek naar de technologieën waarvan ik gebruik maakte:

> Electron -> Electricity -> Electricity arks -> Arc -> ArcOS

## WebOSv4 -- Een nieuwe naam: ArcOS

De naam van ArcOS komt van Electron, wat natuurlijk de basis was voor WebOSv3 en v4. Ik begon te werken aan v4 op 6 juli 2021, een paar maanden na v3. Deze nieuwe versie herschreef eigenlijk helemaal niks; het was enkele een visuele opfrissing van het project. We waren gegaan van een grijze, utilitaire gebruikerservaring naar een moderne gebruikersinterface met oppervlaktes gelijkgesteld aan glas.

Een originele naam vinden was niet makkelijk. Sterker nog, de ArcOS naam is te vinden in allerlei sectoren verspreid over heel het internet, dus uiteindelijk is het niet eens origineler dan WebOS, maar ik ben sinds gehecht geraakt aan de naam en de vele pogingen om hem te vervangen met iets originelers zijn allemaal mislukt.

Op 6 maart 2022 stopte de ontwikkeling van ArcOS v4. Ik was vele opschoningen en herschrijvingen ondergaan, echter was de basis architectuur gewoon niet geschikt en het was geen pretje om aan te werken. De laatste versie van v4 was revisie 19 (r19) en was uitgebracht op 19 december 2021.

## ArcOS v5 -- Svelte!

Na het project achterwegen te hebben gelaten voor een aantal maanden, voelde ik de drang om het nog een kans te geven. Ik was Svelte aan het leren; een lichtgewicht Javascript framework die web-ontwikkeling zo simpel maakt dat het bijna erg is. Wetende hoe ver mijn kennis van Svelte 3 was ontwikkeld, besloot ik het maken van een besturingssysteem een kans te geven. Op 6 juli 2022, precies een jaar na v4, begon ik te werken aan v5. Ik was weg gereisd van de wereld van Electron en node integratie, waardoor ik een andere manier van gebruiker- en bestandsopslag moest verzinnen. Hiervoor ontwikkelde ik ArcAPI: de achtergrond van ArcOS, die tot op de dag van vandaag alle data van ArcOS opslaat.

v5 was heel lang in ontwikkeling. Het begon als een simpele test in Juli, maar groeide snel tot een gigantisch iets doordat mensen bij het project kwamen om te helpen. In juni 2023 begon ik leden binnen te halen voor de Community, waarna ik zelfs een team had samengesteld van ontwikkelaars waarmee ik samenwerkte om ArcOS uit te breiden tot een professionele omgeving.

ArcOS v5 is ook de eerste versie om uitgebreide ontwerpen te ontvangen voor de gebruikersinterface. Ik had tot op dit punt altijd maar iets gedaan voor de ontwerpen, tot op v5. Ongeveer 30% van de gebruikersinterfaces in ArcOS v5 waren voorafgaand ontwikkeld in Figma (Figma is geweldig).

Om fouten sneller op te lossen had ik in v5 ook het bugrep systeem opgeleverd; als ArcOS crashte (wat kon en nog steeds kan), werd er een foutrapportage samengesteld met allerlei informatie en opgestuurd naar de BugRep server, een Pocketbase instantie specifiek ingericht voor foutrapportages. Aan de andere kant van deze ketting hadden we een administratieve webpagina waarop teamleden fouten konden inzien, analyseren en oplossen.

Ten slotte had v5 ook een hele hoop ArcTerm functionaliteit, zoals aangepaste scripts, prompts en goose bumps. Deze dingen waren eigenlijk enkel gimmicks; dingen die ik toevoegde aan v5 om er simpelweg mee te experimenteren.

## ArcOS v6 -- Processen

Na aan v5 te hebben gewerkt voor meer dan een jaar begon ik te merken dat het intern best een zootje was geworden. Ik had nooit echt een deel van de code herschreven of opgeschoond, waardoor er een hele hoop oude code rondzwierf die in veel gevallen niet eens meer gebruikt werd. Dit feit was echter niet de hoofdreden waarom ik besloot v5 te stoppen. De echte reden waren processen; de apps van ArcOS konden tot op heden maar een keer tegelijk geopend worden (behalve meldingen, die konden meerdere keren 'gecloned' worden in v3 en nieuwer). Dit betekende dat je geen twee tekstbestanden tegelijkertijd kon bewerken. Je zou eerste jouw werk in het eerste bestand moeten afronden, het bestand moeten sluiten om vervolgens het tweede bestand te openen.

ArcOS v6 had een opgefrist ontwerp en was gefocust op professionalisme vanaf het begin. Ik had enkel één doel: ik wou een besturingssysteem maken die het heel lang vol zou houden en wat echt hetzelfde voelde als een echt besturingssysteem om de illusie te creëren dat het niet gewoon een website was. Dit doel behaalde ik door compacte, evenredige ruimte aan te houden tussen componenten, en om logische details aan de houden zoals lettergroottes en randen.

Met v6 kwam ook het tijdperk van bruikbaarheid. Ik deed mijn best om ArcOS zo soepel als mogelijk te maken in alle browsers. Ik schreef ook een helpcentrum waarin je artikelen kon vinden over hoe je dingen kon doen in alle applicaties. Ik wou ArcOS zo gebruiksvriendelijk als mogelijk maken zodat werkelijk waar iedereen er gebruik van kon maken.

Al en al is ArcOS v6 de meest gepolijste ervaring ten opzichte van zijn voorgangers. Het is de eerste versie van ArcOS die ik als professioneel en respectvol zie, zelfs als het ver van perfect was. De bugs en imperfecties van v6 kwamen allemaal door mij; ik verloor motivatie na miunder dan een jaar gewerkt te hebben aan v6. Ik stopte het ArcOS project vroegtijdig op 27 juni 2024. Ik wou het in de lucht houden als een soort achtergrond project, maar de motivatie was compleet verdwenen. ArcOS v6 draaide het kortst van alle versies na v2. De ontwikkeling duurde maar 7 maanden.

Dus dat is het einde, toch? ArcOS, vroegtijdig afgekapt, zelfs voor het project 4 jaar oud kon worden. Dat was mijn idee. Kap ArcOS af zodat ik kon focusen op andere projecten, zoals Sacruda en Inepta. Ik wou de traditie loslaten waarin ik eindeloos bleef bouwen op hetzelfde basisprincipe; het maken van een WebOS, beter dan de vorige revisies. Wegwou de doorgaandse ketting breken door de dode ruimte in mijn hoofd, ontstaan door te weinig motivatie voor ArcOS, weg te halen. De enige manier om dat voor elkaar te krijgen was om ArcOS permanent stop te zetten.

### Dus is dat het einde?

Nouja... Nee. Ondanks mijn originele resolutie om ArcOS te stoppen zonder enige mogelijkheid tot terugkeer, maar het bleek onmogelijk om mijzelf los te trekken van mijn levenswerk. In een post schreef ik: "Ik ben zeker niet de eerste die jou vertelt dat het afkappen van jouw levenswerk, een project waarin jij jaren aan werk hebt gegoten, niet mogelijk is. Je kan een project als die niet zomaar laten verdwijnen in een eindeloze leegte." Wijze woorden.

Dus, op 1 januari 2025 was ik bij een vriend van mij om nieuwjaar te vieren van 1 uur 's nachts tot 7 uur 's ochtends en begon ik te werken aan de WaveKernel; de handgemaakte Typescript kernel waarop ArcOS v7 is gebouwd. Waarom heet het WaveKernel? Omdat ik ArcOS WaveOS of DeskWave, maar NIET ArcOS. Ik wou die naam laten verdwijnen. Maar, dit was een heel onzeker proces, het constant schakelen tussen namen. Ik maakte commits als "Oké, het heet nu ArcOS", "Ik kan geen naam bepalen en het is pijnlijk" en "Terug naar ArcOS". Ik schakelde een aantal keer, uiteindelijk terugkomend op de naam die ik in 2021 heb geformuleerd. Het is op een manier best irritant dat ik mijn 14-jarige zelf niet kan verslaan, ach ja.

## ArcOS v7 -- Het tijdperk van ReArc

v7 heet intern ReArc omdat ik toen ik begon niet zeker wist wat de daadwerkelijke naam van het project ging worden. De achtergrond is consequent `ReArc-Backend-v1` genoemd op GitHub om dezelfde reden. Het is ook waarom de kernel de WaveKernel heet, en niet `ArcKernel`, `ReArcernel` of dergelijke namen. ArcOS v7 brengt niks over van vorige versies. Het is compleet en uiterst incompatibel met ArcOS v6 en ouder, het heeft geen overeenkomsten in de infrastructuur, backend, voorgrond, niks. Zoals ik zei in mijn post: "Op 1 januari 2025 besloot ik verder te gaan met het ArcOS project solo na mijn team een aantal maanden eerder achterwegen te hebben gelaten. Ik plan om ArcOS v7 uit te brengen in 2025: een compleet heruitgevonden versie van het besturingssysteem met nul overeenkomsten met de voorafgaande projecten."

Deze nieuwe (en hopelijk laatste) codebase heeft een hele hoop functionaliteit waar ik voorheen niet eens over na kon denken. Ik wou altijd al applicaties van derden toevoegen, dus dat heb ik gedaan in v7. Ik wou twee-factor-authenticatie, dus dat heb ik ook gemaakt. Ik wou een aparte interface voor administratoren binnen ArcOS om de server effectief te beheren en onderhouden, met machtigingen en al, dus dat heb ik ook gedaan. Ik wou een veel te complexe basis-laag, zo complex dat niemand hem durft te veranderen, dus dat heb ik nu ook. Ik wou een app store zodat mensen apps konden schrijven en distribueren naar andere gebruikers, dus dat is er nu ook.

ArcOS v7 is gigantisch en groeit elke dag. Op dit moment zitten we op de frontend op 1678 commits op de main branche en 63 branches in totaal. Op de backend zitten we op 378 commits. De frontend heeft 93936 regels code en de backend 15755, waardoor we ver over de honderdduizend regels code zitten voor het totaalplaatje. Dat is een getal waar ik een aantal jaar geleden niet eens over kon dromen, ik was verbaasd toen WebOSv3 3000 regels code aanraakte. TOTAAL.

Waarom heb ik eigenlijk zoveel branches? Dat komt omdat ik wederom een team samem heb gesteld. Ik realiseerde mij dat aan ArcOS werken een stuk makkelijker gaat als ik een aantal extra ontwikkelaars binnenhaal, vooral als het gaat om toekomstig onderhoud. We gebruiken een scrum-gebasseerd systeem om een oog te houden op onze taken. Wijzigingen worden naar branches gepusht die met pull requests worden gemerged met de main branche.

v7 is gefocust op modulariteit, onderhoudbaarheid, en uitbreidbaarheid. Dit wordt duidelijk als je kijkt naar de applicaties van derden, de configuratie bestanden op het bestandssysteem, en de verschillende basis lagen zoals services en kernel modules. Alles in ArcOS kan worden uitgewisseld met andere dingen en met een minimale correctie blijft ArcOS gewoon werken zoals het hoort.

Ik heb ook een hele hoop handelingen toegevoegd voor foutmeldingen, wat betekent dat ArcOS apps in principe nooit meer ArcOS zelf kunnen laten vastlopen, Ik heb dit gedaan door de ingebouwde apps uit te splitsen naar hun eigen JS-modules, zodat ik met wat berekeningen kon bepalen welke app de foutmelding veroorzaakt.

Ten slotte, het ontwerp. ArcOS v7 heeft een hele hoop ontwerpen. Ik gok op ongeveer de helft van ArcOS voorafgaand ontworpen is in Figma. Het aantal frames in ons Figma bestand staat momenteel op 463. Dat is ALLEEN v7. v5 en v6 hadden hun eigen figma bestand, maar v7 is uitgewerkt als een enorm 'mission critical' iets omdat ik probeer deze code te laten functioneren voor ten minste de aankomende paar jaar. Het zou mooi zijn als ik ArcOS v7 ooit zou kunnen compileren met TypeScript Native...

## Dus DAT is het.

Na 5 jaar aan geweldige voortgang, heel veel hoofdpijn en ontzettende verwarring: ArcOS. Een project waar ik duizenden uren in heb gegoten. Het is een echte reis. Na vijf jaar kan ik het niet echt meer een weekend project noemen, of wel?
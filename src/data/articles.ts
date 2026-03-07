export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  publishDate: string;
  readTime: number;
  content: string;
  relatedService?: string;
}

export const articles: Article[] = [
  {
    slug: "entretien-pelouse-rabat-guide-complet",
    title: "Entretien de pelouse a Rabat : le guide complet",
    excerpt:
      "Decouvrez les meilleures pratiques pour entretenir votre pelouse a Rabat tout au long de l'annee, du semis a la tonte.",
    metaDescription:
      "Guide complet pour entretenir votre pelouse a Rabat. Frequence de tonte, arrosage, engrais et conseils adaptes au climat marocain.",
    keywords: [
      "entretien pelouse rabat",
      "tonte gazon maroc",
      "arrosage pelouse rabat",
      "jardinier pelouse rabat",
    ],
    category: "Entretien",
    publishDate: "2026-02-15",
    readTime: 5,
    relatedService: "entretien-pelouse",
    content: `
      <h2>Pourquoi entretenir regulierement sa pelouse a Rabat ?</h2>
      <p>Le climat de Rabat, avec ses etes chauds et ses hivers doux, demande une attention particuliere pour garder une pelouse verte et dense. Un entretien regulier permet d'eviter les mauvaises herbes, les zones denuees et le jaunissement.</p>

      <h2>La tonte : frequence et hauteur ideale</h2>
      <p>En ete, tondez votre pelouse toutes les semaines a une hauteur de 5 a 7 cm. En hiver, espacez les tontes a toutes les 2 semaines. Ne coupez jamais plus d'un tiers de la hauteur du gazon en une seule tonte.</p>

      <h2>L'arrosage adapte au climat marocain</h2>
      <p>Arrosez tot le matin ou en fin de journee pour limiter l'evaporation. En ete, prevoyez 2 a 3 arrosages par semaine. En hiver, un arrosage hebdomadaire suffit generalement.</p>
      <ul>
        <li>Privilegiez un arrosage profond plutot que frequent</li>
        <li>Utilisez un systeme goutte-a-goutte si possible</li>
        <li>Evitez d'arroser en plein soleil</li>
      </ul>

      <h2>Engrais et fertilisation</h2>
      <p>Appliquez un engrais equilibre au printemps et en automne. Un apport de compost en surface ameliore la structure du sol et nourrit naturellement votre gazon.</p>

      <h2>Quand faire appel a un professionnel ?</h2>
      <p>Si votre pelouse presente des zones mortes, des champignons ou une invasion de mauvaises herbes, un jardinier professionnel peut diagnostiquer le probleme et appliquer le traitement adapte. <strong>Contactez El Gardinero pour un diagnostic gratuit !</strong></p>
    `,
  },
  {
    slug: "taille-haies-rabat-quand-comment",
    title: "Taille de haies a Rabat : quand et comment tailler ?",
    excerpt:
      "Tout savoir sur la taille de haies au Maroc : periodes ideales, techniques et erreurs a eviter pour des haies saines.",
    metaDescription:
      "Quand et comment tailler vos haies a Rabat ? Periodes ideales, techniques professionnelles et conseils pour des haies denses et saines.",
    keywords: [
      "taille haie rabat",
      "elagage rabat",
      "entretien haie maroc",
      "jardinier taille haie",
    ],
    category: "Taille",
    publishDate: "2026-02-28",
    readTime: 4,
    relatedService: "taille-elagage",
    content: `
      <h2>Les meilleures periodes pour tailler vos haies</h2>
      <p>A Rabat, la taille des haies se fait idealement deux fois par an : en fin de printemps (mai-juin) et en debut d'automne (septembre-octobre). Evitez de tailler en plein ete pour ne pas stresser les plantes.</p>

      <h2>Les techniques de taille</h2>
      <p>Commencez toujours par le bas et remontez vers le haut. Taillez legerement en biseau pour que la base de la haie soit plus large que le sommet, permettant a la lumiere d'atteindre toutes les branches.</p>

      <h3>Outils necessaires</h3>
      <ul>
        <li><strong>Taille-haie electrique</strong> : pour les grandes haies regulieres</li>
        <li><strong>Secateur</strong> : pour les finitions et les petites haies</li>
        <li><strong>Cisaille</strong> : pour une coupe precise sur les haies decoratives</li>
      </ul>

      <h2>Erreurs courantes a eviter</h2>
      <ul>
        <li>Tailler trop court, ce qui affaiblit la plante</li>
        <li>Tailler en periode de gel ou de forte chaleur</li>
        <li>Negliger le nettoyage des outils (risque de maladies)</li>
      </ul>

      <h2>Faites appel a un professionnel</h2>
      <p>Pour des haies hautes ou des especes delicates, un jardinier professionnel garantit un resultat propre et sain. <strong>Demandez un devis gratuit a El Gardinero !</strong></p>
    `,
  },
  {
    slug: "amenagement-jardin-rabat-idees",
    title: "5 idees d'amenagement jardin adaptees au climat de Rabat",
    excerpt:
      "Inspirations et conseils pour amenager un beau jardin a Rabat : plantes locales, coin detente, eclairage et plus.",
    metaDescription:
      "5 idees d'amenagement de jardin adaptees au climat de Rabat. Plantes locales, coin detente, eclairage et conseils pratiques.",
    keywords: [
      "amenagement jardin rabat",
      "paysagiste rabat",
      "idees jardin maroc",
      "jardin marocain moderne",
    ],
    category: "Amenagement",
    publishDate: "2026-03-05",
    readTime: 6,
    relatedService: "amenagement-jardin",
    content: `
      <h2>1. Un jardin mediterraneen avec des plantes locales</h2>
      <p>Optez pour des especes adaptees au climat de Rabat : bougainvilliers, jasmin, laurier-rose, olivier ou lavande. Ces plantes necessitent peu d'eau une fois etablies et resistent bien aux etes chauds.</p>

      <h2>2. Un coin detente avec pergola</h2>
      <p>Creez un espace ombre avec une pergola en bois ou en fer forge, couverte de plantes grimpantes comme le jasmin etoile ou la glycine. C'est l'endroit ideal pour profiter de votre jardin meme en plein ete.</p>

      <h2>3. Un systeme d'arrosage automatique</h2>
      <p>Investir dans un arrosage automatique programme permet d'economiser jusqu'a 50% d'eau tout en gardant votre jardin vert. Les systemes goutte-a-goutte sont particulierement adaptes au climat marocain.</p>

      <h2>4. Un eclairage jardin pour les soirees</h2>
      <p>Des spots solaires le long des allees, des guirlandes dans les arbres ou des bornes lumineuses creent une ambiance magique le soir. Privilegiez l'eclairage solaire, economique et ecologique.</p>

      <h2>5. Des massifs de fleurs saisonnieres</h2>
      <p>Alternez les fleurs selon les saisons pour un jardin toujours fleuri : petunias et zinnias en ete, pensees et primeveres en hiver, roses au printemps.</p>

      <h2>Besoin d'aide pour votre projet ?</h2>
      <p><strong>El Gardinero vous accompagne dans l'amenagement de votre jardin a Rabat.</strong> De la conception a la realisation, nous creons le jardin de vos reves. Contactez-nous pour un devis gratuit !</p>
    `,
  },
  {
    slug: "elagage-palmiers-rabat-guide-pratique",
    title: "Elagage de palmiers a Rabat : guide pratique et conseils",
    excerpt:
      "Tout savoir sur l'elagage des palmiers a Rabat : quand intervenir, techniques professionnelles et risques a eviter.",
    metaDescription:
      "Guide pratique pour l'elagage de palmiers a Rabat. Periodes ideales, techniques securisees et conseils d'un jardinier professionnel au Maroc.",
    keywords: [
      "elagage palmier rabat",
      "taille palmier maroc",
      "entretien palmier rabat",
      "jardinier palmier rabat",
    ],
    category: "Taille",
    publishDate: "2026-01-10",
    readTime: 5,
    relatedService: "elagage-palmiers",
    content: `
      <h2>Pourquoi elaguer vos palmiers a Rabat ?</h2>
      <p>Les palmiers sont omnipresents dans les jardins de Rabat. Qu'il s'agisse de palmiers dattiers, de washingtonia ou de palmiers des Canaries, un elagage regulier est indispensable. Les palmes seches qui s'accumulent representent un risque de chute, attirent les nuisibles et donnent un aspect neglige a votre jardin.</p>

      <h2>Quand elaguer un palmier au Maroc ?</h2>
      <p>La meilleure periode pour elaguer un palmier a Rabat se situe entre mars et juin, avant les grandes chaleurs de l'ete. Evitez l'elagage en hiver car les plaies de taille cicatrisent moins bien par temps frais. Pour les palmiers dattiers, attendez apres la recolte des dattes en automne.</p>

      <h3>Les signes qu'un elagage est necessaire</h3>
      <ul>
        <li>Palmes seches ou jaunies qui pendent le long du tronc</li>
        <li>Grappes de fruits non desirees qui alourdissent l'arbre</li>
        <li>Palmes qui touchent les fils electriques ou la facade</li>
        <li>Presence de nids d'oiseaux ou d'insectes dans les palmes mortes</li>
      </ul>

      <h2>Techniques d'elagage securisees</h2>
      <p>L'elagage de palmiers en hauteur est un travail dangereux qui necessite un equipement adapte : harnais de securite, cordes, scie d'elagage et parfois une nacelle. Ne coupez jamais les palmes vertes qui sont encore productives, car cela affaiblit l'arbre. Retirez uniquement les palmes seches, les inflorescences et les rejets a la base du tronc.</p>

      <h2>Les erreurs a eviter absolument</h2>
      <p>Ne montez jamais sur un palmier sans equipement de securite. Ne taillez pas plus d'un tiers des palmes en une seule intervention. Evitez d'utiliser des crampons qui blessent le tronc et creent des points d'entree pour les maladies. Un palmier mal elague peut developper le charancon rouge, un insecte devastateur present au Maroc.</p>

      <h2>Confiez l'elagage a un professionnel</h2>
      <p>L'elagage de palmiers en hauteur demande une expertise et un equipement specialise. <strong>El Gardinero intervient sur tous types de palmiers a Rabat, Temara et Sale. Contactez-nous pour un devis gratuit et une intervention rapide !</strong></p>
    `,
  },
  {
    slug: "arrosage-automatique-jardin-rabat",
    title: "Arrosage automatique a Rabat : guide d'installation et conseils",
    excerpt:
      "Comment installer un systeme d'arrosage automatique dans votre jardin a Rabat. Types de systemes, couts et economies d'eau.",
    metaDescription:
      "Guide complet sur l'arrosage automatique a Rabat. Installation, types de systemes, programmation et economies d'eau pour votre jardin au Maroc.",
    keywords: [
      "arrosage automatique rabat",
      "installation arrosage jardin maroc",
      "systeme goutte a goutte rabat",
      "irrigation jardin rabat",
    ],
    category: "Arrosage",
    publishDate: "2026-01-18",
    readTime: 6,
    relatedService: "arrosage-automatique",
    content: `
      <h2>Pourquoi installer un arrosage automatique a Rabat ?</h2>
      <p>Avec un climat semi-aride et des etes ou la temperature depasse regulierement 35 degres, l'arrosage est vital pour les jardins de Rabat. Un systeme automatique vous fait economiser jusqu'a 50% d'eau par rapport a un arrosage manuel, tout en assurant une distribution uniforme et programmee.</p>

      <h2>Les differents systemes d'arrosage</h2>
      <p>Plusieurs options s'offrent a vous selon la taille et le type de votre jardin. Le choix depend de vos plantations et de votre budget.</p>
      <ul>
        <li><strong>Goutte-a-goutte</strong> : ideal pour les massifs, les haies et les arbres. Economise un maximum d'eau en ciblant les racines</li>
        <li><strong>Asperseurs escamotables</strong> : parfaits pour les grandes pelouses. Ils se levent automatiquement lors de l'arrosage</li>
        <li><strong>Micro-aspersion</strong> : adapte aux parterres de fleurs et aux petites surfaces</li>
        <li><strong>Tuyaux poreux</strong> : solution economique pour les potagers et les haies</li>
      </ul>

      <h2>Programmer son arrosage selon les saisons</h2>
      <p>A Rabat, la programmation doit varier selon la saison. En ete, programmez l'arrosage tot le matin entre 5h et 7h, ou le soir apres 20h. En hiver, reduisez la frequence a une ou deux fois par semaine. Un programmateur avec sonde d'humidite ajuste automatiquement les cycles en fonction des besoins reels du sol.</p>

      <h3>Conseils pour economiser l'eau</h3>
      <ul>
        <li>Installez un recuperateur d'eau de pluie pour completer votre systeme</li>
        <li>Paillez le pied de vos plantes pour reduire l'evaporation</li>
        <li>Verifiez regulierement les fuites et les buses bouchees</li>
        <li>Adaptez la duree d'arrosage a chaque zone du jardin</li>
      </ul>

      <h2>Cout d'installation a Rabat</h2>
      <p>Le prix d'un systeme d'arrosage automatique a Rabat varie entre 3 000 et 15 000 dirhams selon la surface et la complexite. Un systeme goutte-a-goutte pour un petit jardin peut couter aussi peu que 1 500 dirhams. L'investissement est rentabilise en 2 a 3 ans grace aux economies d'eau.</p>

      <h2>Faites installer votre systeme par un professionnel</h2>
      <p><strong>El Gardinero concoit et installe des systemes d'arrosage automatique sur mesure a Rabat et ses environs. Demandez votre devis gratuit et commencez a economiser l'eau des maintenant !</strong></p>
    `,
  },
  {
    slug: "calendrier-plantation-maroc-quand-planter",
    title: "Calendrier de plantation au Maroc : que planter et quand ?",
    excerpt:
      "Le calendrier complet des plantations au Maroc mois par mois. Fleurs, arbres, legumes et arbustes adaptes au climat marocain.",
    metaDescription:
      "Calendrier de plantation au Maroc : decouvrez quoi planter chaque mois. Fleurs, arbres fruitiers, legumes et plantes ornementales adaptes au climat.",
    keywords: [
      "quand planter maroc",
      "calendrier plantation maroc",
      "que planter rabat",
      "saison plantation maroc",
    ],
    category: "Plantation",
    publishDate: "2026-01-25",
    readTime: 7,
    relatedService: "plantation-fleurs",
    content: `
      <h2>Le calendrier de plantation adapte au climat marocain</h2>
      <p>Le Maroc beneficie d'un climat favorable au jardinage presque toute l'annee. Cependant, chaque plante a sa saison ideale de plantation. Respecter ce calendrier est la cle d'un jardin reussi a Rabat et dans tout le Maroc.</p>

      <h2>Janvier - Fevrier : preparer le printemps</h2>
      <p>C'est la periode ideale pour planter les arbres fruitiers a racines nues : orangers, citronniers, oliviers et figuiers. Semez egalement les graines de tomates, poivrons et aubergines en godets a l'abri. Plantez les rosiers et les bulbes de printemps comme les narcisses et les iris.</p>

      <h2>Mars - Avril : la grande saison de plantation</h2>
      <p>Le printemps est le moment ideal pour la majorite des plantations. Mettez en terre les plantes vivaces, les arbustes mediterraneens comme le laurier-rose et le romarin, ainsi que les fleurs d'ete : petunias, geraniums, zinnias et cosmos. C'est aussi le bon moment pour semer le gazon.</p>

      <h3>Les incontournables du printemps</h3>
      <ul>
        <li><strong>Bougainvilliers</strong> : plantation ideale en avril-mai</li>
        <li><strong>Jasmin</strong> : a planter au printemps pour une floraison estivale</li>
        <li><strong>Lavande</strong> : se plante de mars a mai</li>
        <li><strong>Hibiscus</strong> : plantation au printemps, floraison tout l'ete</li>
      </ul>

      <h2>Mai - Septembre : entretien et recolte</h2>
      <p>En ete, concentrez-vous sur l'arrosage et l'entretien. Evitez les nouvelles plantations pendant les mois les plus chauds (juillet-aout). En septembre, reprenez les semis de legumes d'hiver : feves, petits pois, laitues et epinards.</p>

      <h2>Octobre - Decembre : les plantations d'automne</h2>
      <p>L'automne est la deuxieme grande saison de plantation au Maroc. Plantez les arbres et arbustes a feuilles persistantes, les haies de cypres et les plantes grimpantes. C'est aussi le moment de planter les bulbes qui fleuriront au printemps : tulipes, crocus et jacinthes.</p>

      <h2>Besoin de conseils personnalises ?</h2>
      <p><strong>El Gardinero vous accompagne dans le choix et la plantation des vegetaux les mieux adaptes a votre jardin a Rabat. Contactez-nous pour un conseil gratuit !</strong></p>
    `,
  },
  {
    slug: "nettoyage-jardin-apres-hiver-rabat",
    title: "Nettoyage de jardin apres l'hiver a Rabat : etapes essentielles",
    excerpt:
      "Comment remettre votre jardin en etat apres l'hiver a Rabat. Les etapes cles du nettoyage de printemps pour un jardin impeccable.",
    metaDescription:
      "Nettoyage de jardin apres l'hiver a Rabat : toutes les etapes pour preparer votre jardin au printemps. Conseils pratiques d'un jardinier professionnel.",
    keywords: [
      "nettoyage jardin rabat",
      "entretien jardin printemps maroc",
      "nettoyage jardin hiver",
      "jardinier nettoyage rabat",
    ],
    category: "Nettoyage",
    publishDate: "2026-02-01",
    readTime: 5,
    relatedService: "nettoyage-jardin",
    content: `
      <h2>Pourquoi nettoyer son jardin apres l'hiver ?</h2>
      <p>Meme si l'hiver a Rabat est doux compare a l'Europe, les pluies d'hiver laissent des traces dans votre jardin. Feuilles mortes accumulees, branches cassees par le vent, mauvaises herbes qui ont profite de l'humidite : un bon nettoyage de printemps est indispensable pour repartir sur de bonnes bases.</p>

      <h2>Etape 1 : Ramassage des feuilles et debris</h2>
      <p>Commencez par ramasser toutes les feuilles mortes, les branches tombees et les debris accumules pendant l'hiver. Utilisez un rateau a feuilles pour les pelouses et un souffleur pour les grandes surfaces. Ne jetez pas ces dechets : compostez les feuilles pour creer un engrais naturel gratuit.</p>

      <h2>Etape 2 : Desherbage complet</h2>
      <p>Les mauvaises herbes ont souvent prolifere pendant l'hiver grace aux pluies. Desherbez manuellement les massifs et les allees. Pour les grandes surfaces, un desherbage thermique est plus efficace et ecologique que les produits chimiques.</p>
      <ul>
        <li>Arrachez les mauvaises herbes avec leurs racines</li>
        <li>Desherbez apres une pluie quand le sol est meuble</li>
        <li>Paillez ensuite pour limiter la repousse</li>
      </ul>

      <h2>Etape 3 : Taille de nettoyage</h2>
      <p>Supprimez les branches mortes ou abimees sur vos arbres et arbustes. Taillez les vivaces qui ont seche pendant l'hiver. Nettoyez les rosiers en retirant le bois mort et les tiges faibles. Cette taille de nettoyage stimule la reprise de la vegetation au printemps.</p>

      <h2>Etape 4 : Preparation du sol</h2>
      <p>Griffez le sol des massifs pour l'aerer apres le tassement hivernal. Ajoutez du compost ou du fumier bien decompose pour enrichir la terre avant les plantations de printemps. Un sol bien prepare est la garantie d'un jardin genereux.</p>

      <h2>Gagnez du temps avec El Gardinero</h2>
      <p><strong>El Gardinero propose un forfait nettoyage de jardin complet a Rabat. Nous remettons votre jardin en etat en une seule intervention. Demandez votre devis gratuit !</strong></p>
    `,
  },
  {
    slug: "gazon-synthetique-vs-naturel-rabat",
    title: "Gazon synthetique ou naturel a Rabat : que choisir ?",
    excerpt:
      "Comparatif complet entre gazon synthetique et gazon naturel a Rabat. Avantages, inconvenients, couts et entretien.",
    metaDescription:
      "Gazon synthetique ou naturel a Rabat ? Comparatif detaille : cout, entretien, duree de vie et adaptation au climat marocain.",
    keywords: [
      "gazon synthetique rabat",
      "gazon naturel maroc",
      "pelouse artificielle rabat",
      "prix gazon synthetique maroc",
    ],
    category: "Entretien",
    publishDate: "2026-02-05",
    readTime: 5,
    relatedService: "entretien-pelouse",
    content: `
      <h2>Le dilemme du gazon a Rabat</h2>
      <p>Avec les chaleurs estivales et les restrictions d'eau au Maroc, de plus en plus de proprietaires a Rabat hesitent entre gazon synthetique et gazon naturel. Chaque option a ses avantages et ses limites. Voici un comparatif honnete pour vous aider a choisir.</p>

      <h2>Le gazon naturel : avantages et inconvenients</h2>
      <p>Un gazon naturel offre une sensation agreable sous les pieds, rafraichit l'air ambiant et contribue a la biodiversite de votre jardin. Cependant, a Rabat, il demande un arrosage regulier, surtout en ete, et un entretien constant : tonte, desherbage, fertilisation.</p>
      <ul>
        <li><strong>Avantages</strong> : aspect naturel, fraicheur, ecologique, dure indefiniment</li>
        <li><strong>Inconvenients</strong> : consommation d'eau elevee, entretien hebdomadaire, jaunissement en ete</li>
        <li><strong>Cout</strong> : 50 a 100 DH/m2 pour le semis, plus l'entretien mensuel</li>
      </ul>

      <h2>Le gazon synthetique : avantages et inconvenients</h2>
      <p>Le gazon synthetique ne necessite ni arrosage ni tonte. Il reste vert toute l'annee et supporte bien le passage. Cependant, il chauffe enormement en ete sous le soleil de Rabat et sa duree de vie est limitee a 8-12 ans selon la qualite.</p>
      <ul>
        <li><strong>Avantages</strong> : zero arrosage, zero tonte, toujours vert, ideal pour les petites surfaces</li>
        <li><strong>Inconvenients</strong> : chauffe au soleil, aspect plastique, non ecologique, cout initial eleve</li>
        <li><strong>Cout</strong> : 200 a 500 DH/m2 pose comprise, selon la qualite</li>
      </ul>

      <h2>Notre recommandation pour Rabat</h2>
      <p>Pour les grandes pelouses et les jardins familiaux, le gazon naturel reste le meilleur choix a condition d'installer un arrosage automatique. Pour les petites terrasses, les cours interieures ou les espaces a fort passage, le gazon synthetique est une solution pratique et durable.</p>

      <h2>Besoin d'aide pour choisir ?</h2>
      <p><strong>El Gardinero vous conseille et realise la pose de gazon naturel ou synthetique a Rabat. Contactez-nous pour un devis personnalise et gratuit !</strong></p>
    `,
  },
  {
    slug: "plantes-resistantes-chaleur-maroc",
    title: "10 plantes resistantes a la chaleur pour votre jardin au Maroc",
    excerpt:
      "Decouvrez les plantes qui resistent le mieux a la chaleur et a la secheresse au Maroc. Ideales pour un jardin beau toute l'annee.",
    metaDescription:
      "Les 10 meilleures plantes resistantes a la chaleur pour les jardins au Maroc. Plantes mediterraneennes et locales qui supportent le climat marocain.",
    keywords: [
      "plantes resistantes chaleur maroc",
      "plantes jardin maroc",
      "plantes secheresse rabat",
      "jardin sans arrosage maroc",
    ],
    category: "Plantation",
    publishDate: "2026-02-10",
    readTime: 6,
    relatedService: "plantation-fleurs",
    content: `
      <h2>Choisir des plantes adaptees au climat marocain</h2>
      <p>Au Maroc, les etes sont longs et chauds, avec des temperatures qui depassent souvent 40 degres. Pour un jardin qui reste beau sans consommer trop d'eau, il faut choisir des plantes adaptees. Voici 10 especes qui s'epanouissent dans le climat de Rabat et du Maroc.</p>

      <h2>Les arbustes et plantes a fleurs</h2>
      <ul>
        <li><strong>Bougainvillier</strong> : la star des jardins marocains. Floraison spectaculaire en rose, violet ou orange. Tres resistant a la secheresse une fois etabli</li>
        <li><strong>Laurier-rose</strong> : floraison abondante de mai a octobre, supporte la chaleur extreme et les sols pauvres</li>
        <li><strong>Lantana</strong> : couvre-sol colore qui fleurit sans arret, meme en plein ete. Attire les papillons</li>
        <li><strong>Hibiscus</strong> : grandes fleurs tropicales en ete, pousse bien a Rabat avec un arrosage modere</li>
      </ul>

      <h2>Les plantes aromatiques et vivaces</h2>
      <ul>
        <li><strong>Lavande</strong> : parfumee, decorative et tres econome en eau. Ideale en bordure ou en massif</li>
        <li><strong>Romarin</strong> : arbuste aromatique qui pousse naturellement dans tout le Maroc</li>
        <li><strong>Agave</strong> : plante succulente architecturale qui ne demande quasi aucun arrosage</li>
      </ul>

      <h2>Les arbres d'ornement</h2>
      <ul>
        <li><strong>Olivier</strong> : arbre emblematique du Maroc, resistant et decoratif, peut vivre des siecles</li>
        <li><strong>Jacaranda</strong> : floraison violette spectaculaire au printemps, bon arbre d'ombrage</li>
        <li><strong>Arbre de Judee</strong> : floraison rose au printemps avant les feuilles, supporte bien la secheresse</li>
      </ul>

      <h2>Conseils de plantation</h2>
      <p>Plantez ces especes de preference en automne ou au debut du printemps pour qu'elles aient le temps de developper leurs racines avant l'ete. Paillez generalement le pied des plantes avec des ecorces ou du gravier pour limiter l'evaporation. Les deux premieres annees, arrosez regulierement pour favoriser l'enracinement.</p>

      <h2>Faites planter par un professionnel</h2>
      <p><strong>El Gardinero selectionne et plante les especes les mieux adaptees a votre jardin a Rabat. Beneficiez de nos conseils d'expert et d'un devis gratuit !</strong></p>
    `,
  },
  {
    slug: "prix-jardinier-rabat-tarifs-2026",
    title: "Prix d'un jardinier a Rabat en 2026 : tarifs et prestations",
    excerpt:
      "Combien coute un jardinier a Rabat ? Decouvrez les tarifs moyens pour l'entretien, la tonte, la taille et l'amenagement de jardin.",
    metaDescription:
      "Prix jardinier Rabat 2026 : tarifs moyens pour la tonte, la taille, le nettoyage et l'amenagement de jardin. Guide des prix au Maroc.",
    keywords: [
      "prix jardinier rabat",
      "tarif jardinier maroc",
      "cout entretien jardin rabat",
      "devis jardinier rabat",
    ],
    category: "Conseils",
    publishDate: "2026-02-18",
    readTime: 5,
    content: `
      <h2>Combien coute un jardinier a Rabat ?</h2>
      <p>Le prix d'un jardinier a Rabat varie selon le type de prestation, la surface du jardin et la frequence d'intervention. Voici un guide des tarifs moyens pratiques en 2026 pour vous aider a budgetiser l'entretien de votre jardin.</p>

      <h2>Tarifs pour l'entretien regulier</h2>
      <p>L'entretien regulier comprend la tonte, le desherbage, l'arrosage et le ramassage des feuilles. Les tarifs varient selon la frequence choisie.</p>
      <ul>
        <li><strong>Intervention ponctuelle</strong> : 200 a 500 DH selon la surface</li>
        <li><strong>Forfait mensuel (2 passages)</strong> : 400 a 800 DH par mois</li>
        <li><strong>Forfait mensuel (4 passages)</strong> : 700 a 1 500 DH par mois</li>
      </ul>

      <h2>Tarifs pour les prestations specifiques</h2>
      <ul>
        <li><strong>Taille de haies</strong> : 30 a 60 DH par metre lineaire</li>
        <li><strong>Elagage d'arbre</strong> : 300 a 1 500 DH par arbre selon la taille</li>
        <li><strong>Elagage de palmier</strong> : 200 a 800 DH par palmier</li>
        <li><strong>Nettoyage complet de jardin</strong> : 500 a 2 000 DH selon la surface</li>
        <li><strong>Plantation</strong> : 50 a 150 DH par plante, hors cout du vegetal</li>
      </ul>

      <h2>Tarifs pour l'amenagement</h2>
      <p>Les travaux d'amenagement representent un investissement plus important mais transforment durablement votre exterieur.</p>
      <ul>
        <li><strong>Amenagement complet</strong> : a partir de 5 000 DH selon le projet</li>
        <li><strong>Installation arrosage automatique</strong> : 3 000 a 15 000 DH</li>
        <li><strong>Pose de gazon</strong> : 50 a 100 DH/m2 (naturel) ou 200 a 500 DH/m2 (synthetique)</li>
      </ul>

      <h2>Comment choisir le bon jardinier ?</h2>
      <p>Au-dela du prix, privilegiez un jardinier assure, avec de bonnes references et qui propose un devis detaille avant intervention. Mefiez-vous des tarifs trop bas qui cachent souvent un travail bacle ou un manque d'equipement professionnel.</p>

      <h2>Demandez un devis gratuit</h2>
      <p><strong>El Gardinero propose des tarifs transparents et competitifs a Rabat, Sale et Temara. Contactez-nous pour un devis gratuit et sans engagement !</strong></p>
    `,
  },
  {
    slug: "jardin-marocain-traditionnel-elements",
    title: "Le jardin marocain traditionnel : elements et inspiration",
    excerpt:
      "Decouvrez les elements cles du jardin marocain traditionnel : fontaines, zellige, plantes et comment les integrer dans votre espace.",
    metaDescription:
      "Le jardin marocain traditionnel : fontaines, zellige, mosaiques, plantes et ambiance. Comment creer un riad jardin chez vous a Rabat.",
    keywords: [
      "jardin marocain traditionnel",
      "jardin riad maroc",
      "patio marocain rabat",
      "jardin arabo-andalou",
    ],
    category: "Amenagement",
    publishDate: "2026-01-15",
    readTime: 6,
    relatedService: "amenagement-jardin",
    content: `
      <h2>L'art du jardin marocain</h2>
      <p>Le jardin marocain est un heritage de la tradition arabo-andalouse, ou l'eau, la geometrie et les plantes se combinent pour creer un espace de fraicheur et de serenite. Que vous ayez un grand jardin ou un simple patio, vous pouvez integrer ces elements dans votre espace a Rabat.</p>

      <h2>L'eau : element central du jardin marocain</h2>
      <p>Dans la tradition marocaine, l'eau est au coeur du jardin. Une fontaine centrale, un bassin rectangulaire ou un simple filet d'eau qui coule le long d'un canal apporte fraicheur et serenite. Le bruit de l'eau cree une ambiance apaisante et rafraichit l'air ambiant pendant les mois chauds.</p>

      <h3>Les materiaux traditionnels</h3>
      <ul>
        <li><strong>Zellige</strong> : les carreaux de mosaique emaillees habillent les fontaines, les murs et les sols</li>
        <li><strong>Tadelakt</strong> : enduit lisse et impermeabilise pour les bassins et les murs</li>
        <li><strong>Pierre taillee</strong> : pour les margelles de bassin et les bordures d'allees</li>
        <li><strong>Fer forge</strong> : pour les grilles, les lanternes et le mobilier de jardin</li>
      </ul>

      <h2>Les plantes du jardin marocain</h2>
      <p>Le jardin marocain privilegie les plantes parfumees et les agrumes. Les orangers et citronniers apportent ombre, parfum et fruits. Le jasmin grimpe sur les murs et embaume les soirees d'ete. Les rosiers, surtout la rose de Damas, sont incontournables. La menthe, le basilic et le geranium completent la palette aromatique.</p>

      <h2>La geometrie et la symetrie</h2>
      <p>Les jardins marocains traditionnels sont organises selon une geometrie stricte. Les allees se croisent en angle droit autour du bassin central, creant quatre parterres symetriques. Les haies de buis ou de myrte taillees delimitent les espaces avec precision. Cette organisation evoque les jardins du paradis decrits dans la tradition islamique.</p>

      <h2>Creez votre jardin marocain avec El Gardinero</h2>
      <p><strong>El Gardinero concoit des jardins d'inspiration marocaine traditionnelle a Rabat. De la fontaine aux plantations, nous creons un espace authentique et enchanteur. Contactez-nous pour discuter de votre projet !</strong></p>
    `,
  },
  {
    slug: "taille-olivier-maroc-guide",
    title: "Taille de l'olivier au Maroc : quand et comment bien tailler",
    excerpt:
      "Guide complet pour tailler vos oliviers au Maroc. Periodes, techniques de taille de formation et de fructification.",
    metaDescription:
      "Comment tailler un olivier au Maroc ? Periodes ideales, techniques de taille de formation et d'entretien. Guide pratique pour jardiniers.",
    keywords: [
      "taille olivier maroc",
      "elagage olivier rabat",
      "entretien olivier maroc",
      "quand tailler olivier",
    ],
    category: "Taille",
    publishDate: "2026-01-30",
    readTime: 5,
    relatedService: "taille-elagage",
    content: `
      <h2>L'olivier, arbre emblematique du Maroc</h2>
      <p>Le Maroc est l'un des plus grands producteurs d'olives au monde, et l'olivier est omnipresent dans les jardins, les parcs et les exploitations agricoles. Qu'il soit ornemental ou productif, un olivier bien taille est plus sain, plus esthetique et produit davantage de fruits.</p>

      <h2>Quand tailler un olivier au Maroc ?</h2>
      <p>La taille de l'olivier se fait en fin d'hiver, entre fevrier et mars, avant la reprise de la vegetation. C'est la periode ou l'arbre est en repos vegetatif et les risques de gel sont ecartes a Rabat. Evitez de tailler pendant la floraison (avril-mai) ou apres la nouaison des fruits.</p>

      <h2>Les differents types de taille</h2>
      <h3>Taille de formation (jeunes arbres)</h3>
      <p>Pendant les 4 premieres annees, la taille de formation donne a l'olivier sa structure. Selectionnez 3 a 4 branches charpentieres bien reparties autour du tronc et supprimez les autres. L'objectif est de creer une couronne aeree en forme de vase.</p>

      <h3>Taille d'entretien (arbres adultes)</h3>
      <ul>
        <li>Supprimez les branches mortes, malades ou qui se croisent</li>
        <li>Eclaircissez le centre de l'arbre pour laisser passer la lumiere</li>
        <li>Raccourcissez les branches trop longues qui desequilibrent la silhouette</li>
        <li>Retirez les rejets (gourmands) qui poussent a la base du tronc</li>
      </ul>

      <h3>Taille de fructification</h3>
      <p>Pour les oliviers productifs, taillez les rameaux qui ont fructifie l'annee precedente. L'olivier produit sur le bois de l'annee precedente, donc alternez les branches taillees pour maintenir une production reguliere.</p>

      <h2>Erreurs a eviter</h2>
      <p>Ne taillez jamais plus d'un quart du volume de la couronne en une seule fois. Evitez les coupes trop rases qui exposent le bois au soleil et aux maladies. Desinfectez vos outils entre chaque arbre pour eviter la propagation de maladies.</p>

      <h2>Confiez la taille a un professionnel</h2>
      <p><strong>El Gardinero maitrise la taille des oliviers ornementaux et productifs a Rabat et ses environs. Demandez un devis gratuit pour la taille de vos oliviers !</strong></p>
    `,
  },
  {
    slug: "arrosage-economie-eau-jardin-rabat",
    title: "Economiser l'eau au jardin a Rabat : 8 astuces efficaces",
    excerpt:
      "Comment reduire la consommation d'eau de votre jardin a Rabat sans sacrifier la beaute de vos plantations. 8 astuces testees.",
    metaDescription:
      "8 astuces pour economiser l'eau au jardin a Rabat. Paillage, arrosage intelligent, plantes economes et recuperation d'eau de pluie au Maroc.",
    keywords: [
      "economie eau jardin rabat",
      "arrosage economique maroc",
      "jardin econome eau",
      "reduire consommation eau jardin",
    ],
    category: "Arrosage",
    publishDate: "2026-02-22",
    readTime: 5,
    relatedService: "arrosage-automatique",
    content: `
      <h2>L'eau, une ressource precieuse au Maroc</h2>
      <p>Le Maroc fait face a un stress hydrique croissant, et l'eau est une ressource de plus en plus precieuse. A Rabat, les jardins representent une part importante de la consommation d'eau des menages. Heureusement, il existe des solutions simples pour reduire cette consommation sans renoncer a un beau jardin.</p>

      <h2>8 astuces pour economiser l'eau</h2>

      <h3>1. Pailler genereusement</h3>
      <p>Le paillage est la methode la plus efficace pour reduire l'evaporation. Etalez 5 a 10 cm d'ecorces, de paille ou de gravier autour de vos plantes. Le paillage reduit l'evaporation de 40 a 60% et limite la pousse des mauvaises herbes.</p>

      <h3>2. Arroser au bon moment</h3>
      <p>Arrosez exclusivement le matin avant 8h ou le soir apres 20h. Un arrosage en plein soleil perd jusqu'a 60% de l'eau par evaporation. Programmez votre arrosage automatique en consequence.</p>

      <h3>3. Choisir des plantes economes</h3>
      <p>Remplacez les plantes gourmandes en eau par des especes mediterraneennes : lavande, romarin, lantana, bougainvillier, agave. Ces plantes sont belles et ne necessitent qu'un arrosage minimal une fois bien enracinees.</p>

      <h3>4. Installer un goutte-a-goutte</h3>
      <p>Le systeme goutte-a-goutte delivre l'eau directement aux racines, sans gaspillage. Il consomme 30 a 50% d'eau en moins qu'un arrosage par aspersion.</p>

      <ul>
        <li><strong>5. Recuperer l'eau de pluie</strong> : installez des cuves sur vos gouttieres</li>
        <li><strong>6. Recycler les eaux grises</strong> : l'eau de rincage des legumes peut servir a arroser</li>
        <li><strong>7. Grouper les plantes par besoin en eau</strong> : creez des zones selon la consommation</li>
        <li><strong>8. Entretenir votre systeme d'arrosage</strong> : verifiez les fuites regulierement</li>
      </ul>

      <h2>Optimisez votre arrosage avec El Gardinero</h2>
      <p><strong>El Gardinero concoit des jardins economes en eau et installe des systemes d'arrosage intelligents a Rabat. Contactez-nous pour un audit gratuit de votre consommation d'eau au jardin !</strong></p>
    `,
  },
  {
    slug: "haie-brise-vent-rabat-plantes",
    title: "Creer une haie brise-vent a Rabat : les meilleures plantes",
    excerpt:
      "Quelles plantes choisir pour une haie brise-vent efficace a Rabat ? Selection d'especes resistantes et conseils de plantation.",
    metaDescription:
      "Les meilleures plantes pour une haie brise-vent a Rabat. Cypres, laurier, pittosporum : guide de choix et conseils de plantation au Maroc.",
    keywords: [
      "haie brise-vent rabat",
      "plantes haie maroc",
      "haie jardin rabat",
      "cypres haie maroc",
    ],
    category: "Plantation",
    publishDate: "2026-03-01",
    readTime: 4,
    relatedService: "plantation-fleurs",
    content: `
      <h2>Pourquoi planter une haie brise-vent a Rabat ?</h2>
      <p>Rabat est une ville cotiere exposee aux vents de l'Atlantique, surtout entre mars et mai. Le vent chergui, chaud et sec, souffle aussi en ete depuis l'interieur du pays. Une haie brise-vent protege votre jardin, reduit l'evaporation et cree un microclimat favorable a vos plantations.</p>

      <h2>Les meilleures plantes pour une haie brise-vent</h2>
      <ul>
        <li><strong>Cypres de Leyland</strong> : croissance tres rapide (1 m par an), feuillage dense et persistant. Ideal pour une haie haute</li>
        <li><strong>Pittosporum tobira</strong> : arbuste resistant au vent et aux embruns, floraison parfumee au printemps</li>
        <li><strong>Laurier-tin (Viburnum tinus)</strong> : persistant, floraison hivernale, supporte bien la taille</li>
        <li><strong>Troene</strong> : croissance rapide, feuillage dense, tres facile d'entretien</li>
        <li><strong>Eleagnus</strong> : excellent brise-vent, resiste au sel et a la secheresse</li>
      </ul>

      <h2>Conseils de plantation</h2>
      <p>Plantez votre haie de preference en automne (octobre-novembre) pour profiter des pluies hivernales. Espacez les plants de 60 a 100 cm selon l'espece choisie. Creusez une tranchee de 50 cm de profondeur et amendez la terre avec du compost. Arrosez abondamment les premieres semaines.</p>

      <h3>Les erreurs a eviter</h3>
      <ul>
        <li>Planter une seule rangee : doublez la haie en quinconce pour une meilleure protection</li>
        <li>Choisir des especes a feuilles caduques qui ne protegent pas en hiver</li>
        <li>Planter trop pres de la cloture du voisin (respectez la distance legale)</li>
      </ul>

      <h2>Entretien de votre haie brise-vent</h2>
      <p>Taillez votre haie deux fois par an pour qu'elle reste dense a la base. Arrosez regulierement la premiere annee. Apportez de l'engrais au printemps pour stimuler la croissance. Une haie bien entretenue peut durer des dizaines d'annees.</p>

      <h2>Plantation de haie par El Gardinero</h2>
      <p><strong>El Gardinero plante et entretient des haies brise-vent a Rabat, Temara et Sale. Contactez-nous pour un devis gratuit et des conseils sur le choix des plantes !</strong></p>
    `,
  },
  {
    slug: "entretien-jardin-villa-rabat-guide",
    title: "Entretien de jardin de villa a Rabat : le guide complet",
    excerpt:
      "Comment entretenir le jardin de votre villa a Rabat tout au long de l'annee. Calendrier, taches et conseils pratiques.",
    metaDescription:
      "Guide complet pour l'entretien du jardin de votre villa a Rabat. Calendrier mensuel, taches essentielles et conseils d'un jardinier professionnel.",
    keywords: [
      "entretien jardin villa rabat",
      "jardinier villa rabat",
      "entretien jardin hay riad",
      "jardinier souissi agdal",
    ],
    category: "Entretien",
    publishDate: "2026-01-08",
    readTime: 6,
    content: `
      <h2>L'entretien d'un jardin de villa a Rabat</h2>
      <p>Les villas de Rabat, que ce soit a Hay Riad, Souissi ou Agdal, disposent souvent de beaux jardins qui necessitent un entretien regulier. Un jardin de villa bien entretenu valorise votre propriete et vous offre un espace de vie agreable toute l'annee.</p>

      <h2>Le calendrier d'entretien mensuel</h2>
      <h3>Janvier - Fevrier</h3>
      <p>Taillez les arbres fruitiers et les rosiers. Nettoyez les massifs et ajoutez du compost. Plantez les arbres a racines nues. Verifiez le systeme d'arrosage avant le printemps.</p>

      <h3>Mars - Mai</h3>
      <p>Reprenez la tonte reguliere de la pelouse. Desherbez les massifs et paillez. Plantez les fleurs d'ete et les annuelles. Taillez les haies pour la premiere fois. Activez l'arrosage automatique.</p>

      <h3>Juin - Aout</h3>
      <p>Tondez la pelouse chaque semaine en laissant le gazon plus haut. Arrosez abondamment le matin ou le soir. Supprimez les fleurs fanees pour prolonger la floraison. Surveillez les parasites et les maladies.</p>

      <h3>Septembre - Decembre</h3>
      <p>Reduisez la frequence de tonte. Plantez les bulbes de printemps. Ramassez les feuilles mortes. Taillez les haies une derniere fois. Protegez les plantes fragiles avant les nuits fraiches. Preparez le sol pour les plantations de printemps.</p>

      <h2>Les taches essentielles a ne pas negliger</h2>
      <ul>
        <li><strong>Tonte</strong> : hebdomadaire en ete, bimensuelle en hiver</li>
        <li><strong>Arrosage</strong> : adapte a chaque saison et chaque zone du jardin</li>
        <li><strong>Desherbage</strong> : regulier pour eviter l'envahissement</li>
        <li><strong>Taille</strong> : deux fois par an pour les haies, annuelle pour les arbres</li>
        <li><strong>Fertilisation</strong> : au printemps et en automne</li>
      </ul>

      <h2>Confiez votre jardin a El Gardinero</h2>
      <p><strong>El Gardinero propose des forfaits d'entretien sur mesure pour les villas de Rabat. Un jardinier dedie s'occupe de votre jardin selon un calendrier adapte. Demandez votre devis gratuit !</strong></p>
    `,
  },
  {
    slug: "bougainvillier-maroc-entretien-taille",
    title: "Le bougainvillier au Maroc : entretien, taille et floraison",
    excerpt:
      "Tout savoir sur le bougainvillier au Maroc : plantation, arrosage, taille et astuces pour une floraison abondante.",
    metaDescription:
      "Guide complet du bougainvillier au Maroc. Plantation, entretien, taille et astuces pour obtenir une floraison spectaculaire a Rabat.",
    keywords: [
      "bougainvillier maroc",
      "entretien bougainvillier rabat",
      "taille bougainvillier",
      "floraison bougainvillier maroc",
    ],
    category: "Plantation",
    publishDate: "2026-02-25",
    readTime: 5,
    relatedService: "plantation-fleurs",
    content: `
      <h2>Le bougainvillier, star des jardins marocains</h2>
      <p>Le bougainvillier est sans doute la plante la plus emblematique des jardins du Maroc. Avec ses cascades de fleurs roses, violettes, oranges ou blanches, il habille les murs, les pergolas et les facades de Rabat. Originaire d'Amerique du Sud, il s'est parfaitement adapte au climat marocain.</p>

      <h2>Planter un bougainvillier a Rabat</h2>
      <p>Plantez votre bougainvillier entre avril et juin, quand tout risque de froid est ecarte. Choisissez un emplacement tres ensoleille, oriente sud de preference. Le bougainvillier a besoin d'au moins 6 heures de soleil direct par jour pour bien fleurir. Plantez-le dans un sol bien draine, il deteste l'eau stagnante.</p>

      <h2>L'arrosage : la cle de la floraison</h2>
      <p>Le secret d'un bougainvillier genereux est paradoxal : il faut le stresser un peu. Un arrosage trop genereux favorise les feuilles au detriment des fleurs. Arrosez moderement et laissez le sol secher entre deux arrosages. En ete, un arrosage tous les 3 a 4 jours suffit pour un bougainvillier en pleine terre.</p>

      <h3>Conseils d'entretien</h3>
      <ul>
        <li>Apportez un engrais riche en potasse au printemps pour stimuler la floraison</li>
        <li>Evitez les engrais azotes qui favorisent les feuilles</li>
        <li>Protegez la base de la plante si la temperature descend sous 5 degres</li>
        <li>Palissez les branches sur un support pour guider la croissance</li>
      </ul>

      <h2>La taille du bougainvillier</h2>
      <p>Taillez votre bougainvillier en fin d'hiver (fevrier-mars) avant la reprise de la vegetation. Raccourcissez les branches de l'annee precedente d'un tiers. Supprimez le bois mort et les branches qui se croisent. Apres la premiere vague de floraison en juin, une taille legere stimule une deuxieme floraison en automne.</p>

      <h2>Embellissez votre jardin avec El Gardinero</h2>
      <p><strong>El Gardinero plante et entretient des bougainvilliers a Rabat. Nous selectionnons les varietes les mieux adaptees a votre espace. Contactez-nous pour un devis gratuit !</strong></p>
    `,
  },
  {
    slug: "debroussaillage-terrain-rabat-guide",
    title: "Debroussaillage de terrain a Rabat : guide et reglementation",
    excerpt:
      "Comment debroussailler un terrain a Rabat. Techniques, outils, prix et obligations legales pour le debroussaillage au Maroc.",
    metaDescription:
      "Debroussaillage de terrain a Rabat : techniques, cout et reglementation. Guide complet pour nettoyer et preparer votre terrain au Maroc.",
    keywords: [
      "debroussaillage rabat",
      "nettoyage terrain rabat",
      "defrichage terrain maroc",
      "debroussailleur rabat",
    ],
    category: "Nettoyage",
    publishDate: "2026-01-22",
    readTime: 4,
    relatedService: "nettoyage-jardin",
    content: `
      <h2>Quand et pourquoi debroussailler a Rabat ?</h2>
      <p>Le debroussaillage consiste a eliminer la vegetation sauvage, les broussailles et les herbes hautes d'un terrain. A Rabat, c'est une operation courante avant la construction, l'amenagement d'un jardin ou simplement pour entretenir un terrain laisse a l'abandon. Un terrain non debroussaille attire les serpents, les rongeurs et presente un risque d'incendie en ete.</p>

      <h2>Les techniques de debroussaillage</h2>
      <p>Selon la surface et le type de vegetation, differentes techniques sont utilisees. Pour les petits terrains, un debroussaillage manuel ou mecanique suffit. Pour les grandes parcelles, un engin mecanique est plus efficace.</p>
      <ul>
        <li><strong>Debroussailleuse thermique</strong> : pour les herbes hautes et les ronces sur les terrains accessibles</li>
        <li><strong>Tronconneuse</strong> : pour couper les arbustes et les petits arbres</li>
        <li><strong>Broyeur de vegetaux</strong> : pour transformer les dechets de coupe en copeaux reutilisables</li>
        <li><strong>Mini-pelle</strong> : pour les terrains tres envahis avec arrachage des souches</li>
      </ul>

      <h2>Les etapes d'un debroussaillage professionnel</h2>
      <h3>1. Evaluation du terrain</h3>
      <p>Avant de commencer, un professionnel evalue la surface, le type de vegetation, la pente du terrain et l'accessibilite. Cette evaluation permet d'estimer le temps et le cout de l'intervention.</p>

      <h3>2. Coupe et evacuation</h3>
      <p>La vegetation est coupee de maniere methodique, en commencant par les peripheries. Les dechets verts sont rassembles puis evacues ou broyes sur place. Le broyat peut etre reutilise comme paillage.</p>

      <h3>3. Finition et nettoyage</h3>
      <p>Apres la coupe, le terrain est ratisse pour retirer les debris restants. Si necessaire, un desherbage cible est applique sur les souches pour eviter la repousse.</p>

      <h2>Combien coute un debroussaillage a Rabat ?</h2>
      <p>Le prix varie de 5 a 15 DH par metre carre selon la densite de vegetation et l'accessibilite du terrain. Un terrain de 500 m2 coutera entre 2 500 et 7 500 DH en moyenne.</p>

      <h2>Faites debroussailler par El Gardinero</h2>
      <p><strong>El Gardinero realise le debroussaillage de terrains de toute taille a Rabat, Sale et Temara. Devis gratuit et intervention rapide. Contactez-nous !</strong></p>
    `,
  },
  {
    slug: "palmier-washingtonia-entretien-maroc",
    title: "Le palmier Washingtonia au Maroc : plantation et entretien",
    excerpt:
      "Guide complet du palmier Washingtonia au Maroc : plantation, arrosage, elagage et maladies. Le palmier le plus populaire a Rabat.",
    metaDescription:
      "Tout savoir sur le palmier Washingtonia au Maroc. Plantation, entretien, elagage et protection contre le charancon rouge a Rabat.",
    keywords: [
      "palmier washingtonia maroc",
      "entretien washingtonia rabat",
      "palmier rabat",
      "elagage washingtonia",
    ],
    category: "Taille",
    publishDate: "2026-03-03",
    readTime: 5,
    relatedService: "elagage-palmiers",
    content: `
      <h2>Le Washingtonia, palmier roi des avenues de Rabat</h2>
      <p>Le palmier Washingtonia est le plus repandu dans les rues, les jardins et les residences de Rabat. Avec son tronc elance pouvant atteindre 25 metres et son panache de grandes palmes en eventail, il donne au paysage de Rabat son caractere mediterraneen. Deux especes sont presentes : le Washingtonia robusta (plus fin) et le Washingtonia filifera (plus trapu).</p>

      <h2>Planter un Washingtonia</h2>
      <p>Plantez votre Washingtonia entre avril et juin dans un sol bien draine. Creusez un trou deux fois plus large que la motte. Ce palmier est peu exigeant et pousse aussi bien en plein soleil qu'a mi-ombre. Arrosez abondamment le premier ete pour favoriser l'enracinement. Prevoyez un espace suffisant car il prend de l'ampleur avec le temps.</p>

      <h2>L'entretien annuel</h2>
      <p>Le Washingtonia est un palmier facile a vivre. Une fois etabli, il supporte bien la secheresse et les sols pauvres. Cependant, quelques gestes d'entretien sont necessaires pour le garder en bonne sante.</p>
      <ul>
        <li><strong>Arrosage</strong> : modere en ete (une fois par semaine), quasi nul en hiver</li>
        <li><strong>Engrais</strong> : un apport d'engrais special palmier au printemps accelere la croissance</li>
        <li><strong>Elagage</strong> : retirez les palmes seches une fois par an, de preference au printemps</li>
        <li><strong>Nettoyage du tronc</strong> : enlevez les fibres seches qui s'accumulent sur le stipe</li>
      </ul>

      <h2>Le charancon rouge : menace sur les palmiers</h2>
      <p>Le charancon rouge du palmier est present au Maroc et represente une menace serieuse pour les Washingtonia. Ce coleoptere pond ses oeufs dans le coeur du palmier, et les larves le devorent de l'interieur. Les signes d'infestation incluent des palmes centrales qui jaunissent et s'affaissent. Un traitement preventif annuel est recommande.</p>

      <h3>Signes d'alerte a surveiller</h3>
      <ul>
        <li>Palmes centrales qui tombent anormalement</li>
        <li>Bruit de mastication dans le tronc</li>
        <li>Sciure ou fibres au pied du palmier</li>
        <li>Odeur de fermentation provenant du coeur du palmier</li>
      </ul>

      <h2>Entretien professionnel par El Gardinero</h2>
      <p><strong>El Gardinero assure l'elagage et le traitement preventif de vos palmiers Washingtonia a Rabat. Nos jardiniers grimpeurs interviennent en toute securite. Contactez-nous pour un devis gratuit !</strong></p>
    `,
  },
  {
    slug: "amenagement-terrasse-jardin-rabat",
    title: "Amenagement de terrasse et jardin a Rabat : idees et conseils",
    excerpt:
      "Comment amenager une terrasse ou un balcon en jardin a Rabat. Plantes en pots, mobilier, eclairage et astuces deco.",
    metaDescription:
      "Amenagement de terrasse jardin a Rabat : plantes en pots, mobilier exterieur, eclairage et decoration. Transformez votre terrasse en oasis verte.",
    keywords: [
      "amenagement terrasse rabat",
      "jardin terrasse maroc",
      "decoration terrasse rabat",
      "plantes terrasse maroc",
    ],
    category: "Amenagement",
    publishDate: "2026-02-08",
    readTime: 5,
    relatedService: "amenagement-jardin",
    content: `
      <h2>Transformer votre terrasse en jardin a Rabat</h2>
      <p>A Rabat, de nombreuses habitations disposent d'une terrasse ou d'un balcon qui peut devenir un veritable jardin. Que vous habitiez en appartement ou en villa, votre terrasse peut se transformer en un espace vert agreable et reposant avec les bons choix de plantes et d'amenagement.</p>

      <h2>Choisir les bonnes plantes en pots</h2>
      <p>Sur une terrasse a Rabat, les plantes en pots sont exposees au vent et au soleil direct. Choisissez des especes resistantes qui supportent la culture en conteneur.</p>
      <ul>
        <li><strong>Bougainvillier nain</strong> : compact et fleuri, parfait pour les grands pots</li>
        <li><strong>Jasmin etoile</strong> : grimpant parfume, ideal pour habiller un mur ou un treillage</li>
        <li><strong>Olivier en pot</strong> : decoratif et resistant, il se plait sur les terrasses ensoleillees</li>
        <li><strong>Geraniums</strong> : classiques et genereux en fleurs de mai a octobre</li>
        <li><strong>Herbes aromatiques</strong> : menthe, basilic, romarin, thym en jardiniere</li>
      </ul>

      <h2>L'amenagement du sol</h2>
      <p>Le revetement de votre terrasse influence l'ambiance. Les dalles en bois composite resistent bien au climat de Rabat et apportent de la chaleur. Le carrelage imitation pierre est durable et facile a entretenir. Ajoutez un tapis d'exterieur pour delimiter le coin salon.</p>

      <h2>Creer des zones d'ombre</h2>
      <p>L'ombre est indispensable pour profiter de votre terrasse en ete a Rabat. Un voile d'ombrage tendu entre les murs est la solution la plus simple et economique. Une pergola en bois avec des canisses ou des plantes grimpantes offre un ombrage naturel et esthetique. Un parasol deporte est pratique pour les petits espaces.</p>

      <h3>L'eclairage pour les soirees</h3>
      <ul>
        <li>Guirlandes lumineuses a LED pour une ambiance festive</li>
        <li>Lanternes marocaines en fer forge pour un style traditionnel</li>
        <li>Spots solaires encastres pour eclairer sans fil</li>
        <li>Bougies et photophores pour une lumiere douce et chaleureuse</li>
      </ul>

      <h2>Amenagez votre terrasse avec El Gardinero</h2>
      <p><strong>El Gardinero concoit et realise l'amenagement de votre terrasse ou balcon a Rabat. Plantes, pots, eclairage et mobilier : nous creons votre oasis urbaine. Demandez votre devis gratuit !</strong></p>
    `,
  },
  {
    slug: "jardin-petite-surface-rabat-astuces",
    title: "Amenager un jardin en petite surface a Rabat : astuces pratiques",
    excerpt:
      "Comment creer un beau jardin dans un petit espace a Rabat. Astuces de jardinier pour optimiser chaque metre carre.",
    metaDescription:
      "Amenager un petit jardin a Rabat : astuces pour optimiser l'espace. Plantes verticales, pots, miroirs et amenagement malin pour petites surfaces.",
    keywords: [
      "petit jardin rabat",
      "jardin petite surface maroc",
      "amenagement petit espace vert",
      "jardin patio rabat",
    ],
    category: "Amenagement",
    publishDate: "2026-03-07",
    readTime: 5,
    relatedService: "amenagement-jardin",
    content: `
      <h2>Tirer le meilleur d'un petit jardin a Rabat</h2>
      <p>Beaucoup de maisons a Rabat, notamment dans les quartiers anciens et les residences modernes, disposent d'un petit jardin, d'un patio ou d'une cour interieure. Meme sur 10 ou 20 metres carres, il est possible de creer un espace vert magnifique et fonctionnel avec les bonnes techniques.</p>

      <h2>Jardiner en hauteur</h2>
      <p>Quand la surface au sol est limitee, il faut penser vertical. Les murs vegetaux, les treillages et les jardineres suspendues multiplient votre surface de plantation. Installez des etageres murales pour vos pots de fleurs et vos aromatiques. Les plantes grimpantes comme le jasmin ou la bignone habillent un mur sans prendre de place au sol.</p>

      <h3>Plantes ideales pour les petits espaces</h3>
      <ul>
        <li><strong>Jasmin etoile</strong> : grimpant compact et parfume</li>
        <li><strong>Bougainvillier palisse</strong> : habille un mur avec un minimum d'emprise au sol</li>
        <li><strong>Arbustes boule</strong> : buis, pittosporum nain, lavande taillee en boule</li>
        <li><strong>Plantes retombantes</strong> : lierre, plectranthus, tradescantia en suspension</li>
      </ul>

      <h2>Creer une illusion d'espace</h2>
      <p>Un miroir d'exterieur place sur un mur donne l'illusion de profondeur et double visuellement la surface de votre jardin. Utilisez des couleurs claires pour les murs et les pots. Tracez une allee en diagonale plutot qu'en ligne droite pour allonger la perspective. Limitez le nombre d'especes differentes pour eviter l'effet fouillis.</p>

      <h2>Un coin detente meme dans 10 m2</h2>
      <p>Un petit banc en fer forge, deux chaises pliantes et une table bistrot suffisent pour creer un coin detente agreable. Ajoutez un mini bassin ou une petite fontaine pour le bruit de l'eau. Des coussins et un tapis d'exterieur apportent le confort necessaire pour profiter de votre micro-jardin.</p>

      <h2>L'entretien simplifie</h2>
      <p>Un petit jardin demande moins de temps d'entretien mais plus de precision. Arrosez au goutte-a-goutte pour ne pas gaspiller. Taillez regulierement pour que chaque plante garde sa forme et ne deborde pas sur les autres. Choisissez des pots de qualite avec reserve d'eau pour les absences.</p>

      <h2>El Gardinero amenage votre petit jardin</h2>
      <p><strong>El Gardinero est specialiste de l'amenagement de petits espaces verts a Rabat. Nous optimisons chaque metre carre pour creer le jardin de vos reves. Contactez-nous pour un devis gratuit et une visite conseil !</strong></p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticlesByService(serviceSlug: string): Article[] {
  return articles.filter((a) => a.relatedService === serviceSlug);
}

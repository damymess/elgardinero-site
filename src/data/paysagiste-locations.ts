export interface PaysagisteLocation {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  heroText: string;
  details: string;
  services: string[];
  faq: { question: string; answer: string }[];
  nearbyAreas: string[];
}

export const paysagisteLocations: PaysagisteLocation[] = [
  {
    slug: "rabat",
    name: "Rabat",
    fullName: "Rabat et environs",
    description: "Paysagiste professionnel a Rabat. Conception et amenagement paysager pour villas et residences a Hay Riad, Souissi, Agdal, Temara et Sale. Devis gratuit.",
    heroText: "Paysagiste a Rabat avec 18 ans d'experience. De la conception paysagere a la realisation, je transforme vos espaces exterieurs en jardins d'exception.",
    details: "En tant que paysagiste a Rabat, je propose un accompagnement complet pour tous vos projets d'amenagement paysager. De la conception du plan de jardin a la realisation sur le terrain, chaque projet est pense sur mesure. Je selectionne des vegetaux adaptes au climat semi-aride de Rabat (bougainvilliers, jasmins, lauriers roses, oliviers) et je concois des espaces qui allient esthetique, fonctionnalite et economie d'eau. Que vous construisiez une villa neuve ou souhaitiez transformer un jardin existant, je vous accompagne a chaque etape.",
    services: [
      "Conception paysagere et plan de jardin",
      "Amenagement paysager complet pour villas",
      "Creation de massifs fleuris et rocailles",
      "Installation de gazon naturel ou synthetique",
      "Pose de bordures, allees et dallages",
      "Installation de systemes d'arrosage automatique",
      "Plantation d'arbres, arbustes et haies",
      "Eclairage paysager exterieur",
    ],
    faq: [
      {
        question: "Combien coute un amenagement paysager complet a Rabat ?",
        answer: "Le prix depend de la surface et de la complexite du projet. Pour un jardin de villa standard (200-500 m2), comptez entre 5000 et 25000 DH. Les petits amenagements (massifs, plantation) demarrent a 2000 DH. Envoyez-moi des photos sur WhatsApp pour un devis gratuit personnalise.",
      },
      {
        question: "Quelle est la difference entre un jardinier et un paysagiste ?",
        answer: "Un jardinier assure l'entretien courant (tonte, taille, nettoyage). Un paysagiste concoit et realise des projets d'amenagement complets : plan de jardin, choix des vegetaux, creation d'espaces. Chez El Gardinero, je propose les deux services pour un suivi complet de votre jardin.",
      },
      {
        question: "Combien de temps dure un projet d'amenagement paysager ?",
        answer: "Un petit amenagement (massifs, plantation) prend 2 a 3 jours. Un projet complet de jardin de villa demande 1 a 3 semaines selon la surface et la complexite. Je vous communique un planning precis avant le debut des travaux.",
      },
      {
        question: "Quelles plantes recommandez-vous pour un jardin a Rabat ?",
        answer: "Je recommande des plantes adaptees au climat de Rabat : bougainvilliers, jasmin, lauriers roses, lantanas, oliviers, agrumes, palmiers et gazon kikuyu ou bermuda. Elles sont resistantes a la chaleur et economes en eau.",
      },
      {
        question: "Proposez-vous un entretien apres l'amenagement ?",
        answer: "Oui, je propose des formules d'entretien regulier apres chaque projet d'amenagement paysager. C'est la meilleure facon de proteger votre investissement et garder votre jardin beau toute l'annee.",
      },
    ],
    nearbyAreas: ["Hay Riad", "Souissi", "Agdal", "Temara", "Sale", "Harhoura"],
  },
  {
    slug: "hay-riad",
    name: "Hay Riad",
    fullName: "Hay Riad, Rabat",
    description: "Paysagiste a Hay Riad, Rabat. Amenagement paysager de villas, conception de jardins et entretien d'espaces verts. Devis gratuit WhatsApp.",
    heroText: "Paysagiste a Hay Riad : amenagement et conception de jardins pour les belles villas du quartier.",
    details: "Hay Riad est le quartier ideal pour les projets d'amenagement paysager : grandes villas, terrains spacieux et proprietaires soucieux de la qualite de leur espace exterieur. En tant que paysagiste a Hay Riad, je concois des jardins sur mesure qui tiennent compte des specificites du quartier (sols argileux, exposition au vent oceanique). Je realise des amenagements complets : pelouse, massifs fleuris, haies, allees et arrosage automatique.",
    services: [
      "Amenagement paysager de villas",
      "Conception de plan de jardin",
      "Creation de massifs et haies",
      "Installation de pelouse",
      "Arrosage automatique",
      "Entretien regulier apres amenagement",
    ],
    faq: [
      {
        question: "Combien coute un paysagiste a Hay Riad ?",
        answer: "Les tarifs dependent du projet. Un amenagement complet de jardin de villa a Hay Riad demarre a 5000 DH. Les projets plus importants (grands terrains, piscine paysagee) sont sur devis. Contactez-moi sur WhatsApp pour une estimation gratuite.",
      },
      {
        question: "Quels types de jardins realisez-vous a Hay Riad ?",
        answer: "Je realise tous types de jardins : jardin contemporain, jardin marocain traditionnel, jardin mediterraneen, espace detente avec gazon et massifs. Chaque projet est adapte a vos gouts et a votre budget.",
      },
    ],
    nearbyAreas: ["Souissi", "Agdal", "Rabat"],
  },
  {
    slug: "souissi",
    name: "Souissi",
    fullName: "Souissi, Rabat",
    description: "Paysagiste a Souissi, Rabat. Conception et amenagement paysager haut de gamme pour residences et villas diplomatiques. Devis gratuit.",
    heroText: "Paysagiste a Souissi : des jardins d'exception pour le quartier le plus prestigieux de Rabat.",
    details: "Le quartier Souissi, avec ses ambassades et residences haut de gamme, exige un niveau d'excellence en amenagement paysager. En tant que paysagiste a Souissi, je concois des jardins qui reflètent le standing du quartier : pelouses parfaites, massifs de rosiers, haies de lauriers taillees au millimetre, oliviers centenaires mis en valeur. Je travaille avec des vegetaux nobles et des materiaux de qualite pour des realisations durables.",
    services: [
      "Amenagement paysager haut de gamme",
      "Conception de jardins de prestige",
      "Entretien de rosiers et plantes nobles",
      "Eclairage paysager",
      "Arrosage automatique intelligent",
      "Entretien regulier premium",
    ],
    faq: [
      {
        question: "Travaillez-vous pour les ambassades a Souissi ?",
        answer: "Oui, j'interviens pour des residences diplomatiques et des villas de standing a Souissi. Discretion et qualite de service garanties.",
      },
    ],
    nearbyAreas: ["Hay Riad", "Agdal", "Rabat"],
  },
  {
    slug: "agdal",
    name: "Agdal",
    fullName: "Agdal, Rabat",
    description: "Paysagiste a Agdal, Rabat. Amenagement de jardins, terrasses vegetalisees et espaces verts de coproprietes. Devis gratuit.",
    heroText: "Paysagiste a Agdal : amenagement de jardins de ville et terrasses pour un quartier dynamique.",
    details: "Agdal presente des defis uniques pour un paysagiste : jardins de ville plus compacts, terrasses a vegetaliser et espaces verts de coproprietes a amenager. J'adapte mes conceptions aux contraintes urbaines du quartier tout en maximisant chaque metre carre. Jardinières, murs vegetaux, terrasses fleuries et petits jardins zen : les solutions sont nombreuses pour creer un espace vert agreable meme en plein coeur d'Agdal.",
    services: [
      "Amenagement de petits jardins urbains",
      "Terrasses vegetalisees",
      "Espaces verts de coproprietes",
      "Jardinieres et bacs sur mesure",
      "Amenagement de cours interieures",
      "Entretien regulier",
    ],
    faq: [
      {
        question: "Peut-on amenager un beau jardin sur une petite surface a Agdal ?",
        answer: "Absolument ! Je suis specialise dans l'optimisation des petits espaces. Avec les bonnes plantes et une conception intelligente, meme un jardin de 20 m2 peut devenir un veritable havre de paix.",
      },
    ],
    nearbyAreas: ["Hay Riad", "Souissi", "Rabat"],
  },
  {
    slug: "temara",
    name: "Temara",
    fullName: "Temara",
    description: "Paysagiste a Temara. Amenagement paysager pour villas et nouvelles constructions. Conception de jardins adaptes au climat cotier. Devis gratuit.",
    heroText: "Paysagiste a Temara : des jardins verdoyants adaptes au climat cotier pour vos villas.",
    details: "Temara, en plein developpement, offre de nombreuses opportunites d'amenagement paysager pour les nouvelles constructions. Le climat cotier, plus humide, permet une grande variete de plantations. En tant que paysagiste a Temara, je concois des jardins qui tirent parti de ces conditions favorables tout en protegeant les plantes du vent marin. Gazon luxuriant, haies brise-vent, massifs colores et arrosage automatique econome.",
    services: [
      "Amenagement de jardins neufs",
      "Haies brise-vent",
      "Gazon et pelouse",
      "Plantation adaptee au climat cotier",
      "Arrosage automatique",
      "Entretien regulier",
    ],
    faq: [
      {
        question: "Quelles plantes resistent au vent marin a Temara ?",
        answer: "Les lauriers roses, pittosporum, tamaris, eleagnus et graminées ornementales sont excellents en bord de mer. Je selectionne des plantes resistantes aux embruns pour des jardins durables.",
      },
    ],
    nearbyAreas: ["Harhoura", "Rabat", "Hay Riad"],
  },
  {
    slug: "sale",
    name: "Sale",
    fullName: "Sale",
    description: "Paysagiste a Sale. Amenagement paysager pour villas et residences des nouveaux quartiers. Conception et realisation de jardins. Devis gratuit.",
    heroText: "Paysagiste a Sale : amenagement de jardins pour les nouveaux quartiers residentiels en plein essor.",
    details: "Sale connait un developpement urbain rapide avec de nouveaux quartiers comme Sala Al Jadida et Tabriquet. Les proprietaires de villas neuves ont besoin d'un paysagiste pour creer leur jardin de A a Z. Je propose un service complet d'amenagement paysager : de la conception du plan jusqu'a la plantation et l'installation de l'arrosage automatique. Chaque jardin est concu pour etre beau, fonctionnel et facile a entretenir.",
    services: [
      "Amenagement de jardins neufs",
      "Conception paysagere",
      "Installation complete (gazon, massifs, allees)",
      "Arrosage automatique",
      "Clotures vegetales et haies",
      "Entretien apres amenagement",
    ],
    faq: [
      {
        question: "Intervenez-vous dans les nouveaux quartiers de Sale ?",
        answer: "Oui, j'interviens dans toute la ville de Sale y compris Sala Al Jadida, Tabriquet, Hay Salam et Bettana. Les nouvelles constructions representent une grande partie de mes projets paysagers.",
      },
    ],
    nearbyAreas: ["Rabat", "Temara"],
  },
  {
    slug: "harhoura",
    name: "Harhoura",
    fullName: "Harhoura",
    description: "Paysagiste a Harhoura, Plage des Nations. Amenagement paysager de villas face a l'ocean. Jardins resistants aux embruns. Devis gratuit.",
    heroText: "Paysagiste a Harhoura : des jardins mediterraneens face a l'ocean pour vos villas balneaires.",
    details: "Harhoura et la Plage des Nations offrent un cadre exceptionnel mais exigeant pour l'amenagement paysager. Les embruns marins, le vent et le sol sablonneux demandent une expertise specifique. En tant que paysagiste a Harhoura, je concois des jardins mediterraneens resistants : plantes adaptees au sel, brise-vent naturels, systemes d'arrosage performants et amenagements qui subliment la vue sur l'ocean.",
    services: [
      "Jardins mediterraneens face a l'ocean",
      "Plantes resistantes aux embruns",
      "Brise-vent vegetaux",
      "Amenagement autour de piscines",
      "Arrosage automatique",
      "Entretien regulier",
    ],
    faq: [
      {
        question: "Comment proteger un jardin des embruns a Harhoura ?",
        answer: "J'installe des haies brise-vent (pittosporum, eleagnus, tamaris) et je choisis des plantes resistantes au sel. Avec une conception adaptee, votre jardin peut etre luxuriant meme en bord de mer.",
      },
    ],
    nearbyAreas: ["Temara", "Rabat"],
  },
];

export function getPaysagisteLocation(slug: string): PaysagisteLocation | undefined {
  return paysagisteLocations.find((l) => l.slug === slug);
}

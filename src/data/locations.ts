export interface Location {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  heroText: string;
  details: string;
  neighborhoods?: string[];
  nearbyAreas: string[];
}

export const locations: Location[] = [
  {
    slug: "hay-riad",
    name: "Hay Riad",
    fullName: "Hay Riad, Rabat",
    description: "Jardinier paysagiste a Hay Riad, Rabat. Entretien de villas, amenagement paysager, tonte de pelouse, taille de haies et nettoyage de jardins. Devis gratuit.",
    heroText: "Le quartier Hay Riad regorge de belles villas avec de grands jardins qui meritent un entretien regulier et professionnel.",
    details: "Hay Riad est l'un des quartiers les plus residentiels de Rabat, connu pour ses villas spacieuses et ses espaces verts. Les proprietaires de Hay Riad font appel a mes services de jardinier paysagiste pour l'entretien regulier de leurs pelouses, la taille de haies imposantes, l'amenagement paysager et le nettoyage saisonnier. Je connais bien les specificites du quartier : sols argileux, exposition au vent de l'ocean et varietes de plantes adaptees au climat de Rabat.",
    neighborhoods: ["Hay Riad Centre", "Hay Riad Extension", "Secteur 10", "Secteur 16", "Secteur 21"],
    nearbyAreas: ["Souissi", "Agdal", "Ambassadeurs"],
  },
  {
    slug: "souissi",
    name: "Souissi",
    fullName: "Souissi, Rabat",
    description: "Jardinier paysagiste a Souissi, Rabat. Entretien de jardins de villas et residences, elagage, tonte et amenagement paysager. Devis gratuit sur WhatsApp.",
    heroText: "Souissi, quartier prestigieux de Rabat, abrite des residences avec des jardins d'exception qui necessitent un soin particulier.",
    details: "Le quartier Souissi est repute pour ses ambassades, ses residences haut de gamme et ses jardins luxuriants. En tant que paysagiste a Souissi, j'interviens regulierement aupres de proprietaires exigeants qui souhaitent maintenir leurs espaces verts a un niveau d'excellence. Taille de haies de lauriers, entretien de rosiers, elagage d'oliviers centenaires, conception paysagere : chaque jardin de Souissi a ses propres besoins.",
    neighborhoods: ["Souissi Centre", "Souissi Al Manzah", "Cite OLM"],
    nearbyAreas: ["Hay Riad", "Agdal", "Hassan"],
  },
  {
    slug: "agdal",
    name: "Agdal",
    fullName: "Agdal, Rabat",
    description: "Jardinier paysagiste a Agdal, Rabat. Entretien de jardins, terrasses, amenagement paysager et espaces verts pour particuliers et coproprietes. Devis gratuit.",
    heroText: "Agdal, coeur vivant de Rabat, possede de nombreuses residences avec jardins et terrasses qui meritent une attention reguliere.",
    details: "Le quartier Agdal est un melange de residences modernes et de maisons traditionnelles avec jardin. En tant que jardinier paysagiste a Agdal, j'interviens aussi bien pour l'entretien de petits jardins de ville que pour l'amenagement paysager et les espaces verts de coproprietes. Tonte, desherbage, plantation de fleurs de saison et nettoyage de terrasses font partie de mes prestations les plus demandees dans ce quartier.",
    neighborhoods: ["Agdal Centre", "Place Pietri", "Ibn Sina"],
    nearbyAreas: ["Hay Riad", "Hassan", "Les Orangers"],
  },
  {
    slug: "temara",
    name: "Temara",
    fullName: "Temara",
    description: "Jardinier paysagiste a Temara et ses environs. Entretien de jardins, amenagement paysager, taille, elagage et grand nettoyage pour villas et maisons. Devis gratuit.",
    heroText: "Temara et ses quartiers residentiels offrent un cadre de vie agreable avec des jardins qui demandent un entretien adapte au climat cotier.",
    details: "Temara se developpe rapidement avec de nouvelles zones residentielles dotees de beaux espaces verts. Le climat cotier, plus humide que Rabat centre, favorise une vegetation abondante qui necessite un entretien regulier. En tant que paysagiste a Temara, je m'occupe de la tonte, du desherbage, de la taille des haies brise-vent et de l'amenagement paysager de jardins neufs pour les nouvelles constructions.",
    neighborhoods: ["Temara Centre", "Harhoura", "Ain Atiq", "Skhirat"],
    nearbyAreas: ["Rabat", "Hay Riad"],
  },
  {
    slug: "sale",
    name: "Sale",
    fullName: "Sale",
    description: "Jardinier paysagiste a Sale. Entretien de jardins, amenagement paysager, pelouses, taille de haies et nettoyage pour villas et residences. Devis gratuit WhatsApp.",
    heroText: "Sale, ville jumelle de Rabat, dispose de quartiers residentiels en plein essor avec des jardins qui necessitent un entretien professionnel.",
    details: "Sale connait un developpement urbain important avec de nouveaux quartiers residentiels comme Sala Al Jadida et Tabriquet. Les proprietaires de villas et de maisons avec jardin font de plus en plus appel a un paysagiste professionnel pour l'entretien regulier et l'amenagement paysager. Je propose mes services de tonte, taille, elagage, conception paysagere et grand nettoyage dans toute la ville de Sale.",
    neighborhoods: ["Sala Al Jadida", "Tabriquet", "Hay Salam", "Bettana", "Laayoune"],
    nearbyAreas: ["Rabat", "Temara"],
  },
  {
    slug: "harhoura",
    name: "Harhoura",
    fullName: "Harhoura",
    description: "Jardinier paysagiste a Harhoura, plage des Nations. Entretien de jardins de villas, tonte, elagage et amenagement paysager. Devis gratuit.",
    heroText: "Harhoura et la Plage des Nations, stations balneaires prisees, comptent de magnifiques villas avec jardins face a l'ocean.",
    details: "Harhoura est une destination privilegiee pour les proprietaires de villas avec jardin. Le climat oceanique et les embruns marins imposent des contraintes particulieres : choix de plantes resistantes au sel, entretien frequent des pelouses et protection contre le vent. En tant que paysagiste a Harhoura, je propose des solutions d'amenagement paysager adaptees pour garder votre jardin verdoyant toute l'annee.",
    neighborhoods: ["Harhoura Centre", "Plage des Nations", "Rose Marie", "Val d'Or"],
    nearbyAreas: ["Temara", "Rabat"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

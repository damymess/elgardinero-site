export interface Service {
  slug: string;
  name: string;
  icon: string;
  description: string;
  heroText: string;
  details: string;
  benefits: string[];
  priceRange: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "taille-elagage",
    name: "Taille & Elagage",
    icon: "Scissors",
    description: "Service professionnel de taille de haies et elagage d'arbres a Rabat. Jardinier experimente pour vos arbustes, oliviers et haies de lauriers.",
    heroText: "Un elagage soigne pour des arbres en bonne sante et un jardin harmonieux.",
    details: "La taille et l'elagage sont essentiels pour la sante de vos arbres et l'esthetique de votre jardin. Je taille vos haies de lauriers, thuyas et cyprres avec precision pour leur donner une forme nette et reguliere. Pour les arbres fruitiers (oliviers, orangers, citronniers), j'applique les techniques de taille adaptees a chaque espece pour favoriser la fructification. L'elagage des grands arbres est realise en toute securite avec le materiel professionnel adequat.",
    benefits: [
      "Taille de haies de toutes hauteurs",
      "Elagage d'arbres fruitiers (oliviers, agrumes)",
      "Taille de formation pour jeunes arbres",
      "Evacuation systematique des branches",
      "Conseils sur les periodes ideales de taille",
    ],
    priceRange: "150 - 800 DH",
    image: "/service-taille.jpg",
  },
  {
    slug: "entretien-pelouse",
    name: "Entretien Pelouse",
    icon: "Leaf",
    description: "Entretien professionnel de pelouse a Rabat. Tonte, arrosage, desherbage et traitement pour un gazon vert et dense toute l'annee.",
    heroText: "Un gazon parfait, tondu et entretenu regulierement pour un jardin toujours impeccable.",
    details: "Une pelouse bien entretenue est la base d'un beau jardin. Je propose un service complet d'entretien de gazon : tonte a la bonne hauteur selon la saison, desherbage manuel ou selectif, scarification pour aerer le sol et traitement contre les maladies. Pour les pelouses abimees, je peux realiser un regarnissage ou une replantation complete. Mon objectif : un gazon vert, dense et agreable toute l'annee malgre la chaleur de Rabat.",
    benefits: [
      "Tonte reguliere a hauteur adaptee",
      "Desherbage manuel soigneux",
      "Scarification et aeration du sol",
      "Traitement anti-mousse et maladies",
      "Regarnissage des zones clairsemees",
    ],
    priceRange: "150 - 500 DH",
    image: "/service-pelouse.jpg",
  },
  {
    slug: "nettoyage-jardin",
    name: "Grand Nettoyage",
    icon: "Trash2",
    description: "Nettoyage complet de jardins a Rabat. Remise en etat de jardins abandonnes, evacuation de dechets verts et debroussaillage.",
    heroText: "Votre jardin est envahi ? Je le remets en etat completement, vous ne le reconnaitrez plus.",
    details: "Vous avez un jardin laisse a l'abandon depuis des mois ou des annees ? Je m'en occupe. Mon service de grand nettoyage comprend le debroussaillage complet, l'arrachage des mauvaises herbes, la taille de toute la vegetation envahissante, le ramassage des feuilles mortes et debris, et l'evacuation de tous les dechets verts. Apres mon passage, votre jardin retrouve un aspect propre et soigne, pret pour un entretien regulier.",
    benefits: [
      "Debroussaillage complet",
      "Arrachage des mauvaises herbes",
      "Ramassage des feuilles et debris",
      "Evacuation de tous les dechets verts",
      "Nettoyage des allees et terrasses",
    ],
    priceRange: "500 - 2000 DH",
    image: "/service-nettoyage.jpg",
  },
  {
    slug: "plantation-fleurs",
    name: "Plantation & Massifs",
    icon: "Sprout",
    description: "Service de plantation de fleurs et creation de massifs a Rabat. Amenagement floral adapte au climat marocain pour embellir votre jardin.",
    heroText: "Des plantations colorees et adaptees au climat de Rabat pour un jardin vivant toute l'annee.",
    details: "Je vous aide a choisir et planter des varietes adaptees au climat de Rabat : bougainvilliers, jasmin, lauriers roses, lantanas, plumbagos et bien d'autres. La creation de massifs fleuris apporte couleur et vie a votre jardin. Je prepare le sol, installe les plantes et vous conseille sur l'arrosage et l'entretien. Pour les nouvelles constructions, je propose un amenagement paysager complet avec choix des vegetaux, disposition et plantation.",
    benefits: [
      "Selection de plantes adaptees au climat",
      "Creation de massifs fleuris",
      "Preparation et amendement du sol",
      "Plantation d'arbres et arbustes",
      "Conseils d'entretien personnalises",
    ],
    priceRange: "Sur devis",
    image: "/hero-garden.jpg",
  },
  {
    slug: "amenagement-jardin",
    name: "Amenagement Jardin",
    icon: "TreePine",
    description: "Amenagement paysager a Rabat. Conception et realisation de jardins pour villas et residences. Devis gratuit sur WhatsApp.",
    heroText: "Un jardin concu sur mesure, de la conception a la realisation, adapte a vos envies et a votre budget.",
    details: "Vous construisez une villa ou souhaitez transformer completement votre espace exterieur ? Je propose un service d'amenagement complet : etude de votre terrain, proposition d'un plan paysager, choix des vegetaux, installation de gazon, creation de massifs, pose de bordures et amenagement d'allees. Chaque projet est unique et adapte a vos gouts, votre budget et les specificites de votre terrain (exposition, sol, surface).",
    benefits: [
      "Etude et plan paysager personnalise",
      "Installation de gazon naturel",
      "Creation d'espaces de detente",
      "Pose de bordures et allees",
      "Systeme d'arrosage automatique",
    ],
    priceRange: "Sur devis",
    image: "/apres.jpg",
  },
  {
    slug: "elagage-palmiers",
    name: "Elagage Palmiers",
    icon: "TreePalm",
    description: "Elagage professionnel de palmiers a Rabat. Taille sanitaire et esthetique des washingtonia, phoenix et palmiers dattiers. Retrait des palmes seches et nettoyage du stipe.",
    heroText: "Des palmiers sains et esthetiques grace a un elagage professionnel adapte a chaque espece.",
    details: "Les palmiers sont omnipresents dans les jardins de Rabat et necessitent un entretien regulier. Les palmes seches doivent etre retirees pour des raisons esthetiques mais aussi de securite (risque de chute). Je realise l'elagage de tous types de palmiers : washingtonia, phoenix, palmier dattier, palmier des Canaries. L'intervention comprend la taille des palmes seches, le nettoyage du stipe (tronc), le retrait des grappes de fruits et l'evacuation de tous les dechets vegetaux.",
    benefits: [
      "Retrait des palmes seches et jaunies",
      "Taille sanitaire et esthetique",
      "Nettoyage du stipe (tronc)",
      "Evacuation des dechets vegetaux",
      "Intervention en hauteur securisee",
    ],
    priceRange: "200 - 600 DH",
    image: "/service-taille.jpg",
  },
  {
    slug: "arrosage-automatique",
    name: "Arrosage Automatique",
    icon: "Droplets",
    description: "Installation et entretien de systemes d'arrosage automatique a Rabat. Asperseurs, goutte-a-goutte, programmation et reparation pour pelouses et massifs.",
    heroText: "Un systeme d'arrosage automatique bien concu pour un jardin verdoyant sans effort et des economies d'eau.",
    details: "L'arrosage automatique est indispensable a Rabat ou les etes sont chauds et secs. Je concois et installe des systemes adaptes a votre jardin : asperseurs rotatifs pour les pelouses, goutte-a-goutte pour les massifs et les haies, et programmateurs pour automatiser l'arrosage aux heures optimales (tot le matin ou en soiree). Je repare egalement les systemes existants : remplacement de tuyeres, ajustement de la pression, reprogrammation des cycles.",
    benefits: [
      "Etude et conception du systeme",
      "Installation asperseurs et goutte-a-goutte",
      "Programmation et automatisation",
      "Entretien et reparation",
      "Conseil economie d'eau",
    ],
    priceRange: "Sur devis",
    image: "/hero-garden.jpg",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

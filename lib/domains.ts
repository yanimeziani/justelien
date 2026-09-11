export interface LegalDomain {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
  topics: string[];
  image?: string;
}

export const LEGAL_DOMAINS: LegalDomain[] = [
  {
    id: "famille",
    name: "Droit de la famille",
    shortName: "Famille",
    iconName: "Users",
    description: "Séparation, divorce, garde d'enfants, pension alimentaire, partage des biens et médiation familiale.",
    topics: ["Divorce et séparation", "Garde d'enfants et droits d'accès", "Pension alimentaire", "Médiation familiale", "Filiation et adoption"],
    image: "/images/card_famille.jpg",
  },
  {
    id: "travail",
    name: "Droit du travail & de l'emploi",
    shortName: "Travail",
    iconName: "Briefcase",
    description: "Congédiement, fin d'emploi, indemnités de départ, harcèlement, normes du travail et CNESST.",
    topics: ["Congédiement injustifié", "Négociation d'indemnité de départ", "Harcèlement au travail", "Accident de travail & CNESST", "Clause de non-concurrence"],
    image: "/images/card_travail.jpg",
  },
  {
    id: "affaires",
    name: "Droit des affaires & corporatif",
    shortName: "Affaires",
    iconName: "TrendUp",
    description: "Incorporation d'entreprise, convention entre actionnaires, baux commerciaux et litiges commerciaux.",
    topics: ["Incorporation et structure d'entreprise", "Convention entre actionnaires", "Contrats et partenariats d'affaires", "Baux commerciaux", "Achat et vente d'entreprise"],
    image: "/images/card_affaires.jpg",
  },
  {
    id: "immobilier",
    name: "Droit immobilier & du logement",
    shortName: "Immobilier",
    iconName: "HouseLine",
    description: "Vices cachés, litiges d'achat ou de vente, copropriété divise, servitudes et Tribunal administratif du logement (TAL).",
    topics: ["Vices cachés", "Litiges d'offre d'achat", "Copropriété (condo)", "Bail résidentiel (TAL)", "Troubles de voisinage et servitudes"],
  },
  {
    id: "civil",
    name: "Droit civil & litige",
    shortName: "Civil",
    iconName: "Scales",
    description: "Responsabilité civile, réclamations contractuelles, recouvrement de créances, successions et testaments contestés.",
    topics: ["Responsabilité civile et dommages", "Inexécution de contrat", "Règlement de succession", "Testaments contestés", "Recouvrement de créances"],
  },
  {
    id: "criminel",
    name: "Droit criminel et pénal",
    shortName: "Criminel et pénal",
    iconName: "Shield",
    description: "Défense d'accusations criminelles, infractions au Code de la sécurité routière, alcooviserie et constats d'infraction.",
    topics: ["Conduite avec facultés affaiblies (alcool/drogue)", "Infractions au Code de la sécurité routière", "Voies de fait et menaces", "Vol et fraude", "Demande de pardon / suspension de casier"],
  },
];

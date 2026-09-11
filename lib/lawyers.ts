export interface LawyerProfile {
  id: string;
  badgeNumber: string;
  name: string;
  title: string;
  domainId: "famille" | "travail" | "affaires" | "immobilier" | "civil" | "criminel";
  domainLabel: string;
  city: string;
  regionId: string;
  coordinates: [number, number]; // [lng, lat]
  languages: string[];
  consultationType: "En personne" | "Virtuelle" | "En personne ou virtuelle";
  consultationDetails: string;
  barreauNumber: string;
  barreauSection: string;
  experienceYears: number;
  rateDescription: string;
  bio: string;
  approach: string;
  isDemo?: boolean;
}

export const LAWYERS: LawyerProfile[] = [
  {
    id: "avocat-01-quebec-travail",
    badgeNumber: "01",
    name: "Me Sophie Gagnon",
    title: "Avocat en droit du travail",
    domainId: "travail",
    domainLabel: "Droit du travail & de l'emploi",
    city: "Québec",
    regionId: "quebec",
    coordinates: [-71.2280, 46.8139],
    languages: ["Français"],
    consultationType: "En personne",
    consultationDetails: "Consultation à préciser",
    barreauNumber: "284910",
    barreauSection: "Barreau de Québec",
    experienceYears: 14,
    rateDescription: "Première évaluation sans engagement • Honoraires transparents",
    bio: "Pratique axée sur les litiges d'emploi, les congédiements déguisés, les indemnités de départ et la conciliation auprès du Tribunal administratif du travail.",
    approach: "Une approche pragmatique et humaine favorisant le règlement négocié rapide avant toute procédure formelle.",
    isDemo: true,
  },
  {
    id: "avocat-02-trois-rivieres-famille",
    badgeNumber: "02",
    name: "Me Marc-André Tremblay",
    title: "Avocat en droit de la famille",
    domainId: "famille",
    domainLabel: "Droit de la famille & médiation",
    city: "Trois-Rivières",
    regionId: "trois-rivieres",
    coordinates: [-72.5448, 46.3432],
    languages: ["Français"],
    consultationType: "En personne ou virtuelle",
    consultationDetails: "Consultation en cabinet ou visioconférence",
    barreauNumber: "198302",
    barreauSection: "Barreau de la Mauricie",
    experienceYears: 11,
    rateDescription: "Séance initiale 60 min avec grille d'honoraires forfaitaires",
    bio: "Accompagne les familles en période de transition : séparations équitables, garde partagée et médiation axée sur le bien-être supérieur des enfants.",
    approach: "Clarté, écoute active et recherche constante de solutions durables sans escalade conflictuelle.",
    isDemo: true,
  },
  {
    id: "avocat-03-montreal-affaires",
    badgeNumber: "03",
    name: "Me Laurence Viau-Bélanger",
    title: "Avocate en droit des affaires",
    domainId: "affaires",
    domainLabel: "Droit des affaires & corporatif",
    city: "Montréal",
    regionId: "montreal",
    coordinates: [-73.5673, 45.5017],
    languages: ["Français", "Anglais"],
    consultationType: "En personne ou virtuelle",
    consultationDetails: "Consultation présentielle au centre-ville ou Zoom",
    barreauNumber: "312845",
    barreauSection: "Barreau de Montréal",
    experienceYears: 9,
    rateDescription: "Forfaits pour incorporations et contrats d'actionnaires",
    bio: "Conseille les entrepreneurs québécois, PME et startups dans la structuration corporative, baux commerciaux et négociation d'accords stratégiques.",
    approach: "Vision orientée business, réduction du risque juridique et réactivité contractuelle.",
    isDemo: true,
  },
  {
    id: "avocat-04-laval-immobilier",
    badgeNumber: "04",
    name: "Me Simon Beauchemin",
    title: "Avocat en droit immobilier",
    domainId: "immobilier",
    domainLabel: "Droit immobilier & du logement",
    city: "Laval",
    regionId: "laval",
    coordinates: [-73.7531, 45.6066],
    languages: ["Français", "Anglais"],
    consultationType: "En personne ou virtuelle",
    consultationDetails: "Consultation sur dossier & examen d'expertises",
    barreauNumber: "220194",
    barreauSection: "Barreau de Laval",
    experienceYears: 16,
    rateDescription: "Analyse préliminaire de rapport d'expertise en bâtiment",
    bio: "Spécialisé dans les recours pour vices cachés, non-conformités de construction, conflits de copropriété et servitudes.",
    approach: "Rigueur technique en collaboration étroite avec les ingénieurs et experts en bâtiment du Québec.",
  },
  {
    id: "avocat-05-gatineau-civil",
    badgeNumber: "05",
    name: "Me Caroline Dufour",
    title: "Avocate en litige civil",
    domainId: "civil",
    domainLabel: "Droit civil & responsabilité",
    city: "Gatineau",
    regionId: "gatineau",
    coordinates: [-75.7013, 45.4287],
    languages: ["Français", "Anglais"],
    consultationType: "Virtuelle",
    consultationDetails: "Consultation par visioconférence sécurisée",
    barreauNumber: "277491",
    barreauSection: "Barreau de l'Outaouais",
    experienceYears: 8,
    rateDescription: "Évaluation de réclamation et tarif horaire clair",
    bio: "Défend les particuliers et entreprises dans les litiges contractuels, responsabilité civile et contestations testamentaires.",
    approach: "Analyse franche des chances de succès avant tout dépôt au greffe du tribunal.",
  },
  {
    id: "avocat-06-sherbrooke-criminel",
    badgeNumber: "06",
    name: "Me Vincent Roy",
    title: "Avocat criminaliste",
    domainId: "criminel",
    domainLabel: "Droit criminel et pénal",
    city: "Sherbrooke",
    regionId: "sherbrooke",
    coordinates: [-71.8883, 45.4042],
    languages: ["Français"],
    consultationType: "En personne",
    consultationDetails: "Bureau au centre-ville de Sherbrooke",
    barreauNumber: "189204",
    barreauSection: "Barreau de Saint-François",
    experienceYears: 18,
    rateDescription: "Tarifs forfaitaires par étape procédurale",
    bio: "Représentation rigoureuse devant la Cour du Québec et la Cour supérieure en matière criminelle, facultés affaiblies et constats d'infraction.",
    approach: "Protection absolue des droits garantis par la Charte et préparation minutieuse de chaque dossier.",
  },
];

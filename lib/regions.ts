export interface QuebecRegion {
  id: string;
  name: string;
  shortName: string;
  centerCoordinates: [number, number]; // [lng, lat]
  barreauSection: string;
  leadCount: number;
}

export const QUEBEC_REGIONS: QuebecRegion[] = [
  {
    id: "quebec",
    name: "Québec (Capitale-Nationale)",
    shortName: "Québec",
    centerCoordinates: [-71.2080, 46.8139],
    barreauSection: "Barreau de Québec",
    leadCount: 42,
  },
  {
    id: "montreal",
    name: "Montréal (Région métropolitaine)",
    shortName: "Montréal",
    centerCoordinates: [-73.5673, 45.5017],
    barreauSection: "Barreau de Montréal",
    leadCount: 118,
  },
  {
    id: "trois-rivieres",
    name: "Trois-Rivières (Mauricie)",
    shortName: "Trois-Rivières",
    centerCoordinates: [-72.5448, 46.3432],
    barreauSection: "Barreau de la Mauricie",
    leadCount: 19,
  },
  {
    id: "laval",
    name: "Laval",
    shortName: "Laval",
    centerCoordinates: [-73.7531, 45.6066],
    barreauSection: "Barreau de Laval",
    leadCount: 34,
  },
  {
    id: "gatineau",
    name: "Gatineau (Outaouais)",
    shortName: "Gatineau",
    centerCoordinates: [-75.7013, 45.4287],
    barreauSection: "Barreau de l'Outaouais",
    leadCount: 26,
  },
  {
    id: "sherbrooke",
    name: "Sherbrooke (Estrie)",
    shortName: "Sherbrooke",
    centerCoordinates: [-71.8883, 45.4042],
    barreauSection: "Barreau de Saint-François",
    leadCount: 22,
  },
  {
    id: "levis",
    name: "Lévis (Chaudière-Appalaches)",
    shortName: "Lévis",
    centerCoordinates: [-71.1853, 46.8033],
    barreauSection: "Barreau de Québec",
    leadCount: 15,
  },
];

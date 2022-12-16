export const groupsTuple = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
export const possibleGroupNumbers = [1, 2, 3, 4] as const;

export type LetraGrupo = typeof groupsTuple[number];
export type NumEquipoGrupo = typeof possibleGroupNumbers[number];

export type Team = {
  id: number;
  nombre: string;
  nombreCorto: string;
  remera: string;
  rankingFifa: string;
  apuestas_2_puntaje: number;
  prom_puntaje_apuestas: number;
  ranking_ln: number;
  urlTagEquipo: string;
  repechaje: boolean;
  btnAnexo: boolean;
  grupo: string;
}

export type Match = {
  fecha: string;
  ['numero-partido']: number;
  hora: string;
  grupo: LetraGrupo;
  instancia: string;
  estadio: string;
  tv: string;
  sede: string;
  ciudad: string;
  idpartido: string;
  equipoA: string;
  equipoB: string;
}

export type Fixture = Match[];

export type ApiResponseType<T> = T[];
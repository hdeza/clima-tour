export interface Coordenadas {
  lat: number;
  lng: number;
}

export interface Clima {
  date: string;
  prcp: number;
  pres: number;
  snow: null;
  tavg: number;
  tmax: number;
  tmin: number;
  tsun: null;
  wdir: number;
  wpgt: null;
  wspd: number;
}

export interface ClimaFormatter {
  tavg: number; // Promedio de temperatura
  tmin: number; // Temperatura mínima
  tmax: number; // Temperatura máxima
  prcp: number; // Precipitación
  wdir: number; // Dirección del viento
  wspd: number; // Velocidad del viento
  pres: number; // Presión
  latitude: number; // Latitud de la ciudad seleccionada
  longitude: number; // Longitud de la ciudad seleccionada
}

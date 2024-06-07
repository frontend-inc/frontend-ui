import vitaminCStyles from './vitamen-c';
import brightColorsStyles from './bright-colors';

const MapTypeId = {
  HYBRID: 'hybrid',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain'
};

export type MapConfig = {
  id: string;
  label: string;
  mapId?: string;
  mapTypeId?: string;
  styles?: google.maps.MapTypeStyle[];
};


export const MAP_CONFIGS: MapConfig[] = [
  {
    id: 'light',
    label: 'Light',
    mapId: '49ae42fed52588c3',
    mapTypeId: MapTypeId.ROADMAP,
  },
  {
    id: 'dark',
    label: 'Dark',
    mapId: '739af084373f96fe',
    mapTypeId: MapTypeId.ROADMAP,
  },
  {
    id: 'styled1',
    label: 'Raster / "Bright Colors" (no mapId)',
    mapTypeId: MapTypeId.ROADMAP,
    styles: brightColorsStyles,
  },
  {
    id: 'styled2',
    label: 'Raster / "Vitamin C" (no mapId)',
    mapTypeId: MapTypeId.ROADMAP,
    styles: vitaminCStyles,
  },  
];

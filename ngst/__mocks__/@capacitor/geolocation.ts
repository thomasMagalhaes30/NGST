
export class Position {
  timestamp: number;
  coords:	{
    latitude: number;
    longitude: number;
    accuracy: number;
    altitudeAccuracy: number | null;
    altitude: number | null;
    speed: number | null;
    heading: number | null;
  }
}

// mock utilisé pour les test
export let mockGeolocation : Position = {
  timestamp: 23,
  coords:	{
    latitude: 30,
    longitude: 20,
    accuracy: 2,
    altitudeAccuracy: null,
    altitude: null,
    speed: null,
    heading: null,
  }
}

export const Geolocation = {
  async getCurrentPosition() : Promise<Position> {
    return mockGeolocation;
  }
};


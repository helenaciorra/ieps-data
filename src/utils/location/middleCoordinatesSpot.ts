import coordinates from './coordinates';

interface Coordinate {
  lat: number;
  lng: number;
}

const DEFAULT_CENTER = { lat: -15.77972, lng: -47.92972 };

const averageCoords = (coordinateList: Coordinate[]): Coordinate => {
  const plantsLength = coordinateList?.length || 0;

  if (!plantsLength) {
    return {
      lat: 0,
      lng: 0,
    };
  }

  const sumPlantCoordinates = coordinateList
    .map(coordinates)
    .reduce((total, plant) => ({
      lat: total.lat + plant.lat,
      lng: total.lng + plant.lng,
    }));

  const averageLat = sumPlantCoordinates.lat / plantsLength;
  const averageLng = sumPlantCoordinates.lng / plantsLength;

  return {
    lat: averageLat,
    lng: averageLng,
  };
};

const middleCoordinatesSpot = (coordinateList: Coordinate[]): Coordinate => {
  if (!coordinateList || !coordinateList?.length) {
    return DEFAULT_CENTER;
  }

  const validCoords = coordinateList.filter(
    (item) => item.lat != null && item.lng != null
  );
  const { lat, lng } = averageCoords(validCoords);

  return {
    lat: lat || DEFAULT_CENTER.lat,
    lng: lng || DEFAULT_CENTER.lng,
  };
};

export default middleCoordinatesSpot;

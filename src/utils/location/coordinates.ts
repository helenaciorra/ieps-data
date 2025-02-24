interface Coordinate {
  lat: number;
  lng: number;
}

export const coordinates = (coordinates: Coordinate): Coordinate => {
  const { lat = 0, lng = 0 } = coordinates || {};

  return {
    lat,
    lng,
  };
};

export default coordinates;

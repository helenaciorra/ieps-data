import combineReducers from './config/combineReducers';
import ufCities from './uf-cities/uf-cities.reducer';
import healthPanorama from './health-panorama/health-panorama.reducer';
import visualization from './visualizations/visualizations.reducer';
import indicators from './indicators/indicators.reducer';

const rootReducers = combineReducers({
  ufCities,
  healthPanorama,
  visualization,
  indicators,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;

import { HttpResponse } from '../../utils/HttpFetch';
import { HealthPanorama } from './health-panorama.types';

export const adaptHealthPanorama = (
  healthPanoramaResponse: HttpResponse<HealthPanorama>
): HealthPanorama => {
  return healthPanoramaResponse.data.response.docs[0];
};

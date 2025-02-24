import { HttpFetch, RequestError } from '../../utils/HttpFetch';
import { DispatchFn } from '../types';
import * as actions from './indicators.actions';
import * as api from './indicators.api';
import * as types from './indicators.types';

export const getIndicators = (dispatch: DispatchFn) => {
  return async () => {
    try {
      dispatch(actions.getIndicatorsRequest());

      const response = await  HttpFetch<types.Indicator[]>(api.getIndicatorsQuery());

      if (response.status === 200) {
        dispatch(actions.getIndicatorsSuccess(response));
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getIndicatorsFailure((error as RequestError)?.status || 500));
    }
  };
};


export const getMunIndicators = (dispatch: DispatchFn) => {
  return async (
    codemun:string, year:string, granularidade: string, indicators: string[], columns: string[], fileName: string
) => {

   try {
      dispatch(actions.getMunIndicatorsRequest());

      const response = await  HttpFetch<string>(api.getMunDataDownload(
        codemun,
        year.replaceAll('em ', ''),
        granularidade,
        indicators,
        columns,
      ));

      if (response.status === 200) {

        dispatch(actions.getMunIndicatorsSuccess(response));
        const result = response.data;
        const blob = new Blob([result], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

        const link = document.createElement('a');
        link.setAttribute('style', 'display: none');
        document.body.appendChild(link);
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download=`${fileName}.xlsx`;

        link.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.warn(error)
      // eslint-disable-next-line prettier/prettier
      dispatch(actions.getMunIndicatorsFailure((error as RequestError)?.status || 500));
    } 
  };
};

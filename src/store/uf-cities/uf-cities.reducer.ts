import { availableYears } from '../../utils/date-time/availableYears';
import { Action, InitialActionsStatus } from '../types';
import { adaptCitiesOptions, adaptUfMapData } from './uf-cities.adapters';
import * as types from './uf-cities.types';

const InitialState: types.UfCitiesState = {
  error: {},
  actionsStatus: InitialActionsStatus,
  years: availableYears,
  cityOptions: [],
  ufs: [
    {
      estado: 'Acre',
      estadoAbrev: 'AC',
      id: '22fef10a-20f8-4a94-b151-1270f4b0420d',
      id_estado: '12',
    },
    {
      estado: 'Alagoas',
      estadoAbrev: 'AL',
      id: '470b48b2-64b1-45a2-aedd-8a14edcd5375',
      id_estado: '27',
    },
    {
      estado: 'Amazonas',
      estadoAbrev: 'AM',
      id: '970e5eb7-f22e-4043-af5a-e57b303677dd',
      id_estado: '13',
    },
    {
      estado: 'Amapá',
      estadoAbrev: 'AP',
      id: '5c414d4e-4191-4a8b-91e5-1cc53df22821',
      id_estado: '16',
    },
    {
      estado: 'Bahia',
      estadoAbrev: 'BA',
      id: '651fcd51-ac97-4925-8c58-c4925dbe7d18',
      id_estado: '29',
    },
    {
      estado: 'Ceará',
      estadoAbrev: 'CE',
      id: '3bd5bef4-99bf-482c-ab73-2df2b5ef9a1b',
      id_estado: '23',
    },
    {
      estado: 'Distrito Federal',
      estadoAbrev: 'DF',
      id: '0b12fe34-d950-428a-acd6-31d935830e34',
      id_estado: '53',
    },
    {
      estado: 'Espírito Santo',
      estadoAbrev: 'ES',
      id: '0b99a20a-5009-4f05-bc91-ec9f84b71fde',
      id_estado: '32',
    },
    {
      estado: 'Goiás',
      estadoAbrev: 'GO',
      id: 'a4cd6698-12bd-46f4-a206-618d48e6d0dc',
      id_estado: '52',
    },
    {
      estado: 'Maranhão',
      estadoAbrev: 'MA',
      id: '88829fbf-2412-4ce4-8a19-0d355a87ed0b',
      id_estado: '21',
    },
    {
      estado: 'Minas Gerais',
      estadoAbrev: 'MG',
      id: '2b5b42b1-07d2-49cb-a5bf-45ad9b1315d7',
      id_estado: '31',
    },
    {
      estado: 'Mato Grosso do Sul',
      estadoAbrev: 'MS',
      id: 'cfd9cd2d-3115-4806-8318-74766f4c95f2',
      id_estado: '50',
    },
    {
      estado: 'Mato Grosso',
      estadoAbrev: 'MT',
      id: 'ccb4cd6b-f644-4d9e-8707-00a8f2a9c318',
      id_estado: '51',
    },
    {
      estado: 'Pará',
      estadoAbrev: 'PA',
      id: 'f0ae6a83-d059-4cd3-8dbf-8b2e9022c63c',
      id_estado: '15',
    },
    {
      estado: 'Paraíba',
      estadoAbrev: 'PB',
      id: '9a416bce-00d1-4a2b-bd48-5508d898419a',
      id_estado: '25',
    },
    {
      estado: 'Pernambuco',
      estadoAbrev: 'PE',
      id: 'c1a81bc0-0824-4e8a-9e47-ebdf8519c451',
      id_estado: '26',
    },
    {
      estado: 'Piauí',
      estadoAbrev: 'PI',
      id: '2574e3e5-3114-4645-84e3-0fc08cb19214',
      id_estado: '22',
    },
    {
      estado: 'Paraná',
      estadoAbrev: 'PR',
      id: '2d7a26c8-8457-4adc-b151-58a518ec28f1',
      id_estado: '41',
    },
    {
      estado: 'Rio de Janeiro',
      estadoAbrev: 'RJ',
      id: '76d46c9f-9ba5-4517-8a10-8a6469393402',
      id_estado: '33',
    },
    {
      estado: 'Rio Grande do Norte',
      estadoAbrev: 'RN',
      id: 'ced6b791-0c64-4f1e-a0ad-be33636f1016',
      id_estado: '24',
    },
    {
      estado: 'Rondônia',
      estadoAbrev: 'RO',
      id: '622fa08f-bf05-4e33-8b8d-8a53dd48f60a',
      id_estado: '11',
    },
    {
      estado: 'Roraima',
      estadoAbrev: 'RR',
      id: '92bba442-ddf4-444f-93dc-64d114030a16',
      id_estado: '14',
    },
    {
      estado: 'Rio Grande do Sul',
      estadoAbrev: 'RS',
      id: 'bdadeb54-e9dc-4a31-8beb-852f2dcbdbf2',
      id_estado: '43',
    },
    {
      estado: 'Santa Catarina',
      estadoAbrev: 'SC',
      id: '34926080-ac51-4069-8d54-4cc0af3a3095',
      id_estado: '42',
    },
    {
      estado: 'Sergipe',
      estadoAbrev: 'SE',
      id: '40b492a7-4be4-41d1-9322-1c0be80b35fd',
      id_estado: '28',
    },
    {
      estado: 'São Paulo',
      estadoAbrev: 'SP',
      id: '3749a22d-2c6e-43ec-a354-00351923a243',
      id_estado: '35',
    },
    {
      estado: 'Tocantins',
      estadoAbrev: 'TO',
      id: '94dc2aea-01dd-47f7-808f-24d2e3d0fc14',
      id_estado: '17',
    },
  ],
  ufMapData: [],
};

const ufCitiesReducer = (
  state = InitialState,
  action: Action
): types.UfCitiesState => {
  switch (action.type) {
    case types.GET_CITIES_REQUEST:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: true,
        },
      };

    case types.GET_CITIES_SUCCESS:
      return {
        ...state,
        cityOptions: adaptCitiesOptions(action.payload),
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: false,
        },
      };

    case types.GET_CITIES_FAILURE:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isGettingAll: false,
        },
      };

    case types.GET_UF_DATA_FOR_MAP_REQUEST:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isLoadingUfMapData: true,
        },
      };

    case types.GET_UF_DATA_FOR_MAP_SUCCESS:
      return {
        ...state,
        ufMapData: adaptUfMapData(action.payload),
        actionsStatus: {
          ...state.actionsStatus,
          isLoadingUfMapData: false,
        },
      };

    case types.GET_UF_DATA_FOR_MAP_FAILURE:
      return {
        ...state,
        actionsStatus: {
          ...state.actionsStatus,
          isLoadingUfMapData: false,
        },
      };

    default:
      return state;
  }
};

export default ufCitiesReducer;

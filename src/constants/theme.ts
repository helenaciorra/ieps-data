export const accent = '#f90000';
export const crail = '#BE4345';
export const textColor = '#343A40';
export const burntSienna = '#E57E45';

export const supernova = '#FFC20E';
export const about = supernova;

export const productions = crail;

export const paradiso = '#2B7B6F';
export const paradisoLight = '#5dab9d';
export const paradisoDark = '#004e44';
export const paradisoOpacity = '#2B7B6F60';

export const orange = '#F7941D';
export const orangeLight = '#ffc553';
export const orangeDark = '#be6600';
export const orangeOpacity = '#F7941D90';

export const olivine = '#97C471';
export const olivineLight = '#c9f7a1';
export const olivineDark = '#679344';

export const purple = '#632956';
export const purpleLight = '#925583';
export const purpleDark = '#37002d';

export const azure = '#34679A';
export const azureLight = '#6795cb';
export const azureDark = '#003d6b';
export const moonRaker = '#D4D8F8';

export const silver = '#BDBDBD';
export const scrollSilver = '#C4C4C4';
export const white = '#ffffff';
export const black = '#000000';
export const alto = '#DFDFDF';
export const alto2 = '#DADADA';

export const ghost = '#CED4DA';
export const emperor = '#4F4F4F';
export const outerSpace = '#343A40';
export const paleSky = '#6C757D';
export const trout = '#495057';
export const geyser = '#DEE2E6';
export const osloGray = '#868e96';
export const athensGray = '#F8F9FA';
export const athensGray2 = '#E9ECEF';
export const shark = '#212529';
export const simpleGray = '#828282';
export const mineShaft = '#333333';
export const chicago = '#575756';

export const cityDefault = '#e5e5e5';
export const citySelected = '#F7941D';
export const citySelectedRegion = '#2b7b6f';

export const jambalaya = '#543412';
export const chelseaGem = '#AC6100';
export const pizazz = '#FF9400';
export const amber = '#FFC001';
export const marzipan = '#F7D688';
export const whiteRock = '#E7E7D2';
export const moonRaker2 = '#D3D8F8';
export const bilobaFlower = '#AAB5EC';
export const shipCove = '#7784C1';
export const eastBay = '#445793';
export const downriver = '#112C63';

export const loafer = '#112C63';
export const swansDown = '#D9EBE8';
export const cinderella = '#FCE8DA';
export const twilight = '#EBDEE5';
export const halfBaked = '#85B3CF';
export const lily = '#BE96AC';

export const poloBlue = '#87B3CF';
export const azure2 = '#2F6799';
export const oracle = '#357A6F';

export const appLeftPadding = '30px';

export const sideNavWidth = '310px';

export const zIndexBackground = -1;
export const zIndexDefault = 1;
export const zIndexHeader = 10;
export const zIndexOverlay = 20;

export const pageContentTitle = '2.4rem';

export const theme = {
  palette: {
    black,
    white,
    red: 'red',
    home: {
      contrastText: black,
      dark: supernova,
      main: supernova,
      light: supernova,
    },
    visualization: {
      contrastText: black,
      dark: paradisoLight,
      main: paradiso,
      light: paradisoDark,
    },
    panorama: {
      contrastText: white,
      dark: orangeLight,
      main: orange,
      light: orangeDark,
    },
    projects_gallery: {
      contrastText: white,
      dark: olivineLight,
      main: olivine,
      light: olivineDark,
    },
    downloads: {
      contrastText: white,
      dark: purpleLight,
      main: purple,
      light: purpleDark,
    },
    methods: {
      contrastText: white,
      dark: azureLight,
      main: azure,
      light: azureDark,
    },
    about: {
      contrastText: white,
      dark: supernova,
      main: supernova,
      light: supernova,
    },
    productions: {
      contrastText: white,
      dark: crail,
      main: crail,
      light: crail,
    },
  },
};

export const getPanoramaDataColors = ({
  shouldUseRegionData,
  secondary,
}: {
  shouldUseRegionData: boolean,
  secondary?: boolean,
}) => {
  if (secondary) {
    return shouldUseRegionData ? paradisoOpacity : orangeOpacity;
  }

  return shouldUseRegionData ? paradiso : orange;
};

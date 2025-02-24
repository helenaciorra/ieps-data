import { theme } from '../../constants/theme';
import {
  AboutIcon,
  DataDownloadsIcon,
  LocalHealthPanoramaIcon,
  LogoIcon,
  MethodsAndDocumentationIcon,
  ProjectsGalleryIcon,
  VisualizationsIcon,
  AboutLogoIcon,
  DataDownloadsLogoIcon,
  LocalHealthPanoramaLogoIcon,
  MethodsAndDocumentationLogoIcon,
  ProjectsGalleryLogoIcon,
  VisualizationsLogoIcon,
  ProductionsIcon,
  ProductionsLogoIcon
} from '../../components/icons';

// eslint-disable-next-line prettier/prettier
export enum NavLinksEnum  {
  HOME = '/',
  VISUALIZATIONS = '/visualizations',
  LOCAL_HEATH_PANORAMA = '/local-health-panorama',
  PROJECTS_GALLERY = '/projects-gallery',
  DATA_DOWNLOAD = '/data-downloads',
  METHOD_DOCUMENTATION =  '/methods-documentation',
  ABOUT = '/about',
  PRODUCTIONS = '/productions',
}

export type SideNavLink = {
  text: string,
  url: NavLinksEnum,
  color: string,
  icon: ({highlightOnHover}: {highlightOnHover?: boolean}) => JSX.Element,
  highlightLogoIcon: () => JSX.Element,
};


export const NAV_LINKS_MAP: {[key:string]:SideNavLink} = {
  [NavLinksEnum.HOME]: {
    text: '',
    url: NavLinksEnum.HOME,
    color: theme.palette.home.main,
    icon: LogoIcon,
    highlightLogoIcon: LogoIcon,
  },
  [NavLinksEnum.LOCAL_HEATH_PANORAMA]: {
    text: 'Panorama de Saúde Local',
    url: NavLinksEnum.LOCAL_HEATH_PANORAMA,
    color: theme.palette.panorama.main,
    icon:  VisualizationsIcon, // LocalHealthPanoramaIcon
    highlightLogoIcon: VisualizationsLogoIcon, // LocalHealthPanoramaLogoIcon
  },
  [NavLinksEnum.VISUALIZATIONS]: {
    text: 'Visualização de Indicadores',
    url: NavLinksEnum.VISUALIZATIONS,
    color: theme.palette.visualization.main,
    icon: LocalHealthPanoramaIcon, // VisualizationsIcon
    highlightLogoIcon: LocalHealthPanoramaLogoIcon, // VisualizationsLogoIcon
  },
  [NavLinksEnum.DATA_DOWNLOAD]: {
    text: 'Download dos dados',
    url: NavLinksEnum.DATA_DOWNLOAD,
    color: theme.palette.downloads.main,
    icon: ProjectsGalleryIcon, // DataDownloadsIcon
    highlightLogoIcon: ProjectsGalleryLogoIcon, // DataDownloadsLogoIcon
  },
  [NavLinksEnum.METHOD_DOCUMENTATION]: {
    text: 'Métodos e Documentação',
    url: NavLinksEnum.METHOD_DOCUMENTATION,
    color: theme.palette.methods.main,
    icon: DataDownloadsIcon, // MethodsAndDocumentationIcon
    highlightLogoIcon: DataDownloadsLogoIcon, // MethodsAndDocumentationLogoIcon
  },
  [NavLinksEnum.PROJECTS_GALLERY]: {
    text: 'Galeria de Projetos',
    url: NavLinksEnum.PROJECTS_GALLERY,
    color: theme.palette.projects_gallery.main,
    icon: MethodsAndDocumentationIcon, // ProjectsGalleryIcon
    highlightLogoIcon: MethodsAndDocumentationLogoIcon, // ProjectsGalleryLogoIcon
  },
  [NavLinksEnum.PRODUCTIONS]: {
    text: 'Produções',
    url: NavLinksEnum.PRODUCTIONS,
    color: theme.palette.productions.main,
    icon: ProductionsIcon,
    highlightLogoIcon: ProductionsLogoIcon,
  },
  [NavLinksEnum.ABOUT]: {
    text: 'Sobre o IEPS Data',
    url: NavLinksEnum.ABOUT,
    color: theme.palette.about.main,
    icon: AboutIcon,
    highlightLogoIcon: AboutLogoIcon,
  },
};




export const SIDE_NAV_LINKS: SideNavLink[] = Object.values(NAV_LINKS_MAP)
  .filter(link => link.url !== NavLinksEnum.HOME);

import React, { useEffect, useState } from 'react';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useQueryParam } from 'use-query-params';
import { ActionsStatus, SelectOption } from '../../store/types';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/modal';
import AboutHealthPanorama from './components/AboutHealthPanorama';
import ChartsLocalHealthPanorama from './components/ChartsLocalHealthPanorama';
import ReportError from './components/ReportError';
import { useDispatch, useSelector } from '../../store';
import { getCities, getUfMapData } from '../../store/uf-cities/uf-cities.sagas';
import { getHealthPanorama } from '../../store/health-panorama/health-panorama.sagas';
import * as ufCitiesSelectors from '../../store/uf-cities/uf-cities.selectors';
import * as healthPanoramaSelectors from '../../store/health-panorama/health-panorama.selectors';
import {
  BasicAttentionPanorama,
  DemographicPopulationPanorama,
  HealthExpendingPanorama,
  HealthPanorama,
  MortalityPanorama,
  RegionHealthResourcesPanorama,
} from '../../store/health-panorama/health-panorama.types';
import InvalidQuery from './components/InvalidQuery';
import Head from '../../components/Head';
import { availableYears } from '../../utils/date-time/availableYears';
import ContextMessage from '../../components/ContextMessage';
import PopUp2022 from './components/PopUp2022';
import PopUp2023 from './components/PopUp2023';

export type ContextMessagePositionProps = {
  x: number,
  y: number,
};

const downloadErrorMessage =
  'Não foi possível fazer o download da imagem, tente novamente mais tarde e caso o errro persista entre em contato conosco.';

const LocalHealthPanorama = ({ location }) => {
  const dispatch = useDispatch();
  const years = useSelector<SelectOption[]>(ufCitiesSelectors.selectYears);
  const cityOptions = useSelector<SelectOption[]>(
    ufCitiesSelectors.selectCityOptions
  );
  const ufMapData = useSelector<HealthPanorama[]>(
    ufCitiesSelectors.selectUfMapData
  );
  const mapsLoadings = useSelector<
    ActionsStatus & { isLoadingUfMapData?: boolean }
  >(ufCitiesSelectors.selectLoadings);
  const healthPanorama = useSelector<HealthPanorama>(
    healthPanoramaSelectors.selectHealthPanorama
  );
  const basicAttention = useSelector<BasicAttentionPanorama>(
    healthPanoramaSelectors.selectBasicAttention
  );

  const demographicPopulation = useSelector<DemographicPopulationPanorama>(
    healthPanoramaSelectors.selectDemographicPopulation
  );
  const regionHealthResources = useSelector<RegionHealthResourcesPanorama>(
    healthPanoramaSelectors.selectRegionHealthResources
  );
  const mortalityPanorama = useSelector<MortalityPanorama>(
    healthPanoramaSelectors.selectMortalityPanorama
  );
  const healthExpendingPanorama = useSelector<HealthExpendingPanorama>(
    healthPanoramaSelectors.selectHealthExpendingPanorama
  );

  const [openModal, setOpenModal] = useState(false);
  const [openInvalidQueryModal, setOpenInvalidQueryModal] = useState(false);
  const [cityQuery, setCityQuery] = useState({
    city: '',
    year: `em ${availableYears[0]}`,
    cityCode: '',
    uf: '',
    region: '',
  });
  const [shouldUseRegionData, setUseRegionData] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [showUpSignature, setShowUpSignature] = useState(false);
  const [isMessageHidden, setIsMessageHidden] = useState(false);
  const [isMensageContent, setIsMensageContent] = useState(
    'Infelizmente, os dados para esse período não estão disponíveis.'
  );
  const [contextMessagePosition, setContextMessagePosition] =
    useState<ContextMessagePositionProps>({ x: 0, y: 0 });

  const [popUp2022, setPopUp2022] = useState(true);
  const [popUp2023, setPopUp2023] = useState(true);

  const [city] = useQueryParam('city');
  const [cityCode] = useQueryParam('cityCode');
  const [region] = useQueryParam('region');
  const [uf] = useQueryParam('uf');
  const [year] = useQueryParam('year');
  const [locationQuery] = useQueryParam('location');

  useEffect(() => {
    if (city && region && uf && year) {
      const query = {
        city: `${city}`,
        region: `${region}`,
        cityCode: `${cityCode}`,
        uf: `${uf}`,
        year: `${year}`,
      };

      setCityQuery(query);
      getUfMapData(dispatch)(query.uf, query.year);
      getHealthPanorama(dispatch)(
        query.cityCode,
        query.year,
        query.uf,
        query.region
      );
      setUseRegionData(locationQuery === 'region');
    }
  }, [location]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [cityQuery, shouldUseRegionData]);

  const handleMessageHidden = (hide: boolean) => {
    setIsMessageHidden(hide);
  };

  const handleMessageContent = (value: string) => {
    setIsMensageContent(value);
  };

  const handleMouseContextMessagePosition = (
    position: ContextMessagePositionProps
  ) => {
    setContextMessagePosition(position);
  };

  const handleToggleToRegionData = (checked: boolean) => {
    setUseRegionData(checked);
    updateUrlQuery(
      cityQuery.city,
      cityQuery.cityCode,
      cityQuery.region,
      cityQuery.uf,
      cityQuery.year,
      checked
    );
  };

  const handleDownloadChartImage = async (htmElementID: string) => {
    if (document == null) {
      // eslint-disable-next-line no-console
      console.warn(downloadErrorMessage);
      return;
    }

    try {
      setShowUpSignature(true);

      const node = document.getElementById(htmElementID);

      if (node == null) {
        // eslint-disable-next-line no-console
        console.warn(downloadErrorMessage);
        return;
      }

      const blob = await domToImage.toBlob(node);

      saveAs(
        blob,
        `${healthPanorama.nomemun.replace(' ', '_')}(${
          healthPanorama.estadoAbrev
        })_em_${healthPanorama.ano}_${healthPanorama.noRegiao}.png`
      );

      setShowUpSignature(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(downloadErrorMessage, error);
    }
  };

  const handleReportError = () => {
    setOpenModal(true);
  };

  const handleCloseReportError = () => {
    setOpenModal(false);
  };

  const handleCloseInvalidQueryModal = () => {
    setOpenInvalidQueryModal(false);
  };

  const handleChangeCityName = (city: string) => {
    const query = {
      ...cityQuery,
      city,
    };

    setCityQuery(query);
    getCities(dispatch)(query.city, query.year);
  };

  const handleChangeYear = (year: string) => {
    setCityQuery((current) => ({
      ...current,
      year,
    }));
  };

  const handleSelectYear = (year: string) => {
    const query = {
      ...cityQuery,
      year,
    };

    setCityQuery(query);

    const yearFormatted = +query.year.replace('em ', '');

    switch (true) {
      case query.cityCode === '421265' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '422000' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '431454' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '500627' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '150475' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      default:
        break;
    }

    if (
      query.cityCode &&
      query.year &&
      query.city &&
      query.region &&
      query.uf
    ) {
      getUfMapData(dispatch)(query.uf, query.year);
      getHealthPanorama(dispatch)(
        query.cityCode,
        query.year,
        query.uf,
        query.region
      );
      updateUrlQuery(
        query.city,
        query.cityCode,
        query.region,
        query.uf,
        query.year,
        shouldUseRegionData
      );
    }
  };

  const handleSelectCity = (cityOption: SelectOption) => {
    const query = {
      ...cityQuery,
      city: cityOption.label,
      cityCode: cityOption.value,
      uf: cityOption.data.uf,
      region: cityOption.data.regiao,
    };

    setCityQuery(query);
    const yearFormatted = +query.year.replace('em ', '');

    switch (true) {
      case query.cityCode === '421265' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '422000' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '431454' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '500627' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      case query.cityCode === '150475' && yearFormatted <= 2013:
        setOpenInvalidQueryModal(true);
        return;
      default:
        break;
    }

    if (query.cityCode && query.year) {
      getUfMapData(dispatch)(query.uf, query.year);
      getHealthPanorama(dispatch)(
        query.cityCode,
        query.year,
        query.uf,
        query.region
      );
      updateUrlQuery(
        query.city,
        query.cityCode,
        query.region,
        query.uf,
        query.year,
        shouldUseRegionData
      );
    }
  };

  const updateUrlQuery = (
    city: string,
    cityCode: string,
    region: string,
    uf: string,
    year: string,
    useRegionData: boolean
  ) => {
    const location = useRegionData ? 'region' : 'city';

    window?.history?.pushState(
      'IEPS',
      'IEPS',
      `/local-health-panorama?city=${city}&cityCode=${cityCode}&region=${region}&uf=${uf}&year=${year}&location=${location}`
    );
  };

  useEffect(() => {
    if(cityQuery.year == 'em 2022')
    {  
      setPopUp2022(false);
    }
    if(cityQuery.year == 'em 2023')
    {  
      setPopUp2023(false);
    }
  }, [cityQuery]);

  return (
    <Layout location={location}>
      <Head siteTitle="Panorama de Saúde Local"></Head>

      <ContextMessage
        message={isMensageContent}
        position={contextMessagePosition}
        hide={isMessageHidden}
      />

      <PopUp2022 isHidden={popUp2022}/>
      <PopUp2023 isHidden={popUp2023}/>

      <ChartsLocalHealthPanorama
        year={cityQuery.year}
        cities={cityOptions}
        years={years}
        cityCode={cityQuery.cityCode}
        pageUrl={currentUrl}
        ufData={ufMapData}
        cityName={cityQuery.city}
        isLoadingUfMapData={mapsLoadings.isLoadingUfMapData}
        shouldUseRegionData={shouldUseRegionData}
        healthPanorama={healthPanorama}
        basicAttentionPanorama={basicAttention}
        demographicPopulationPanorama={demographicPopulation}
        regionHealthResourcesPanorama={regionHealthResources}
        mortalityPanorama={mortalityPanorama}
        healthExpendingPanorama={healthExpendingPanorama}
        onToggleToRegionData={handleToggleToRegionData}
        onDownloadChartImage={handleDownloadChartImage}
        onReportError={handleReportError}
        onChangeCityName={handleChangeCityName}
        onChangeYear={handleChangeYear}
        onSelectCity={handleSelectCity}
        onSelectYear={handleSelectYear}
        showUpSignature={showUpSignature}
        onMouseContextMessagePosition={handleMouseContextMessagePosition}
        onMessageHidden={handleMessageHidden}
        onMessageContent={handleMessageContent}
      />
      <AboutHealthPanorama />
      <Modal open={openModal} hideModal={handleCloseReportError}>
        <ReportError pageUrl={currentUrl} email="contato@ieps.org.br" />
      </Modal>
      <Modal
        open={openInvalidQueryModal}
        hideModal={handleCloseInvalidQueryModal}
      >
        <InvalidQuery onClose={handleCloseInvalidQueryModal} />
      </Modal>
    </Layout>
  );
};

export default LocalHealthPanorama;

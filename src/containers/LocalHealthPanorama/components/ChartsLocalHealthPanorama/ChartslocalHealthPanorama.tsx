import React from 'react';
import * as S from './ChartsLocalHealthPanorama.css';
import ChartHeader from '../ChartHeader';
import PopulationAndDemography from '../PopulationAndDemography/PopulationAndDemograph';
import RegionResources from '../RegionResources';
import ChartsSectionHeader from '../ChartsSectionHeader';
import HealthExpenses from '../HealthExpenses';
import UfMapChart from '../../../../components/UfMapChart';
import { SelectOption } from '../../../../store/types';
import * as healthPanoramaTypes from '../../../../store/health-panorama/health-panorama.types';
import MortalityAndMorbidity from '../MortalityAndMorbidity';
import PrimaryCare from '../PrimaryCare';
import ImageSignature from '../../../../components/ImageSignature';
import { ContextMessagePositionProps } from '../../LocalHealthPanorama';

type Props = {
  year: string,
  pageUrl: string,
  years: SelectOption[],
  cities: SelectOption[],
  cityCode?: string,
  cityName?: string,
  shouldUseRegionData: boolean,
  healthPanorama: healthPanoramaTypes.HealthPanorama,
  ufData: healthPanoramaTypes.HealthPanorama[],
  isLoadingUfMapData?: boolean,
  basicAttentionPanorama: healthPanoramaTypes.BasicAttentionPanorama,
  demographicPopulationPanorama: healthPanoramaTypes.DemographicPopulationPanorama,
  regionHealthResourcesPanorama: healthPanoramaTypes.RegionHealthResourcesPanorama,
  mortalityPanorama: healthPanoramaTypes.MortalityPanorama,
  healthExpendingPanorama: healthPanoramaTypes.HealthExpendingPanorama,
  showUpSignature: boolean,
  onDownloadChartImage: (htmElementID: string) => void,
  onReportError: () => void,
  onChangeCityName: (name: string) => void,
  onChangeYear: (year: string) => void,
  onSelectCity: (cityId: SelectOption) => void,
  onSelectYear: (year: string) => void,
  onToggleToRegionData: (checked: boolean) => void,
  onMouseContextMessagePosition: (
    position: ContextMessagePositionProps
  ) => void,
  onMessageHidden: (hide: boolean) => void,
  onMessageContent: (value: string) => void,
};

const downloadHtmlId = 'ChartsLocalHealthPanorama';

const ChartsLocalHealthPanorama = ({
  year,
  cities,
  years,
  pageUrl,
  healthPanorama,
  ufData,
  cityName,
  isLoadingUfMapData,
  shouldUseRegionData,
  basicAttentionPanorama,
  demographicPopulationPanorama,
  regionHealthResourcesPanorama,
  mortalityPanorama,
  healthExpendingPanorama,
  showUpSignature,
  onDownloadChartImage,
  onReportError,
  onChangeCityName,
  onChangeYear,
  onSelectCity,
  onSelectYear,
  onToggleToRegionData,
  onMouseContextMessagePosition,
  onMessageHidden,
  onMessageContent,
}: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content id={downloadHtmlId}>
          <S.WrapperHeader>
            <ChartsSectionHeader
              year={year}
              years={years}
              cities={cities}
              downloadHtmlId={downloadHtmlId}
              pageUrl={pageUrl}
              cityName={cityName}
              shouldUseRegionData={shouldUseRegionData}
              onToggleToRegionData={onToggleToRegionData}
              onDownloadChartImage={onDownloadChartImage}
              onReportError={onReportError}
              onChangeCityName={onChangeCityName}
              onChangeYear={onChangeYear}
              onSelectCity={onSelectCity}
              onSelectYear={onSelectYear}
            />
          </S.WrapperHeader>
          <S.WrapperContent>
            <S.MapAndPopulation>
              <div id="map-and-population-container">
                <ChartHeader>perfil</ChartHeader>
                <UfMapChart
                  isLoadingUfMapData={isLoadingUfMapData}
                  data={healthPanorama}
                  ufData={ufData}
                  shouldUseRegionData={shouldUseRegionData}
                />
                <S.Separator />
              </div>
              <PopulationAndDemography
                shouldUseRegionData={shouldUseRegionData}
                onMessageHidden={onMessageHidden}
                data={demographicPopulationPanorama}
                onMouseContextMessagePosition={onMouseContextMessagePosition}
                onMessageContent={onMessageContent}
              />
            </S.MapAndPopulation>
            <S.AttentionAndMortality>
              <PrimaryCare
                shouldUseRegionData={shouldUseRegionData}
                basicAttention={basicAttentionPanorama}
                onMouseContextMessagePosition={onMouseContextMessagePosition}
                onMessageHidden={onMessageHidden}
                onMessageContent={onMessageContent}
              />
              <MortalityAndMorbidity
                shouldUseRegionData={shouldUseRegionData}
                data={mortalityPanorama}
              />
            </S.AttentionAndMortality>
            <S.ResourcesAndExpanses>
              <RegionResources data={regionHealthResourcesPanorama} />
              <HealthExpenses
                shouldUseRegionData={shouldUseRegionData}
                data={healthExpendingPanorama}
              />
            </S.ResourcesAndExpanses>
          </S.WrapperContent>
          <ImageSignature showUp={showUpSignature} />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default ChartsLocalHealthPanorama;

import React from 'react';
import Clipboard from '../../../../components/Clipboard';
import {
  BoxArrowUp,
  Download,
  ExclamationCircle,
} from '../../../../components/icons';
import Select from '../../../../components/select/Select';
import Toggle from '../../../../components/toggle';
import { SelectOption } from '../../../../store/types';
import debounce from '../../../../utils/debounce';
import * as S from './ChartsSectionHeader.css';

type Props = {
  year: string,
  years: SelectOption[],
  cities: SelectOption[],
  pageUrl: string,
  downloadHtmlId: string,
  shouldUseRegionData: boolean,
  cityName?: string
  onDownloadChartImage: (htmElementID: string) => void,
  onReportError: () => void,
  onChangeCityName: (name: string) => void,
  onChangeYear: (year: string) => void,
  onSelectCity: (cityId: SelectOption) => void,
  onSelectYear: (year: string) => void,
  onToggleToRegionData: (checked: boolean) => void,
};

const ChartsSectionHeader = ({
  year,
  years,
  cities,
  downloadHtmlId,
  pageUrl,
  shouldUseRegionData,
  onDownloadChartImage,
  onReportError,
  onChangeCityName,
  onChangeYear,
  onSelectCity,
  onSelectYear,
  onToggleToRegionData,
  cityName,
}: Props) => {
  const handleChangeCityName = (value: string) => {
    onChangeCityName(value);
  };

  const handleSelectCityName = (option: SelectOption) => {
    onSelectCity(option);
  };

  const handleChangeYear = (value: string) => {
    onChangeYear(value);
  };

  const handleSelectYear = (option: SelectOption) => {
    onSelectYear(option.value);
  };

  return (
    <S.Container>
      <S.Selects>
        <div id="select-city">
          <Select
            isDataFromServer
            placeholder="Digite o nome da cidade desejada"
            className="city-select"
            options={cities}
            onChange={debounce(handleChangeCityName)}
            onSelect={handleSelectCityName}
            theme="panorama"
            value={cityName ? cityName : ''}
          />
        </div>
        <div id="select-year">
          <Select
            value={year}
            options={years}
            isOptions={true}
            onChange={handleChangeYear}
            onSelect={handleSelectYear}
            theme="panorama"
          />
        </div>
      </S.Selects>
      <S.Buttons>
        <S.SwitchContainer>
          <p>
            Panorama por <br />
            região de saúde
          </p>
          <Toggle
            shouldUseRegionData={shouldUseRegionData}
            onToggle={onToggleToRegionData}
          />
        </S.SwitchContainer>
        <S.ButtonsContainer>
          <S.DownloadButton
            onClick={() => onDownloadChartImage(downloadHtmlId)}
          >
            <Download />
          </S.DownloadButton>
          <S.SharedButton>
            <Clipboard copyValue={pageUrl}>
              <BoxArrowUp />
            </Clipboard>
          </S.SharedButton>
          <S.InfoButton onClick={onReportError}>
            <ExclamationCircle />
          </S.InfoButton>
        </S.ButtonsContainer>
      </S.Buttons>
    </S.Container>
  );
};

export default ChartsSectionHeader;

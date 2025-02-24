import React, { useState } from 'react';
import Select from '../../../../components/select';
import { SelectOption } from '../../../../store/types';
import * as S from './DownloadFilter.css';

type Props = {
  cityOptions: SelectOption[],
  years: SelectOption[],
  granularity: SelectOption[],
  multiple?: boolean,
  submitted?: boolean,
  indicatorsCount: number,
  onSearch: (query: {
    codmun: string,
    granularidade: string,
    ano: string,
  }) => void,
  onLoadCities: (cityNameQUery: string) => void,
};

const DownloadFilter = ({
  submitted,
  years = [],
  granularity,
  indicatorsCount,
  onSearch,
}: Props) => {
  const [downloadQuery, setDownloadQuery] = useState({
    codmun: '',
    ano: `${years[0].label}`,
    granularidade: 'brazil_data_ieps',
  });

  const handleSelect = (name: string) => (data: SelectOption) => {
    const query = {
      ...downloadQuery,
      [name]: data.value,
    };
    setDownloadQuery(query);
    onSearch(query);
  };

  const labelSetter = (values: string[]): string => {
    if (values.length === years.length) {
      return 'em todos os anos';
    }

    if (values.length === 0) {
      return '';
    }

    const [first, ...rest] = values;
    const restYears = rest.map((y) => y.replace('em ', '')).join(', ');

    if (values.length === 1) {
      return first;
    }

    return `${first}, ${restYears}`;
  };

  const renderValidation = () => {
    if (!submitted) {
      return null;
    }

    if (!downloadQuery.ano) {
      return <S.Error>Por favor, selecione ao menos um ano</S.Error>;
    }

    if (indicatorsCount === 0) {
      return (
        <S.Error>Por favor, selecione ao menos um indicador abaixo</S.Error>
      );
    }

    return null;
  };

  return (
    <S.DownloadFilter>
      <S.Block flex="1">
        <Select
          label="Granularidade"
          value={downloadQuery.granularidade}
          options={granularity}
          onSelect={handleSelect('granularidade')}
          theme="downloads"
          suggest={false}
          isOptions={true}
        />
      </S.Block>
      <S.Block flex="1">
        <Select
          label="Ano"
          name="ano"
          multiple
          initialValue={downloadQuery.ano}
          options={years}
          suggest={false}
          onSelect={handleSelect('ano')}
          theme="downloads"
          labelSetter={labelSetter}
          isOptions={true}
        />
        {renderValidation()}
      </S.Block>
    </S.DownloadFilter>
  );
};

export default DownloadFilter;

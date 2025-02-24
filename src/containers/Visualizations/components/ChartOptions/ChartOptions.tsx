/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownShort } from '../../../../components/icons';
import { SelectOption } from '../../../../store/types';
import useOutsideClickDetect from '../../../../utils/hooks/useOutsideClickDetect';
import { DispersionChartIcon, GroupChartIcon, MapChartIcon, TimeRangeChartIcon } from '../icons';

import * as S from './ChartOptions.css';

type Props = {
  id: string,
  chartId?: string,
  onSelect: (value: SelectOption) => void,
};

const ChartOptions = ({
  id,
  chartId = '5',
  onSelect,
}: Props) => {
  const ref = useRef(null);
  const [stateValue, setValue] = useState('Dispersão');
  const [iconSelected, setIconSelected] = useState<JSX.Element>(<DispersionChartIcon />);
  const [isDropdown, setIsDropdown] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);

  useOutsideClickDetect(ref, ()=> setIsDropdown(false));

  const options = [
    {
      value: '5',
      label: 'Mapa + Ranking (Brasil-UF)',
      data: <MapChartIcon />,
    },
    {
      value: '1',
      label: 'Mapa + Ranking',
      data: <MapChartIcon />,
    },
    {
      value: '2',
      label: 'Ao longo do tempo',
      data: <TimeRangeChartIcon />,
    },
    {
      value: '3',
      label: 'Dispersão',
      data: <DispersionChartIcon />,
    },
    {
      value: '4',
      label: 'Agrupamento',
      data: <GroupChartIcon />,
    },
  ]

  const handleSelect = (option: SelectOption) => {
    setValue(option.label);
    setIconSelected(option.data)
    setIsDropdown(false);
    onSelect(option)
  }

  const handleActiveDropdown = () => {
    setIsDropdown(true)
  }

  useEffect(() => {
    setValue(options.filter(i => i.value === chartId)[0].label);
    setIconSelected(options.filter(i => i.value === chartId)[0].data)
    setIsDropdown(false);
  }, [chartId])

  useEffect(() => {
    window.addEventListener('resize', getSizes, false);

    function getSizes() {
      // eslint-disable-next-line prefer-const
      let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

      if(Math.ceil(zoom) < 100)
      {
        setZoomOut(true);
      }
      else
      {
        setZoomOut(false);
      }
    }
  }, [])

  return (
    <S.Container>
      <S.Label htmlFor={id} zoomOut={zoomOut}>visualização</S.Label>
      <S.ItemBox>
        <S.IconBox zoomOut={zoomOut}>
          {iconSelected}
        </S.IconBox>
        <S.Item
          id={id}
          value={stateValue}
          autoComplete="off"
          onFocus={handleActiveDropdown}
          zoomOut={zoomOut}
        />
        <S.ArrowBox onClick={() => setIsDropdown(!isDropdown)}>
          <ArrowDownShort />
        </S.ArrowBox>
      </S.ItemBox>
      <S.DropdownContainer showUp={isDropdown}>
        <ul>
          {options.map(item => (
            <S.Option
              key={item.value}
              onClick={() => handleSelect(item)}
              >
              <S.IconBoxDropDown>
                {item.data}
              </S.IconBoxDropDown>
              {item.label}
            </S.Option>
          ))}
        </ul>
      </S.DropdownContainer>
    </S.Container>
  );
};

export default ChartOptions;

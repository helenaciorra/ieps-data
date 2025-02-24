import React, { useEffect, useRef, useState } from 'react';
import { SelectOption, Themes } from '../../store/types';
import useOutsideClickDetect from '../../utils/hooks/useOutsideClickDetect';
import ArrowDownShort from '../icons/ArrowDownShort';
import Checkbox from '../layout/Checkbox';

import * as S from './Select.css';

type Props = {
  id?: string,
  label?: string,
  value?: string,
  className?: string,
  placeholder?: string,
  isOptions?: boolean,
  isDataFromServer?: boolean,
  theme: Themes,
  options: SelectOption[],
  emptyMessage?: string,
  multiple?: boolean,
  name?: string,
  suggest?: boolean,
  initialValue?:string | number,
  labelSetter?: (values: string[]) => string,
  onChange?: (value: string) => void,
  onSelect?: (value: SelectOption) => void,
  onCleanField?: () => void,
};

const Select = ({
  id = 'select-item',
  value,
  label,
  className = '',
  options,
  placeholder = '',
  isDataFromServer,
  isOptions = false,
  theme,
  emptyMessage = 'Digite algum valor para sua busca...',
  multiple,
  name,
  suggest = true,
  initialValue,
  labelSetter,
  onChange,
  onSelect,
  onCleanField,
}: Props) => {
  const ref = useRef(null);
  const [stateValue, setValue] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  const [multipleSelectMap, setMultipleSelectMap] = useState({});
  const [autocompleteOptions, setAutocompleteOptions] = useState<SelectOption[]>([]);
  const [multipleValueLabel, setMultipleValueLabel] = useState('');
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    setValue(value || '');
  }, [value]);

  useEffect(() => {
    if(initialValue){
      setMultipleValueLabel(initialValue as string);
    }
  }, [initialValue]);
  

  useEffect(() => {
    setOptionsData(options, stateValue, isDataFromServer);
  }, [options, isDataFromServer]);

  useOutsideClickDetect(ref, () => setIsDropdown(false));

  const setOptionsData = (
    newOptions: SelectOption[],
    value: string,
    useServerData?: boolean
  ) => {
    if (useServerData || isOptions) {
      setAutocompleteOptions(newOptions);
    } else {
      const filteredOptions = newOptions.filter((option) =>
        option.value.toString().includes(value.toString())
      );
      setAutocompleteOptions(filteredOptions);
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    setOptionsData(options, newValue, isDataFromServer);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSelect = (selectedValue: SelectOption) => () => {
    setValue(selectedValue.label);
    setIsDropdown(false);

    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  const handleMultipleSelect =
    (option: SelectOption) => (e: React.FormEvent<HTMLLabelElement>) => {
      e.preventDefault();

      const newMultipleSelectMap = {
        ...multipleSelectMap,
        [option.value]: {
          ...option,
          checked: !multipleSelectMap?.[option.value]?.checked,
        },
      };

      setMultipleSelectMap(newMultipleSelectMap);
      setAllSelected(isAllSelected(options, newMultipleSelectMap))

      const labelValue = labelSetter ?
      labelSetter(
        Object.keys(newMultipleSelectMap)
        .filter((key) => newMultipleSelectMap[key].checked)
        .map((key) => newMultipleSelectMap[key].label)
      ):
      Object.keys(newMultipleSelectMap)
        .filter((key) => newMultipleSelectMap[key].checked)
        .map((key) => newMultipleSelectMap[key].label)
        .join(', ');

      setMultipleValueLabel(labelValue);

      if (onSelect) {
        onSelect(selectedValues(newMultipleSelectMap));
      }
    };

  const handleMultipleSelectAll = (e: React.FormEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const newMultipleSelectMap = options.reduce((total, actual)=> ({
      ...total,
      [actual.value]: {...actual, checked: !allSelected}
    }),{});

    setMultipleSelectMap(newMultipleSelectMap);
    setAllSelected(!allSelected);

    const labelValue = labelSetter ?
      labelSetter(
        Object.keys(newMultipleSelectMap)
        .filter((key) => newMultipleSelectMap[key].checked)
        .map((key) => newMultipleSelectMap[key].label)
      ):
      Object.keys(newMultipleSelectMap)
      .filter((key) => newMultipleSelectMap[key].checked)
      .map((key) => newMultipleSelectMap[key].label)
      .join(', ');

    setMultipleValueLabel(labelValue);
    if (onSelect) {
      onSelect(selectedValues(newMultipleSelectMap));
    }
  };


  const handleActiveDropdown = () => {
    setIsDropdown(true);
    onCleanField && onCleanField();
  };

  const isAllSelected = (
    options: SelectOption[],
    checkedMap: { [key: string]: { label: string, value: string, checked: boolean },
  }): boolean => {

    const selectedState = options.reduce((total, actual)=> ({
      ...total,
      [actual.value]: {...actual, checked: checkedMap?.[actual.value]?.checked },
    }),{});

    return Object.keys(selectedState).every(key=> selectedState?.[key]?.checked)
  };

  const selectedValues = (obj: {
    [key: string]: { label: string, value: string, checked: boolean },
  }): SelectOption => {
    return {
      label: name || 'select',
      value: Object.keys(obj)
      .filter((key) => obj[key].checked)
      .map((key) => obj[key].label)
      .join(', '),
    };
  };

  const renderOptions = () => {
    if (autocompleteOptions?.length === 0) {
      return <S.EmptyOption>{emptyMessage}</S.EmptyOption>;
    }

    if (multiple) {
      return (
        <ul>
          <S.Option
            as="label"
            themeColor={theme}
            onClick={handleMultipleSelectAll}
          >
            <Checkbox theme={theme} checked={allSelected} />
            Selecionar todos
          </S.Option>
          {autocompleteOptions.map((option) => (
            <S.Option
              as="label"
              key={option.value}
              themeColor={theme}
              onClick={handleMultipleSelect(option)}
            >
              <Checkbox
                theme={theme}
                checked={multipleSelectMap?.[option.value]?.checked}
              />
              {option.label}
            </S.Option>
          ))}
        </ul>
      );
    }

    return (
      <ul>
        {autocompleteOptions.map((option) => (
          <S.Option
            key={option.value}
            onClick={handleSelect(option)}
            themeColor={theme}
          >
            {option.label}
          </S.Option>
        ))}
      </ul>
    );
  };

  if (multiple) {
    return (
      <S.Container ref={ref}>
        {label && (
          <S.Label htmlFor={id} themeColor={theme}>
            {label}
          </S.Label>
        )}
        <S.ItemBox>
          <S.Item
            id={id}
            value={multipleValueLabel}
            placeholder={placeholder}
            className={className}
            autoComplete="off"
            onChange={handleInputChange}
            onFocus={handleActiveDropdown}
            themeColor={theme}
          />
          <S.IconBox onClick={() => setIsDropdown(!isDropdown)}>
            <ArrowDownShort />
          </S.IconBox>
        </S.ItemBox>
        <S.DropdownContainer showUp={isDropdown}>
          {renderOptions()}
        </S.DropdownContainer>
      </S.Container>
    );
  }

  return (
    <S.Container ref={ref}>
      {label && (
        <S.Label htmlFor={id} themeColor={theme}>
          {label}
        </S.Label>
      )}
      <S.ItemBox>
        {suggest? (
          <S.Item
            id={id}
            value={stateValue}
            placeholder={placeholder}
            className={className}
            autoComplete="off"
            onChange={handleInputChange}
            onFocus={handleActiveDropdown}
            themeColor={theme}
          />
        ):(
          <S.Item
            id={id}
            value={options.find(option=> option.value===stateValue)?.label || stateValue || ''}
            placeholder={placeholder}
            className={className}
            autoComplete="off"
            onFocus={handleActiveDropdown}
            themeColor={theme}
          />
        )}
        <S.IconBox onClick={() => setIsDropdown(!isDropdown)}>
          <ArrowDownShort />
        </S.IconBox>
      </S.ItemBox>
      <S.DropdownContainer showUp={isDropdown}>
        {renderOptions()}
      </S.DropdownContainer>
    </S.Container>
  );
};

export default Select;

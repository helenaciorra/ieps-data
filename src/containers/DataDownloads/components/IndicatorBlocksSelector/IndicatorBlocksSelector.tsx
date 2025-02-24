import React, { useState } from 'react';
import Checkbox from '../../../../components/layout/Checkbox';
import * as S from './IndicatorBlocksSelector.css';

type Props = {
  blockMap: { [key: string]: boolean },
  selectedBlock: string,
  indicatorsBlocks: string[],
  onSelect: (block: string) => void,
  onToggleCheckBlock: (block: string, checked: boolean) => void,
  onSelectAll: (checked: boolean) => void,
  intermediates?: string[],
};

const IndicatorBlocksSelector = ({
  blockMap,
  indicatorsBlocks,
  selectedBlock,
  onSelect,
  onToggleCheckBlock,
  onSelectAll,
  intermediates,
}: Props) => {
  const [selectAll, setSelectAll] = useState(false);

  const handleClick = (block: string) => () => onSelect(block);

  const handleCheckBlock = (block: string) => (checked: boolean) =>
    onToggleCheckBlock(block, checked);

  const handleSelectAll = (e: React.FormEvent<HTMLLabelElement>) => {
    e.preventDefault();
    onSelectAll(!selectAll);
    setSelectAll(!selectAll);
  };

  return (
    <S.IndicatorBlocksSelector>
      {indicatorsBlocks.map((block) => (
        <S.IndicatorBlock
          key={block}
          selected={selectedBlock === block}
          onClick={handleClick(block)}
        >
          <Checkbox
            theme="methods"
            checked={blockMap[block]}
            onChange={handleCheckBlock(block)}
            intermediate={
              intermediates &&
              intermediates.filter((i) => i === block).length > 0
            }
          />
          {block}
        </S.IndicatorBlock>
      ))}
      <S.IndicatorBlock as="label" divider onClick={handleSelectAll}>
        <Checkbox theme="methods" checked={selectAll} /> Selecionar Todos
      </S.IndicatorBlock>
    </S.IndicatorBlocksSelector>
  );
};

export default IndicatorBlocksSelector;

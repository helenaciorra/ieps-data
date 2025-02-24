import React, { useEffect, useState } from 'react';
import { DownloadsIcon } from '../../../../components/icons';
import Button from '../../../../components/layout/Button';
import Spinner from '../../../../components/layout/Spinner';
import sizeUnit from '../../../../utils/sizeUnit';
import IndicatorBlocksSelector from '../IndicatorBlocksSelector';
import IndicatorSelector from '../IndicatorSelector';
import * as S from './Downloader.css';

type Props = {
  indicatorsCount: number,
  blockMap: { [key: string]: boolean },
  indicatorsMap: { [key: string]: boolean },
  indicatorsBlock: { [key: string]: { name: string, variable: string }[] },
  fileSize: number,
  isLoading?: boolean,
  onDownload: () => void,
  onSelectIndicator: (indicator: { name: string, variable: string }) => void,
  onToggleCheckBlock: (block: string, checked: boolean) => void,
  onSelectAll: (checked: boolean) => void;
  intermediates: string[],
};

const Downloader = ({
  indicatorsCount,
  indicatorsBlock,
  indicatorsMap,
  blockMap,
  fileSize,
  isLoading,
  onDownload,
  onSelectIndicator,
  onToggleCheckBlock,
  onSelectAll,
  intermediates
}: Props) => {

  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedIndicators, setSelectedIndicators] = useState<{ name: string, variable: string }[]>([]);

  useEffect(()=> {
    const indicatorsKeys = Object.keys(indicatorsBlock);
    if(indicatorsKeys.length>0){
      setSelectedBlock(indicatorsKeys[0]);
      setSelectedIndicators(indicatorsBlock?.[indicatorsKeys[0]] || []);
    }
  }, [indicatorsBlock]);

  const handleSelectBlock = (block: string) => {
    setSelectedBlock(block);
    setSelectedIndicators(indicatorsBlock?.[block] || []);
  };

  const renderIndicators = () => {
    if (!indicatorsBlock || Object.keys(indicatorsBlock)?.length === 0) {
      return <S.EmptyIndicators>Nenum indicador selecionado</S.EmptyIndicators>;
    }

    return (
      <S.Main>
        <IndicatorBlocksSelector
          blockMap={blockMap}
          selectedBlock={selectedBlock}
          indicatorsBlocks={Object.keys(indicatorsBlock)}
          onSelect={handleSelectBlock}
          onToggleCheckBlock={onToggleCheckBlock}
          onSelectAll={onSelectAll}
          intermediates={intermediates}
        />
        <IndicatorSelector indicators={selectedIndicators} indicatorsMap={indicatorsMap} onSelect={onSelectIndicator}/>
      </S.Main>
    );
  };

  return (
    <S.Downloader>
      <S.Indicators>{renderIndicators()}</S.Indicators>
      <S.Footer>
        <S.Size>
          <span>.xlsx ({sizeUnit(fileSize)})</span>
          <span>{indicatorsCount} indicadores</span>
        </S.Size>
        <Button theme="downloads" onClick={onDownload}>
          Download <DownloadsIcon />
        </Button>
         { isLoading && <Spinner size="2" theme='downloads' /> }
      </S.Footer>
    </S.Downloader>
  );
};

export default Downloader;

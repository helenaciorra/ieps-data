import React, { useEffect } from 'react';
import Select from '../../../../components/select/Select';
import { SelectOption } from '../../../../store/types';
import * as S from './Indicator.css';
import SolrData from '../SolrData';
import { SolrDataProps } from '../SolrData/SolrData';
import { ComponenSelector } from './components/ComponentSelector';

interface Props {
  onSetGroup: (group: SelectOption) => void;
  onSelectIndicator: (indicator: SelectOption) => void;
  onCleanField: () => void;
  groupSelected: SelectOption;
  indicatorSelected: SelectOption;
  indicatorGroup: SelectOption[];
  indicators: SelectOption[];
  solrData?: SolrDataProps;
}

const Indicator = ({
  onSetGroup,
  onSelectIndicator,
  onCleanField,
  groupSelected,
  indicatorSelected,
  indicatorGroup,
  indicators,
  solrData,
}: Props) => {
  return (
    <S.Indicator>
      <S.Header className="print-hidden">
        <div id="indicator-group">
          <Select
            label="grupo de indicadores"
            options={indicatorGroup}
            theme="methods"
            isOptions={true}
            placeholder="Selecione um grupo"
            onSelect={onSetGroup}
            value={groupSelected.label ? groupSelected.label : ''}
            onCleanField={onCleanField}
          />
        </div>
        <div id="indicator">
          <Select
            label="indicador"
            options={indicators}
            theme="methods"
            isOptions={true}
            placeholder="Selecione um indicador"
            onSelect={onSelectIndicator}
            value={indicatorSelected.label ? indicatorSelected.label : ''}
          />
        </div>
      </S.Header>
      <S.Body className="print-doc-body">
        {(() => {
          if (indicatorSelected.data) {
            if (indicatorSelected.componentNode) {
              return <ComponenSelector indicator={indicatorSelected.value} />;
            } else {
              if(solrData) {
                return (
                  <SolrData
                    pageTitle={solrData.pageTitle}
                    indicadorTitle={solrData.indicadorTitle}
                    indicadorContent={solrData.indicadorContent}
                    interpretacaoTitle={solrData.interpretacaoTitle}
                    interpretacaoContent={solrData.interpretacaoContent}
                    usosTitle={solrData.usosTitle}
                    usosContent={solrData.usosContent}
                    limitacoesTitle={solrData.limitacoesTitle}
                    limitacoesContent={solrData.limitacoesContent}
                    dataSourceTitle={solrData.dataSourceTitle}
                    dataSourceContent={solrData.dataSourceContent}
                    linkTitle={solrData.linkTitle}
                    linkUrl={solrData.linkUrl}
                    linksUrl={solrData.linksUrl}
                    periodTitle={solrData.periodTitle}
                    periodContent={solrData.periodContent}
                    graphLevelTitle={solrData.graphLevelTitle}
                    graphLevelContent={solrData.graphLevelContent}
                    formulaTitle={solrData.formulaTitle}
                    formulaContent={solrData.formulaContent}
                    tableTitle={solrData.tableTitle}
                    tableHeader={solrData.tableHeader}
                    tableContent={solrData.tableContent}
                    tableReference={solrData.tableReference}
                    referenciasTitle={solrData.referenciasTitle}
                    referenciasLinks={solrData.referenciasLinks}
                  />
                );
              }
            }
          } else {
            return (
              <S.BodyEmptyMessage>
                <p>Utilize os campos acima para selecionar um documento.</p>
              </S.BodyEmptyMessage>
            );
          }
        })()}
      </S.Body>
    </S.Indicator>
  );
};

export default Indicator;

import React, { useEffect, useState } from 'react';
import { UfCod } from '../../../store/types';
import Spinner from '../../layout/Spinner';
import Acre from './Acre';
import Alagoas from './Alagoas';
import Amapa from './Amapa';
import Amazonas from './Amazonas';
import Bahia from './Bahia';
import Brasil from './Brasil';
import Ceara from './Ceara';
import DistritoFederal from './DistritoFederal';
import EspiritoSanto from './EspiritoSanto';
import Goias from './Goias';
import Maranhao from './Maranhao';
import MatoGrosso from './MatoGrosso';
import MatoGrossoDoSul from './MatoGrossoDoSul';
import MinasGerais from './MinasGerais';
import Para from './Para';
import Parana from './Parana';
import Rondonia from './Rondonia';
import Paraiba from './Paraiba';
import Pernambuco from './Pernambuco';
import Piaui from './Piaui';
import RioDeJaneiro from './RioDeJaneiro';
import RioGrandeDoNorte from './RioGrandeDoNorte';
import RioGrandeDoSul from './RioGrandeDoSul';
import Roraima from './Roraima';
import SaoPaulo from './SaoPaulo';
import Sergipe from './Sergipe';
import SantaCatarina from './SantaCatarina';
import Tocantins from './Tocantins';

const UfStatesComponentsObject = {
  BRUF: Brasil,
  UF12MU: Acre,
  UF27MU: Alagoas,
  UF16MU: Amapa,
  UF13MU: Amazonas,
  UF29MU: Bahia,
  UF23MU: Ceara,
  UF53MU: DistritoFederal,
  UF32MU: EspiritoSanto,
  UF52MU: Goias,
  UF21MU: Maranhao,
  UF51MU: MatoGrosso,
  UF50MU: MatoGrossoDoSul,
  UF31MU: MinasGerais,
  UF15MU: Para,
  UF41MU: Parana,
  UF11MU: Rondonia,
  UF25MU: Paraiba,
  UF26MU: Pernambuco,
  UF22MU: Piaui,
  UF33MU: RioDeJaneiro,
  UF24MU: RioGrandeDoNorte,
  UF43MU: RioGrandeDoSul,
  UF14MU: Roraima,
  UF35MU: SaoPaulo,
  UF28MU: Sergipe,
  UF42MU: SantaCatarina,
  UF17MU: Tocantins,
  12: Acre,
  27: Alagoas,
  16: Amapa,
  13: Amazonas,
  29: Bahia,
  23: Ceara,
  53: DistritoFederal,
  32: EspiritoSanto,
  52: Goias,
  21: Maranhao,
  51: MatoGrosso,
  50: MatoGrossoDoSul,
  31: MinasGerais,
  15: Para,
  41: Parana,
  11: Rondonia,
  25: Paraiba,
  26: Pernambuco,
  22: Piaui,
  33: RioDeJaneiro,
  24: RioGrandeDoNorte,
  43: RioGrandeDoSul,
  14: Roraima,
  35: SaoPaulo,
  28: Sergipe,
  42: SantaCatarina,
  17: Tocantins,
};

type Props = {
  codmun?: string,
  uf?: UfCod,
  isLoadingUfMapData?: boolean,
  onRender: () => void
};

const UfState = ({ uf,codmun, isLoadingUfMapData, onRender }: Props) => {
  const [ufComponent, setComponent] = useState<()=> JSX.Element>();
  const [prevLoadingUfMapData, setPrevLoadingUfMapData] = useState<boolean | undefined>(false);

  useEffect(() => {
    if(uf){
      setComponent(UfStatesComponentsObject[uf]);
    }
  }, [uf, codmun, ]);

  useEffect(() => {
    if(!isLoadingUfMapData && prevLoadingUfMapData){
      onRender();
    }
    setPrevLoadingUfMapData(isLoadingUfMapData)

  }, [codmun, isLoadingUfMapData]);
  
  if(!ufComponent || uf == null){
    return null
  }

  if(isLoadingUfMapData){
    return <Spinner block={true} mt="5"/>;
  }

  return <>{ufComponent}</>;
};

export default UfState;

import React, { useEffect, useState } from 'react';
import { UfCod } from '../../../store/types';
import Spinner from '../../layout/Spinner';
import Acre from './Acre';
import Alagoas from './Alagoas';
import Amapa from './Amapa';
import Amazonas from './Amazonas';
import Bahia from './Bahia';
import Brasil from './Brasil';
import BrasilLegends from './BrasilLegends';
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

import ACMacro from './macro/map_AC_macro';
import ALMacro from './macro/map_AL_macro';
import AMMacro from './macro/map_AM_macro';
import APMacro from './macro/map_AP_macro';
import BAMacro from './macro/map_BA_macro';
import CEMacro from './macro/map_CE_macro';
import DFMacro from './macro/map_DF_macro';
import ESMacro from './macro/map_ES_macro';
import GOMacro from './macro/map_GO_macro';
import MAMacro from './macro/map_MA_macro';
import MGMacro from './macro/map_MG_macro';
import MSMacro from './macro/map_MS_macro';
import MTMacro from './macro/map_MT_macro';
import PAMacro from './macro/map_PA_macro';
import PBMacro from './macro/map_PB_macro';
import PEMacro from './macro/map_PE_macro';
import PIMacro from './macro/map_PI_macro';
import PRMacro from './macro/map_PR_macro';
import RJMacro from './macro/map_RJ_macro';
import RNMacro from './macro/map_RN_macro';
import ROMacro from './macro/map_RO_macro';
import RRMacro from './macro/map_RR_macro';
import RSMacro from './macro/map_RS_macro';
import SCMacro from './macro/map_SC_macro';
import SEMacro from './macro/map_SE_macro';
import SPMacro from './macro/map_SP_macro';
import TOMacro from './macro/map_TO_macro';

import ACReg from './region/map_AC_reg';
import ALReg from './region/map_AL_reg';
import AMReg from './region/map_AM_reg';
import APReg from './region/map_AP_reg';
import BAReg from './region/map_BA_reg';
import CEReg from './region/map_CE_reg';
import DFReg from './region/map_DF_reg';
import ESReg from './region/map_ES_reg';
import GOReg from './region/map_GO_reg';
import MAReg from './region/map_MA_reg';
import MGReg from './region/map_MG_reg';
import MSReg from './region/map_MS_reg';
import MTReg from './region/map_MT_reg';
import PAReg from './region/map_PA_reg';
import PBReg from './region/map_PB_reg';
import PEReg from './region/map_PE_reg';
import PIReg from './region/map_PI_reg';
import PRReg from './region/map_PR_reg';
import RJReg from './region/map_RJ_reg';
import RNReg from './region/map_RN_reg';
import ROReg from './region/map_RO_reg';
import RRReg from './region/map_RR_reg';
import RSReg from './region/map_RS_reg';
import SCReg from './region/map_SC_reg';
import SEReg from './region/map_SE_reg';
import SPReg from './region/map_SP_reg';
import TOReg from './region/map_TO_reg';

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

const UfStatesMacroRegionComponentsObject = {
  UF12MU: ACMacro,
  UF27MU: ALMacro,
  UF16MU: APMacro,
  UF13MU: AMMacro,
  UF29MU: BAMacro,
  UF23MU: CEMacro,
  UF53MU: DFMacro,
  UF32MU: ESMacro,
  UF52MU: GOMacro,
  UF21MU: MAMacro,
  UF51MU: MTMacro,
  UF50MU: MSMacro,
  UF31MU: MGMacro,
  UF15MU: PAMacro,
  UF41MU: PRMacro,
  UF11MU: ROMacro,
  UF25MU: PBMacro,
  UF26MU: PEMacro,
  UF22MU: PIMacro,
  UF33MU: RJMacro,
  UF24MU: RNMacro,
  UF43MU: RSMacro,
  UF14MU: RRMacro,
  UF35MU: SPMacro,
  UF28MU: SEMacro,
  UF42MU: SCMacro,
  UF17MU: TOMacro,
  12: ACMacro,
  27: ALMacro,
  16: APMacro,
  13: AMMacro,
  29: BAMacro,
  23: CEMacro,
  53: DFMacro,
  32: ESMacro,
  52: GOMacro,
  21: MAMacro,
  51: MTMacro,
  50: MSMacro,
  31: MGMacro,
  15: PAMacro,
  41: PRMacro,
  11: ROMacro,
  25: PBMacro,
  26: PEMacro,
  22: PIMacro,
  33: RJMacro,
  24: RNMacro,
  43: RSMacro,
  14: RRMacro,
  35: SPMacro,
  28: SEMacro,
  42: SCMacro,
  17: TOMacro,
};

const UfStatesRegionComponentsObject = {
  UF12MU: ACReg,
  UF27MU: ALReg,
  UF16MU: APReg,
  UF13MU: AMReg,
  UF29MU: BAReg,
  UF23MU: CEReg,
  UF53MU: DFReg,
  UF32MU: ESReg,
  UF52MU: GOReg,
  UF21MU: MAReg,
  UF51MU: MTReg,
  UF50MU: MSReg,
  UF31MU: MGReg,
  UF15MU: PAReg,
  UF41MU: PRReg,
  UF11MU: ROReg,
  UF25MU: PBReg,
  UF26MU: PEReg,
  UF22MU: PIReg,
  UF33MU: RJReg,
  UF24MU: RNReg,
  UF43MU: RSReg,
  UF14MU: RRReg,
  UF35MU: SPReg,
  UF28MU: SEReg,
  UF42MU: SCReg,
  UF17MU: TOReg,
  12: ACReg,
  27: ALReg,
  16: APReg,
  13: AMReg,
  29: BAReg,
  23: CEReg,
  53: DFReg,
  32: ESReg,
  52: GOReg,
  21: MAReg,
  51: MTReg,
  50: MSReg,
  31: MGReg,
  15: PAReg,
  41: PRReg,
  11: ROReg,
  25: PBReg,
  26: PEReg,
  22: PIReg,
  33: RJReg,
  24: RNReg,
  43: RSReg,
  14: RRReg,
  35: SPReg,
  28: SEReg,
  42: SCReg,
  17: TOReg,
};

type Props = {
  codmun?: string,
  uf?: UfCod,
  isLoadingUfMapData?: boolean,
  granularity?: string,
  onRender: () => void,
};

const UfState = ({ uf,codmun, isLoadingUfMapData, granularity = 'viz', onRender }: Props) => {
  const [ufComponent, setComponent] = useState<()=> JSX.Element>();
  const [prevLoadingUfMapData, setPrevLoadingUfMapData] = useState<boolean | undefined>(false);

  useEffect(() => {
    if(granularity === 'viz') {
      if(uf){
        setComponent(UfStatesComponentsObject[uf]);
      }
    } else if (granularity === 'vizMacro') {
      if(uf) {
        setComponent(UfStatesMacroRegionComponentsObject[uf]);
      }
    } else if (granularity === 'vizReg') {
      if(uf) {
        setComponent(UfStatesRegionComponentsObject[uf]);
      }
    }
  }, [uf, granularity]);

  useEffect(() => {
    if(!isLoadingUfMapData){
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

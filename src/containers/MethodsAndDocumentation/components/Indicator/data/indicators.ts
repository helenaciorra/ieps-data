import {
  atencaoPrimariaCoberturaAtencaoBasica,
  coberturaEstrategiaSaudeFamilia,
  coberturaAgentesComunitariosSaude,
  nascidosVivosComPreNatalAdequado,
  nascidosVivosComNenhumaConsultaPreNatal,
  nascidosVivosCom1a6ConsultasPreNatal,
  nascidosVivosCom7ouMaisConsultasPreNatal,
  coberturaVacinalDeBcg,
  coberturaVacinalDeHepatiteBemCriancasAte30dias,
  coberturaVacinalDeRotavirusHumano,
  coberturaVacinalDeMeningococoC,
  coberturaVacinalDePentavalente,
  coberturaVacinalDePneumococica,
  coberturaVacinalDePoliomielite,
  coberturaVacinalDeHepatite,
  coberturaVacionalDeTripliceViral1Dose,
} from '../../templates/index';

const INDICATORS = {
  1: [
    {
      label: 'Cobertura da Atenção Básica (%)',
      alternativeLabel: 'cobertura_da_atencao_basica',
      value: 'i1',
      componentData: atencaoPrimariaCoberturaAtencaoBasica,
      data: {
        variableName: ['cob_ab'],
      },
    },
    {
      label: 'Cobertura de Estratégia de Saúde da Família (%)',
      alternativeLabel: 'cobertura_de_estrategia_de_saude_da_familia',
      value: 'i2',
      componentData: coberturaEstrategiaSaudeFamilia,
      data: {
        variableName: ['cob_esf'],
      },
    },
    {
      label: 'Cobertura de Agentes Comunitários de Saúde (%)',
      alternativeLabel: 'cobertura_de_agentes_comunitarios_de_saude',
      value: 'i3',
      componentData: coberturaAgentesComunitariosSaude,
      data: {
        variableName: ['cob_acs'],
      },
    },
    {
      label: 'Nascidos Vivos com Pré-Natal Adequado (%)',
      alternativeLabel:
        'nascidos_vivos_com_numero_de_consultas_pre-natal_adequado',
      value: 'i4',
      componentData: nascidosVivosComPreNatalAdequado,
      data: {
        variableName: ['pct_prenatal_adeq'],
      },
    },
    {
      label: 'Nascidos Vivos com Nenhuma Consulta Pré-Natal (%)',
      alternativeLabel: 'nascidos_vivos_com_nenhuma_consulta_pre-natal',
      value: 'i5',
      componentData: nascidosVivosComNenhumaConsultaPreNatal,
      data: {
        variableName: ['pct_prenatal_zero'],
      },
    },
    {
      label: 'Nascidos Vivos com 1 a 6 Consultas Pré-Natal (%)',
      alternativeLabel: 'nascidos_vivos_com_1_a_6_consultas_pre-natal',
      value: 'i6',
      componentData: nascidosVivosCom1a6ConsultasPreNatal,
      data: {
        variableName: ['pct_prenatal_1a6'],
      },
    },
    {
      label: 'Nascidos Vivos com 7 ou Mais Consultas Pré-Natal (%)',
      alternativeLabel: 'nascidos_vivos_com_7_ou_mais_consultas_pre-Natal',
      value: 'i7',
      componentData: nascidosVivosCom7ouMaisConsultasPreNatal,
      data: {
        variableName: ['pct_prenatal_7m'],
      },
    },
    {
      label: 'Cobertura Vacinal de BCG (%)',
      alternativeLabel: 'cobertura_vacinal_de_bcg',
      value: 'i8',
      componentData: coberturaVacinalDeBcg,
      data: {
        variableName: ['cob_vac_bcg'],
      },
    },
    {
      label: 'Cobertura Vacinal de Hepatite B em crianças até 30 dias (%)',
      alternativeLabel:
        'cobertura_vacinal_de_hepatite_B_em_criancas_ate_30_dias',
      value: 'i9',
      componentData: coberturaVacinalDeHepatiteBemCriancasAte30dias,
      data: {
        variableName: ['cob_vac_hepb'],
      },
    },
    {
      label: 'Cobertura Vacinal de Rotavírus Humano (%)',
      alternativeLabel: 'cobertura_vacinal_de_rotavirus_humano',
      value: 'i10',
      componentData: coberturaVacinalDeRotavirusHumano,
      data: {
        variableName: ['cob_vac_rota'],
      },
    },
    {
      label: 'Cobertura Vacinal de Meningococo C (%)',
      alternativeLabel: 'cobertura_vacinal_de_meningococo_c',
      value: 'i11',
      componentData: coberturaVacinalDeMeningococoC,
      data: {
        variableName: ['cob_vac_menin'],
      },
    },
    {
      label: 'Cobertura Vacinal de Pentavalente (%)',
      alternativeLabel: 'cobertura_vacinal_de_pentavalente',
      value: 'i12',
      componentData: coberturaVacinalDePentavalente,
      data: {
        variableName: ['cob_vac_penta'],
      },
    },
    {
      label: 'Cobertura Vacinal de Pneumocócica (%)',
      alternativeLabel: 'cobertura_vacinal_de_pneumocócica',
      value: 'i13',
      componentData: coberturaVacinalDePneumococica,
      data: {
        variableName: ['cob_vac_pneumo'],
      },
    },
    {
      label: 'Cobertura Vacinal de Poliomielite (%)',
      alternativeLabel: 'cobertura_vacinal_de_poliomielite',
      value: 'i14',
      componentData: coberturaVacinalDePoliomielite,
      data: {
        variableName: ['cob_vac_polio'],
      },
    },
    {
      label: 'Cobertura Vacinal de Hepatite A (%)',
      alternativeLabel: 'cobertura_vacinal_de_hepatite_a',
      value: 'i15',
      componentData: coberturaVacinalDeHepatite,
      data: {
        variableName: ['cob_vac_hepa'],
      },
    },
    {
      label: 'Cobertura Vacinal de Tríplice Viral (1ª Dose) (%)',
      alternativeLabel: 'cobertura_vacinal_de_tríplice_viral_1_dose',
      value: 'i16',
      componentData: coberturaVacionalDeTripliceViral1Dose,
      data: {
        variableName: ['cob_vac_tvd1'],
      },
    },
  ],
  2: [
    {
      label: 'Mortalidade Infantil (por 1.000 Nascidos Vivos)',
      alternativeLabel: 'mortalidade_infantil_(por_1000_nascidos_vivos)',
      value: 'i17',
      componentNode: true,
      data: {
        variableName: ['tx_mort_inf_ibge'],
      },
    },
    {
      label: 'Mortalidade Bruta (por 100.000 Hab.)',
      alternativeLabel: 'mortalidade_bruta_(por_100000_Hab)',
      value: 'i18',
      componentNode: true,
      data: {
        variableName: ['tx_mort'],
      },
    },
    {
      label: 'Mortalidade Bruta por Causas Evitáveis (por 100.000 Hab.)',
      alternativeLabel:
        'mortalidade_bruta_por_causas_evitaveis_(por_100000_Hab)',
      value: 'i19',
      componentNode: true,
      data: {
        variableName: ['tx_mort_evit'],
      },
    },
    {
      label:
        'Mortalidade Bruta por Condições Sensíveis a Atenção Primária (por 100.000 Hab.)',
      alternativeLabel:
        'mortalidade_bruta_por_condicoes_sensiveis_a_atencao_primaria_(por_100000_Hab)',
      value: 'i20',
      componentNode: true,
      data: {
        variableName: ['tx_mort_csap'],
      },
    },
    {
      label: 'Mortalidade Bruta por Causas Mal Definidas (%)',
      alternativeLabel: 'mortalidade_bruta_por_causas_mal_definidas',
      value: 'i21',
      componentNode: true,
      data: {
        variableName: ['pct_mort_maldef'],
      },
    },
    {
      label: 'Mortalidade Ajustada (por 100.000 Hab.)',
      alternativeLabel: 'mortalidade_ajustada_(por_100000_Hab)',
      value: 'i22',
      componentNode: true,
      data: {
        variableName: ['tx_mort_aj_oms', 'tx_mort_aj_cens'],
      },
    },
    {
      label: 'Mortalidade Ajustada por Causas Evitáveis (por 100.000 Hab.)',
      alternativeLabel:
        'mortalidade_por_causas_evitaveis_ajustada_(por_100000_Hab)',
      value: 'i23',
      componentNode: true,
      data: {
        variableName: ['tx_mort_evit_aj_oms', 'tx_mort_evit_aj_cens'],
      },
    },
    {
      label:
        'Mortalidade Ajustada por Condições Sensíveis a Atenção Primária (por 100.000 Hab.)',
      alternativeLabel:
        'mortalidade_ajustada_por_condicoes_sensiveis_a_atencao_primaria_(por_100000_Hab)',
      value: 'i24',
      componentNode: true,
      data: {
        variableName: ['tx_mort_csap_aj_cens', 'tx_mort_csap_aj_oms'],
      },
    },
    {
      label: 'Hospitalizações (por 100.000 Hab.)',
      alternativeLabel: 'hospitalizacoes_(por_100000_Hab)',
      value: 'i25',
      componentNode: true,
      data: {
        variableName: ['tx_hosp'],
      },
    },
    {
      label:
        'Hospitalizações por Condições Sensíveis à Atenção Primária (por 100.000 Hab.)',
      alternativeLabel:
        'hospitalizacoes_por_condicoes_sensiveis_a_atencao_primaria_(por_100000_Hab)',
      value: 'i26',
      componentNode: true,
      data: {
        variableName: ['tx_hosp_csap'],
      },
    },
  ],
  3: [
    {
      label: 'Médicos (por 1.000 Hab.)',
      alternativeLabel: 'medicos_(por_1000_Hab.)',
      value: 'i27',
      componentNode: true,
      data: {
        variableName: ['tx_med'],
      },
    },
    {
      label: 'Médicos (Padronizados por Carga Horária; por 1.000 Hab.)',
      alternativeLabel: 'medicos_(padronizados_por_carga_horaria_por_1000_Hab)',
      value: 'i28',
      componentNode: true,
      data: {
        variableName: ['tx_med_ch'],
      },
    },
    {
      label: 'Enfermeiros (por 1.000 Hab.)',
      alternativeLabel: 'enfermeiros_(por_1000_Hab)',
      value: 'i29',
      componentNode: true,
      data: {
        variableName: ['tx_enf'],
      },
    },
    {
      label: 'Enfermeiros (Padronizados por Carga Horária; por 1.000 Hab.)',
      alternativeLabel:
        'enfermeiros_(Padronizados_por_carga_horaria_por_1000_Hab)',
      value: 'i30',
      componentNode: true,
      data: {
        variableName: ['tx_enf_ch'],
      },
    },
    {
      label: 'Leitos SUS (por 100.000 Hab.)',
      alternativeLabel: 'leitos_sus_(por_100000_Hab)',
      value: 'i31',
      componentNode: true,
      data: {
        variableName: ['tx_leito_sus'],
      },
    },
    {
      label: 'Leitos de UTI SUS (por 100.000 Hab.)',
      alternativeLabel: 'leitos_de_uti_sus_(por_100000_Hab)',
      value: 'i32',
      componentNode: true,
      data: {
        variableName: ['tx_leitouti_sus'],
      },
    },
  ],
  4: [
    {
      label: 'Cobertura de Planos de Saúde (%)',
      alternativeLabel: 'cobertura_de_planos_de_saude',
      value: 'i33',
      componentNode: true,
      data: {
        variableName: ['cob_priv'],
      },
    },
    {
      label: 'Leitos Não-SUS (por 100.000 Hab.)',
      alternativeLabel: 'leitos_nao-sus_(por_100000_Hab)',
      value: 'i34',
      componentNode: true,
      data: {
        variableName: ['tx_leito_nsus'],
      },
    },
    {
      label: 'Leitos de UTI Não-SUS (por 100.000 Hab.)',
      alternativeLabel: 'leitos_uti_nao-sus_(por_100000_Hab)',
      value: 'i35',
      componentNode: true,
      data: {
        variableName: ['tx_leitouti_nsus'],
      },
    },
  ],
  5: [
    {
      label: '% da População com 65+ anos',
      alternativeLabel: 'porcentagem_da_populacao_com_65_anos',
      value: 'i36',
      componentNode: true,
      data: {
        variableName: ['pct_pop65m'],
      },
    },
    {
      label: '% da População com 75+ anos',
      alternativeLabel: 'porcentagem_da_população_com_75_anos',
      value: 'i37',
      componentNode: true,
      data: {
        variableName: ['pct_pop75m'],
      },
    },
    {
      label: '% da População com 0-4 anos',
      alternativeLabel: 'porcentagem_da_populacao_com_0-4_anos',
      value: 'i38',
      componentNode: true,
      data: {
        variableName: ['pct_pop0a4'],
      },
    },
    {
      label: '% da População com 5-14 anos',
      alternativeLabel: 'porcentagem_da_populacao_com_5-14_anos',
      value: 'i39',
      componentNode: true,
      data: {
        variableName: ['pct_pop5a14'],
      },
    },
    {
      label: '% da População em Idade Ativa (15-64 anos)',
      alternativeLabel: 'porcentagem_da_populacao_em_idade_ativa_(15-64_anos)',
      value: 'i40',
      componentNode: true,
      data: {
        variableName: ['pct_pop15a64'],
      },
    },
    {
      label: 'Razão de Sexos',
      alternativeLabel: 'razao_de_sexos',
      value: 'i41',
      componentNode: true,
      data: {
        variableName: ['tx_popmf'],
      },
    },
    {
      label: '% de Mulheres em Idade Fértil (10-49 anos)',
      alternativeLabel: 'porcentagem_de_Mulheres_em_idade_fertil_(10-49_anos)',
      value: 'i42',
      componentNode: true,
      data: {
        variableName: ['pct_pop10a49_fem'],
      },
    },
  ],
  6: [
    {
      label:
        'Participação da Receita Própria Municipal Aplicada em Saúde - EC 29 (%)',
      alternativeLabel:
        'participacao_da_receita_propria_municipal_aplicada_em_saude-EC_29',
      value: 'i43',
      componentNode: true,
      data: {
        variableName: ['pct_desp_recp_saude_mun'],
      },
    },
    {
      label:
        'Despesa em Saúde Utilizando Recursos Próprios do Município (por Hab., R$ de 2019)',
      alternativeLabel:
        'despesa_em_saude_utilizando_recursos_proprios_do_municipio_(por_Hab_R$_de_2019)',
      value: 'i44',
      componentNode: true,
      data: {
        variableName: ['desp_recp_saude_pc_mun'],
      },
    },
    {
      label:
        'Despesa Total com Saúde Sob Responsabilidade do Município (por Hab.; R$ de 2019)',
      alternativeLabel:
        'despesa_total_com_saude_sob_responsabilidade_do_municipio_(por_Hab_R$_de_2019)',
      value: 'i45',
      componentNode: true,
      data: {
        variableName: ['desp_tot_saude_pc_mun'],
      },
    },
    {
      label:
        'Participação da Receita Própria Estadual Aplicada em Saúde - EC 29 (%)',
      alternativeLabel:
        'participacao_da_receita_propria_estadual_aplicada_em_saude-EC_29',
      value: 'i46',
      componentNode: true,
      data: {
        variableName: ['pct_desp_recp_saude_uf'],
      },
    },
    {
      label:
        'Despesa em Saúde Utilizando Recursos Próprios do Estado (por Hab., R$ de 2019)',
      alternativeLabel:
        'despesa_em_saude_utilizando_recursos_proprios_do_estado_(por_Hab_R$_de_2019)',
      value: 'i47',
      componentNode: true,
      data: {
        variableName: ['desp_recp_saude_pc_uf'],
      },
    },
    {
      label:
        'Despesa Total com Saúde Sob Responsabilidade do Estado (por Hab., R$ de 2019)',
      alternativeLabel:
        'despesa_total_com_saude_sob_responsabilidade_do_estado_(por_Hab_R$_de_2019)',
      value: 'i48',
      componentNode: true,
      data: {
        variableName: ['desp_tot_saude_pc_mun_def'],
      },
    },
  ],
  7: [
    {
      label: 'Índice de Desenvolvimento Humano Municipal (2010)',
      alternativeLabel: 'indice_de_desenvolvimento_humano_municipal_(2010)',
      value: 'i49',
      componentNode: true,
      data: {
        variableName: ['idhm'],
      },
    },
    {
      label:
        'Índice de Desenvolvimento Humano Municipal - dimensão Renda (2010)',
      alternativeLabel:
        'indice_de_desenvolvimento_humano_municipal-dimensao_renda_(2010)',
      value: 'i50',
      componentNode: true,
      data: {
        variableName: ['idhm_renda'],
      },
    },
    {
      label:
        'Índice de Desenvolvimento Humano Municipal - dimensão Educação (2010)',
      alternativeLabel:
        'indice_de_desenvolvimento_humano_municipal-dimensao_educacao_(2010)',
      value: 'i51',
      componentNode: true,
      data: {
        variableName: ['idhm_educ'],
      },
    },
    {
      label:
        'Índice de Desenvolvimento Humano Municipal - dimensão Longevidade (2010)',
      alternativeLabel:
        'indice_de_desenvolvimento_humano_municipal-dimensao_longevidade_(2010)',
      value: 'i52',
      componentNode: true,
      data: {
        variableName: ['idhm_long'],
      },
    },
  ],
};

export default INDICATORS;

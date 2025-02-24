# Guia de preenchimento

Existem 16 arquivos na pasta **atencao_basica** cada arquivo representa o conteúdo de cada página.
São eles:

- [01_cobertura_atencao_basica.ts](./atencao_primaria/01_cobertura_atencao_basica.ts)
- [02_cobertura_estrategia_saude_familia.ts](./atencao_primaria/02_cobertura_estrategia_saude_familia.ts)
- [03_cobertura_de_agentes_comunitarios_de_saude.ts](./atencao_primaria/03_cobertura_de_agentes_comunitarios_de_saude.ts)
- [04_nascidos_vivos_com_numero_de_consultas_pre-natal_adequado.ts](./atencao_primaria/04_nascidos_vivos_com_numero_de_consultas_pre-natal_adequado.ts)
- [05_nascidos_vivos_com_nenhuma_consulta_pre-natal.ts](./atencao_primaria/05_nascidos_vivos_com_nenhuma_consulta_pre-natal.ts)
- [06_nascidos_vivos_com_1_a_6_consultas_pre-natal.ts](./atencao_primaria/06_nascidos_vivos_com_1_a_6_consultas_pre-natal.ts)
- [07_nascidos_vivos_com_7_ou_mais_consultas_pre-Natal.ts](./atencao_primaria/07_nascidos_vivos_com_7_ou_mais_consultas_pre-Natal.ts)
- [08_cobertura_vacinal_de_bcg.ts](./atencao_primaria/08_cobertura_vacinal_de_bcg.ts)
- [09_cobertura_vacinal_de_hepatite_B_em_criancas_ate_30_dias.ts](./atencao_primaria/09_cobertura_vacinal_de_hepatite_B_em_criancas_ate_30_dias.ts)
- [10_cobertura_vacinal_de_rotavirus_humano.ts](./atencao_primaria/10_cobertura_vacinal_de_rotavirus_humano.ts)
- [11_cobertura_vacinal_de_meningococo_c.ts](./atencao_primaria/11_cobertura_vacinal_de_meningococo_c.ts)
- [12_cobertura_vacinal_de_pentavalente.ts](./atencao_primaria/12_cobertura_vacinal_de_pentavalente.ts)
- [13_cobertura_vacinal_de_pneumococica.ts](./atencao_primaria/13_cobertura_vacinal_de_pneumococica.ts)
- [14_cobertura_vacinal_de_poliomielite.ts](./atencao_primaria/14_cobertura_vacinal_de_poliomielite.ts)
- [15_cobertura_vacinal_de_hepatite_a.ts](./atencao_primaria/15_cobertura_vacinal_de_hepatite_a.ts)
- [16_cobertura_vacinal_de_triplice_viral_1_dose.ts](./atencao_primaria/16_cobertura_vacinal_de_triplice_viral_1_dose.ts)


Para o preenchimento destes arquivos foi criado um conjunto de componentes. Cada componente possui atributos específicos. A lista
de componentes é exibida abaixo:

**Título da página**
```
pageTitle: 'Título da página',
``` 
**Indicador**
```
indicadorTitle: 'Título',
indicadorContent: 'Descrição',
```  
**Intepretração**
```
interpretacaoTitle: 'Título',
interpretacaoContent: 'Descrição'
``` 
**Usos**
```
usosTitle: 'Título',
usosContent: 'Descrição'
``` 
**Limitações**
```
limitacoesTitle: 'Título',
limitacoesContent: 'Descrição'
``` 
**Fonte de Dados**
```
dataSourceTitle: 'Título',
dataSourceContent: 'Descrição'
``` 
**Período**
```
periodTitle: 'Título',
periodContent: 'Descrição'
``` 
**Níveis Geográficos**
```
graphLevelTitle: 'Título dos níveis geográficos',
graphLevelContent: [
    { title: 'Título A', content: 'Desc Titulo A'},
    { title: 'Título B', content: 'Desc Titulo B'},
    { title: 'Título C', content: 'Desc Titulo C'},
]
``` 
**Fórmula de cálculo**
```
formulaTitle: 'Título',
formulaContent: [
    {   item: 'Item 1',
        image: null, 
        explain: [
            'Explicação 1',
            'Explicação 2',
            'Explicação 3',
        ]
    },
    {   item: 'Item 2',
        image: `${formulaImage}`, 
        explain: [
            'Explicação 1',
            'Explicação 2',
            'Explicação 3',
        ]
    },
    {   item: 'Item 3',
        image: `${formulaImage}`, 
        explain: [
            'Explicação 1',
            'Explicação 2',
            'Explicação 3',
        ]
    },        
]
``` 
**Tabela** - Existe um exemplo preenchido [AQUI](./atencao_primaria/04_nascidos_vivos_com_numero_de_consultas_pre-natal_adequado.ts)
```
tableTitle: 'Título',
tableHeader: [
    'Título coluna 1',
    'Titulo coluna 2',
    'Titulo coluna 3', 
]
tableContent: [
    [
        'Linha 1 - Coluna 1',
        'Linha 1 - Coluna 2',
        'Linha 1 - Coluna 3',
    ],
    [
        'Linha 2 - Coluna 1',
        'Linha 2 - Coluna 2',
        'Linha 2 - Coluna 3',
    ]
    [
        'Linha 3 - Coluna 1',
        'Linha 4 - Coluna 2',
        'Linha 5 - Coluna 3',
    ]        
]
tableReference: 'Fonte de referência da tabela'
``` 
**Referências**
```
referenciasTitle: 'Título',
referenciasLinks: [
    {
        text: 'Text Link 1',
        url: 'https.link1.com',
    },
    {
        text: 'Text Link 2',
        url: 'https.link2.com',
    },    
]
``` 
<br>

**ATENÇÃO**: Caso sinta falta de algum componente basta entrar em contato que adicionamos ele. Por hora existem apenas este que acreditamos que devam cobrir a grande maioria dos casos. 

---

<br>

[EXEMPLO COMPLETO](atencao_primaria/01_cobertura_atencao_basica.ts) da página 
**Atenção Primária - Cobertura da Atenção Básica (%)**


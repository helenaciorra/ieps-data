import moment from 'moment';
moment.locale('pt'); // setar o locale para "pt" (Português)

// mudar os nomes dos meses para o locale "pt"
moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
});

export default (date) =>
  date ? moment(date).format('Do [de] MMMM [de] YYYY') : '';

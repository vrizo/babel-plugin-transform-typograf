/* eslint-disable */
const I18N = {
  ru: {
    single: "Слово",
    multiple: "Несколько слов в переводе",
    concat: "Строка, разделенная на " + 
            "части. Нужна конкатенация.",
    tilda: "Сообщение с тильдой~здесь",
    function: n => ruPlural(n, {
      one: `${n} функция`,
      few: `${n} функций`,
      many: `${n} функция`
    }),
    large: "Большой текст, состоящий из " + 
           "большого количества текста. Здесь~" + 
           "несколько строк текста, проверяем!",
    more: "Больше спецсимволов's...",
    nothing: "Нечего делать здесь",
    array: [
        'Вы не можете выбрать тариф потому что:',
        [
          'В тариф включён 1 проект, а у вас их 3.',
          'В тариф включено 1 рабочее место, а у вас 2.'
        ],
        'Вы может выбрать~тарифы начиная с **Medium**.'
      ]
  },
  en: {
    single: "Word",
    multiple: "Several words in a line",
    concat: "This message consist of " + 
            "several parts. Concat needed.",
    tilda: "Message with tilda~is~here",
    function: n => ruPlural(n, {
      one: `${n} function`,
      few: `${n} functions`,
      many: `${n} functions`
    }),
    large: "Large text, lots of " + 
           "words. The text includes several~" + 
           "lines, just to check the plugin!",
    more: "More symbol's...",
    nothing: "Nothing process here",
    array: [
      'You can’t change the plan because:',
      [
        'Plan allows only 1 project, you have 3.',
        'Plan allows only 1 working space, you have 2.'
      ],
      'You can choose any other plan starting from **Medium**.'
    ]
  }
};

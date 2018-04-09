/* eslint-disable */
const I18N = {
  ru: {
    single: "Слово",
    multiple: "Несколько слов в\xA0переводе",
    concat: "Строка, разделенная на\xA0части. Нужна конкатенация.",
    tilda: "Сообщение с\xA0тильдой\xA0здесь",
    function: n => ruPlural(n, {
      one: `${n} функция`,
      few: `${n} функций`,
      many: `${n} функция`
    }),
    large: "Большой текст, состоящий из\xA0большого количества текста. Здесь\xA0несколько строк текста, проверяем!",
    more: "Больше спецсимволов's…",
    nothing: "Нечего делать здесь",
    array: ["Вы\xA0не\xA0можете выбрать тариф потому что:", ["В\xA0тариф включён 1\xA0проект, а\xA0у\xA0вас их\xA03.", "В\xA0тариф включено 1\xA0рабочее место, а\xA0у\xA0вас\xA02."], "Вы\xA0может выбрать\xA0тарифы начиная с\xA0**Medium**."]
  },
  en: {
    single: "Word",
    multiple: "Several words in\xA0a\xA0line",
    concat: "This message consist of\xA0several parts. Concat needed.",
    tilda: "Message with tilda\xA0is\xA0here",
    function: n => ruPlural(n, {
      one: `${n} function`,
      few: `${n} functions`,
      many: `${n} functions`
    }),
    large: "Large text, lots of\xA0words. The text includes several\xA0lines, just to\xA0check the plugin!",
    more: "More symbol’s…",
    nothing: "Nothing process here",
    array: ["You can’t change the plan because:", ["Plan allows only 1\xA0project, you have\xA03.", "Plan allows only 1\xA0working space, you have\xA02."], "You can choose any other plan starting from **Medium**."]
  }
};

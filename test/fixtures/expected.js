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
    nothing: "Нечего делать здесь"
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
    nothing: "Nothing process here"
  }
};

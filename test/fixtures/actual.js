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
    nothing: "Нечего делать здесь"
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
    nothing: "Nothing process here"
  }
};
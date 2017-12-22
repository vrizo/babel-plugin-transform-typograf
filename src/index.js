'use strict'

const Typograf = require('typograf')

const LOCALES = {
  ru: 'ru',
  en: 'en-US'
}

function nbsp (text) {
  return text.replace(/~/g, ' ')
}

function init (lang) {
  const typograf = new Typograf({
    locale: LOCALES[lang]
  })
  if (lang === 'ru') typograf.enableRule('ru/nbsp/*')
  typograf.disableRule('*')
  typograf.enableRule('common/nbsp/*')
  typograf.enableRule('common/punctuation/hellip')
  typograf.enableRule('common/punctuation/apostrophe')
  return typograf
}

module.exports = function ({ types: t }) {
  function concat (node) {
    if (t.isLiteral(node)) return node.value
    if (t.isBinaryExpression(node)) {
      return concat(node.left) + concat(node.right)
    }
    return false
  }

  return {
    name: 'transform-typograf',
    visitor: {
      VariableDeclarator (path) {
        if (path.node.id.name !== 'I18N') return
        let lang = path.node.init

        if (path.node.init.arguments) {
          lang = path.node.init.arguments[0]
        }

        if (!t.isObjectExpression(lang)) return
        const langs = lang.properties

        langs.forEach(function (lang) {
          if (!t.isObjectExpression(lang.value)) return
          const messages = lang.value.properties
          const typograf = init(lang.key.name)

          messages.forEach(function (message) {
            const string = concat(message.value)
            const result = nbsp(typograf.execute(string))
            if (result && string) message.value = t.stringLiteral(result)
          })
        })
      }
    }
  }
}

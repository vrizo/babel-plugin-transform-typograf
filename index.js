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

  function process (node, lang) {
    let output = node
    if (t.isArrayExpression(node)) {
      node.elements.forEach(function (item, index) {
        node.elements[index] = process(item, lang)
      })
      output = node
    } else {
      const typograf = init(lang)
      const string = concat(node)
      const result = nbsp(typograf.execute(string))
      if (string && result) output = t.stringLiteral(result)
    }
    return output
  }

  return {
    name: 'transform-typograf',
    visitor: {
      VariableDeclarator (path) {
        if (path.node.id.name !== 'I18N') return
        let translation = path.node.init

        if (path.node.init.arguments) {
          translation = path.node.init.arguments[0]
        }

        if (!t.isObjectExpression(translation)) return
        const langs = translation.properties

        langs.forEach(function (lang) {
          if (!t.isObjectExpression(lang.value)) return
          const messages = lang.value.properties

          messages.forEach(function (message) {
            message.value = process(message.value, lang.key.name)
          })
        })
      }
    }
  }
}

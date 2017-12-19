<a href="https://amplifr.com/?utm_source=babel-plugin-transform-typograf">
  <img width="100" height="100" align="right"
    alt="Amplifr Logo" src="https://amplifr.com/logo.png" />
</a>

# Babel Typograf Plugin

The plugin automatically formats your translations in JS. It uses 
our structure so it can't be easily implemented in your project.

# Structure (our approach)

```js
const I18N = messages({
  ru: {
    heading: 'Структура должна быть ',
    content: 'вот такая. Допускается ' +
             'использовать~переносы'
  },
  en: {
    heading: 'Structure should be ',
    content: 'like this. It`s allowed ' +
             'to use multiline~translations'
  }
})
```

## Example usage

```js
const t = I18N[this.context.locale]

h('div', [
  h('h1', [t.heading])
  h('p', [t.content])
])
```

- Translation should be plain otherwise it won`t be processed;
- Functions won`t be processed too.

This is mine very first Babel Plugin so please send an Issue 
if you have any suggestions to improve this.

# Plugin installation

1. First of all, you need to install the package:

```bash
$ yarn add babel-plugin-transform-typograf
```

2. Then you should add the plugin in your Babel config, 
for example, `.babelrc`:

```json
  "plugins": [
    ...
    "react-hyperscript",
    "transform-typograf"
  ]
```

# Features

- It uses [Typograf](https://github.com/typograf/typograf) to format 
the text;
- Also, it replaces `~` with non-breaking space. It`s easier to use 
than UTF-8 character, and it is visible in any editor.

# Limitations

- It is tested with `ru` :ru: and `en` :us: languages only for now;

# Tests
- There are no any tests yet.


---

_Special thanks to [Andrey Sitnik](https://github.com/ai)_
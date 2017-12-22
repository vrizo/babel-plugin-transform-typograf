import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { transformFileSync } from 'babel-core'

function trim (str) {
  return str.replace(/^\s+|\s+$/, '')
}

describe('it', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')

  it('should format the example translation object', () => {
    const actualPath = path.join(fixturesDir, 'actual.js')
    let actual = transformFileSync(actualPath).code

    const escaped = /\\u([\d\w]{4})/gi

    actual = actual.replace(escaped, (match, grp) => (
      String.fromCharCode(parseInt(grp, 16))
    ))

    const expected = fs.readFileSync(
      path.join(fixturesDir, 'expected.js')
    ).toString()

    assert.equal(trim(actual), trim(expected))
  })

  it('should format the example translation object inside of function', () => {
    const actualPath = path.join(fixturesDir, 'actual-wrapped.js')
    let actual = transformFileSync(actualPath).code

    const escaped = /\\u([\d\w]{4})/gi

    actual = actual.replace(escaped, (match, grp) => (
      String.fromCharCode(parseInt(grp, 16))
    ))

    const expected = fs.readFileSync(
      path.join(fixturesDir, 'expected-wrapped.js')
    ).toString()

    assert.equal(trim(actual), trim(expected))
  })
})

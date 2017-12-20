import path from 'path'
import fs from 'fs'
import assert from 'assert'
import { transformFileSync } from 'babel-core'
import plugin from '../src'

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('it', () => {

  const fixturesDir = path.join(__dirname, 'fixtures');

  it('Should format the example translation object', () => {
    const actualPath = path.join(fixturesDir, 'actual.js');
    let actual = transformFileSync(actualPath).code;

    const escaped = /\\u([\d\w]{4})/gi;

    actual = actual.replace(escaped, (match, grp) => (
      String.fromCharCode(parseInt(grp, 16))
    ))

    const expected = fs.readFileSync(
        path.join(fixturesDir, 'expected.js')
    ).toString()

    assert.equal(trim(actual), trim(expected))
  });
});

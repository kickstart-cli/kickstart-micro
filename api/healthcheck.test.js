const test = require('ava')
const healthCheck = require('./healthcheck')

test('it works!', async t => {
  const result = await healthCheck()
  t.deepEqual(result, '👻')
})

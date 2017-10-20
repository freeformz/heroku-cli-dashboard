// @flow

import Dashboard from './dashboard'

test('it says hello to the world', async () => {
  let cmd = await Dashboard.mock()
  expect(cmd.out.stdout.output).toEqual('opening!\n')
})
/*
test('it says hello to jeff', async () => {
  let cmd = await Dashboard.mock('--name', 'jeff')
  expect(cmd.out.stdout.output).toEqual('hello jeff!\n')
})
*/

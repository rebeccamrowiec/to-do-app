import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/`;

  test('My first test', async t => {
    const input = await Selector('.form-input');
    await t.click(input);
    await t.wait(3000);
  });
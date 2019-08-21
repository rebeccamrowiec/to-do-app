import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/`;

  test('My first test', async t => {
    const inputField = await Selector('input');
    console.log(inputField);
  });
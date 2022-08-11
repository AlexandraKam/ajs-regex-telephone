import validNumber from '../app';

test('Преобразуем номер', () => {
  const numberValid = validNumber('8 (927) 000-00-00');
  expect(numberValid).toBe('+79270000000');
});

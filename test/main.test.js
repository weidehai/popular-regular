import {
  pureNumber,
  pureFloat,
  signFloat,
  signNumber,
  leftParentheses,
  rightParentheses,
  whiteSpace,
} from '../src/popularRegular'


test('pureNumber', () => {
  expect(new RegExp(pureNumber).test('====')).toBe(true);
});

test('pureFloat', () => {
  expect(new RegExp(pureFloat).test('1.123')).toBe(true);
});

test('pureFloat limit strat and end', () => {
  expect(new RegExp(`^(${pureFloat})$`).test('1.123')).toBe(true);
});


test('pureFloat|signFloat (limit strat and end)', () => {
  expect(new RegExp(`^((${pureFloat})|(${signNumber}))$`).test('-123')).toBe(true);
});

test('signFloat', () => {
  expect(new RegExp(signFloat).test('+.123')).toBe(true);
});

test('signNumber', () => {
  expect(new RegExp(signNumber).test('--123--')).toBe(true);
});

test('leftParentheses', () => {
  expect(new RegExp(leftParentheses).test('(')).toBe(true);
});

test('rightParentheses', () => {
  expect(new RegExp(rightParentheses).test(')')).toBe(true);
});

test('whiteSpace', () => {
  expect(new RegExp(whiteSpace).test('   123')).toBe(true);
});



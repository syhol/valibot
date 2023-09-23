import { describe, it as test } from 'test';
import { expect } from 'expect';
import { cuid2 } from './cuid2.ts';

describe('cuid2', () => {
  test('should pass only cuid2s', () => {
    const validate = cuid2();

    const value1 = 'o2dyrckf0vbqhftbcx8ex7r8';
    expect(validate(value1).output).toBe(value1);
    const value2 = 'pj17j4wheabtydu00x2yuo8s';
    expect(validate(value2).output).toBe(value2);
    const value3 = 'vkydd2qpoediyioixyeh8zyo';
    expect(validate(value3).output).toBe(value3);
    const value4 = 'ja3j1arc87i80ys1zxk8iyiv';
    expect(validate(value4).output).toBe(value4);
    const value5 = 'pbe6zw7wikj83vv5knjk1wx8';
    expect(validate(value5).output).toBe(value5);

    expect(validate('').issues).toBeTruthy();
    expect(validate('w#@%^').issues).toBeTruthy();
    expect(validate('o2dyrcKf0vbqhftBcx8ex7r8').issues).toBeTruthy();
    expect(validate('1vx6pa5rqog2tqdztxaa0xgw').issues).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not an cuid2!';
    const validate = cuid2(error);
    expect(validate('').issues?.[0].message).toBe(error);
  });
});

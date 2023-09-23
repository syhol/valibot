import { describe, it as test } from 'test';
import { expect } from 'expect';
import { ip } from './ip.ts';

describe('ip', () => {
  test('should pass only IP v4 or v6', () => {
    const validate = ip();
    const value1 = '192.168.1.1';
    expect(validate(value1).output).toBe(value1);
    const value2 = '127.0.0.1';
    expect(validate(value2).output).toBe(value2);
    const value3 = '0.0.0.0';
    expect(validate(value3).output).toBe(value3);
    const value4 = '255.255.255.255';
    expect(validate(value4).output).toBe(value4);
    const value5 = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    expect(validate(value5).output).toBe(value5);
    const value6 = 'FE80:0000:0000:0000:0202:B3FF:FE1E:8329';
    expect(validate(value6).output).toBe(value6);
    const value7 = 'fe80::1ff:fe23:4567:890a';
    expect(validate(value7).output).toBe(value7);
    const value8 = '2001:db8:85a3:8d3:1319:8a2e:370:7348';
    expect(validate(value8).output).toBe(value8);

    expect(validate('').issues).toBeTruthy();
    expect(validate('1').issues).toBeTruthy();
    expect(validate('-1.0.0.0').issues).toBeTruthy();
    expect(validate('0..0.0.0').issues).toBeTruthy();
    expect(validate('1234.0.0.0').issues).toBeTruthy();
    expect(validate('256.256.256.256').issues).toBeTruthy();
    expect(validate('1.2.3').issues).toBeTruthy();
    expect(validate('0.0.0.0.0').issues).toBeTruthy();
    expect(
      validate('test:test:test:test:test:test:test:test').issues
    ).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not an IP v4 or v6!';
    const validate = ip(error);
    expect(validate('test').issues?.[0].message).toBe(error);
  });
});

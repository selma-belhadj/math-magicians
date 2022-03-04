import operate from '../operate';

describe('test for opertae file', () => {
  test('test for addition', () => {
    const one = 4;
    const two = 16;
    const operation = '+';
    const response = operate(one, two, operation);
    expect(response).toBe('20');
  });

  test('test for subtraction', () => {
    const one = 16;
    const two = 4;
    const operation = '-';
    const response = operate(one, two, operation);
    expect(response).toBe('12');
  });

  test('test for multiplication', () => {
    const one = 4;
    const two = 4;
    const operation = 'x';
    const response = operate(one, two, operation);
    expect(response).toBe('16');
  });

  test('test for divition 1', () => {
    const one = 44;
    const two = 4;
    const operation = '÷';
    const response = operate(one, two, operation);
    expect(response).toBe('11');
  });

  test('test for divition 2', () => {
    const one = 4;
    const two = 0;
    const operation = '÷';
    const response = operate(one, two, operation);
    expect(response).toBe('Can\'t divide by 0.');
  });

  test('test for modulo 1', () => {
    const one = 18;
    const two = 4;
    const operation = '%';
    const response = operate(one, two, operation);
    expect(response).toBe('2');
  });

  test('test for modulo 2', () => {
    const one = 4;
    const two = 0;
    const operation = '%';
    const response = operate(one, two, operation);
    expect(response).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

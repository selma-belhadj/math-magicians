import calculate from '../calculate';

describe('Test for the button AC', () => {
  test('it should return Obj with null values', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };
    const btnValue = 'AC';

    const response = calculate(obj, btnValue);

    expect(response.total).toBe(null);
    expect(response.next).toBe(null);
    expect(response.operation).toBe(null);
  });
});

describe('Test for button with type of number ', () => {
  test('case 1: total and operation are null', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const btnValue = '0';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });
});

describe('Test if there is an operation ', () => {
  test('case 1: If there is an operation, update next which has a value', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: '+',
    };
    const btnValue = '1';
    // expect(obj.next).toEqual(4);
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('41');
  });

  test('case 2: If there is an operation, update next which is null', () => {
    const obj = {
      total: 2,
      next: null,
      operation: '+',
    };
    const btnValue = '1';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('1');
  });
});

describe('Test if there is no operation, update next and clear the value', () => {
  test('case 1: If there is a next value', () => {
    const obj = {
      total: 2,
      next: 4,
      operation: null,
    };
    const btnValue = '1';
    // expect(obj.next).toEqual(4);
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('41');
    expect(response.total).toEqual(null);
  });

  test('case 2: If there is no next value,', () => {
    const obj = {
      total: 2,
      next: null,
      operation: null,
    };
    const btnValue = '1';
    // expect(obj.next).toEqual(4);
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('1');
    expect(response.total).toEqual(null);
  });
});

describe('if the clicked button is .', () => {
  test('case 1 - next has value and already include .: should return { ...obj }', () => {
    const obj = {
      total: 2,
      next: '3.',
      operation: '+',
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('3.');
  });

  test('case 2 - next has value and doesn\'t include .: should return { ...obj, next: {obj.next}.}', () => {
    const obj = {
      total: 2,
      next: '3',
      operation: '+',
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('3.');
  });

  test('case 3 - operation has a value and click on the dot . directly: should return return { next: \'0.\' }', () => {
    const obj = {
      total: 2,
      next: null,
      operation: '+',
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('0.');
  });

  test('case 4 - total has a value and already contains the dot . directly: should return return {}', () => {
    const obj = {
      total: '2.',
      next: null,
      operation: null,
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });

  test('case 5 - total has a value and doesn\'t contains the dot .: should return { total: {obj.total}. }', () => {
    const obj = {
      total: '2',
      next: null,
      operation: null,
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response.total).toEqual('2.');
  });

  test('case 5 - total doesn\'t have a value and use clicks on the dot: should return { total: \'0.\' }', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const btnValue = '.';
    const response = calculate(obj, btnValue);
    expect(response.total).toEqual('0.');
  });
});

describe('if the clicked button is =', () => {
  test('case 1: next and operation have values, it should return {total: operate(obj.total, obj.next, obj.operation), next: null, operation: null}', () => {
    const obj = {
      total: 14,
      next: 5,
      operation: '-',
    };
    const btnValue = '=';
    const response = calculate(obj, btnValue);
    expect(response.total).toEqual('9');
    expect(response.next).toEqual(null);
    expect(response.operation).toEqual(null);
  });

  test('case 2: \'=\' with no operation, nothing to do, it should return {}', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const btnValue = '=';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });
});

describe('if the clicked button is +/-', () => {
  test('case 1: next has value: should return { ...obj, next: (-1 * parseFloat(obj.next)).toString()', () => {
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };
    const btnValue = '+/-';
    const response = calculate(obj, btnValue);
    expect(response.next).toEqual('-5');
  });

  test('case 2: total has value: should return { ...obj, total: (-1 * parseFloat(obj.total)).toString()', () => {
    const obj = {
      total: 6,
      next: null,
      operation: null,
    };
    const btnValue = '+/-';
    const response = calculate(obj, btnValue);
    expect(response.total).toEqual('-6');
  });

  test('case 3: total and next have no value: should return {}', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const btnValue = '+/-';
    const response = calculate(obj, btnValue);
    expect(response).toEqual({});
  });
});

describe('User pressed an operation after pressing \'=\'', () => {
  test('next and operation have no value, total has a value: it should return { ...obj, operation: buttonName }', () => {
    const obj = {
      total: 5,
      next: null,
      operation: null,
    };
    const btnValue = 'x';
    const response = calculate(obj, btnValue);
    expect(response.operation).toEqual('x');
  });
});

describe('User pressed an operation button and there is an existing operation', () => {
  test('operation and total have values and next with no value, it should return { ...obj, operation: buttonName }', () => {
    const obj = {
      total: 5,
      next: null,
      operation: 'x',
    };
    const btnValue = '+';
    const response = calculate(obj, btnValue);
    expect(response.operation).toEqual('+');
  });

  test('operation, next and total have values it should return { total: operate(obj.total, obj.next, obj.operation), next: null, operation: buttonName, }', () => {
    const obj = {
      total: 5,
      next: 5,
      operation: 'x',
    };
    const btnValue = '+';
    const response = calculate(obj, btnValue);
    expect(response.total).toEqual('25');
    expect(response.operation).toEqual('+');
  });
});

describe(' The user hasn\'t typed a number yet, just save the operation', () => {
  test('next has a value it should return { operation: buttonName }', () => {
    const obj = {
      total: 5,
      next: null,
      operation: null,
    };
    const btnValue = '+';
    const response = calculate(obj, btnValue);
    expect(response.operation).toEqual('+');
  });
});

describe(' save the operation and shift \'next\' into \'total\'', () => {
  test('next has a value and total doesn\'t: it should return { total: obj.next, next: null, operation: buttonName, }', () => {
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };
    const btnValue = '+';
    const response = calculate(obj, btnValue);
    expect(response.operation).toEqual('+');
    expect(response.total).toEqual(5);
  });
});

const operations = require('../src/controllers/operations');

describe('Decimal operations', () => {
  it('adds two decimal numbers', () => {
    const req = { body: { num1: 5, num2: 7 } };
    const res = { json: jest.fn() };

    operations.add_10(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 5,
      num2: 7,
      result_before_convert: 12
    });
  });

  it('subtracts two decimal numbers', () => {
    const req = { body: { num1: 9, num2: 4 } };
    const res = { json: jest.fn() };

    operations.subtract_10(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 9,
      num2: 4,
      result_before_convert: 5
    });
  });

  it('multiplies two decimal numbers', () => {
    const req = { body: { num1: 6, num2: 3 } };
    const res = { json: jest.fn() };

    operations.multiply_10(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 6,
      num2: 3,
      result_before_convert: 18
    });
  });

  it('divides two decimal numbers', () => {
    const req = { body: { num1: 20, num2: 4 } };
    const res = { json: jest.fn() };

    operations.divide_10(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 20,
      num2: 4,
      result_before_convert: 5
    });
  });
});

describe('Quinary operations', () => {
  it('adds two quinary numbers, returns quinary result', () => {
    const req = { body: { num1: 13, num2: 12 } }; // quinary input
    const res = { json: jest.fn() };

    operations.add_5(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 13,
      num2: 12,
      result: '30' // base-5 result
    });
  });

  it('subtracts two quinary numbers, returns quinary result', () => {
    const req = { body: { num1: 44, num2: 13 } };
    const res = { json: jest.fn() };

    operations.subtract_5(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 44,
      num2: 13,
      result: '31'
    });
  });

  it('multiplies two quinary numbers, returns quinary result', () => {
    const req = { body: { num1: 13, num2: 12 } };
    const res = { json: jest.fn() };

    operations.multiply_5(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 13,
      num2: 12,
      result: '211'
    });
  });

  it('divides two quinary numbers, returns quinary result', () => {
    const req = { body: { num1: 33, num2: 11 } };
    const res = { json: jest.fn() };

    operations.divide_5(req, res);

    expect(res.json).toHaveBeenCalledWith({
      num1: 33,
      num2: 11,
      result: '3'
    });
  });

  it('throws or fails when dividing by zero', () => {
    const req = { body: { num1: 13, num2: 0 } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    expect(() => operations.divide_5(req, res)).toThrow();
  });
});

describe('Single-number operations', () => {
  it('squares a quinary number', () => {
    const req = { body: { num1: 13 } }; // quinary 13 = decimal 8
    const res = { json: jest.fn() };

    operations.square_5(req, res);

    // 8 squared = 64, quinary = 224
    expect(res.json).toHaveBeenCalledWith({ num1: 13, result: '224' });
  });

  it('takes square root of a quinary number', () => {
    const req = { body: { num1: 100 } }; // quinary 100 = decimal 25
    const res = { json: jest.fn() };

    operations.square_root_5(req, res);

    // √25 = 5, quinary = 10
    expect(res.json).toHaveBeenCalledWith({ num1: 100, result: '10' });
  });
});
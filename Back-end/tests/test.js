import { calculate } from '../src/controllers/operations.ts';

describe('calculate' , () => {
    test ("Adds two quinary numbers, returns quinary result", () => {
        expect(calculate('13','12','+', 'q')).toBe('30');
        expect(calculate('44','44','+','q')).toBe('143');
    });
});
describe('calculate' , () => {
    test("Adds two quinary numbers, returns decimal result", () => {
        expect(calculate('13', '12', '+', 'd')).toBe(15);
        expect(calculate('44', '44', '+', 'd')).toBe(48)
    });
});

describe('calculate' , () => {
    test("Subtracts two quinary numbers, returns quinary result", () => {
        expect(calculate('44', '13', '-', 'q')).toBe('31');
        expect(calculate('24', '14', '-', 'q')).toBe('10')
    });
});
describe('calculate' , () => {
    test("Subtracts two quinary numbers, returns decimal result", () => {
        expect(calculate('44', '13', '-', 'd')).toBe(16);
        expect(calculate('44', '44', '-', 'd')).toBe(0)
    });
});

describe('calculate' , () => {
    test("Multiplies two quinary numbers, returns quinary result", () => {
        expect(calculate('13', '12', '*', 'q')).toBe('211');
        expect(calculate('24', '14', '*', 'q')).toBe('1001')
    });
});
describe('calculate' , () => {
    test("Multiplies two quinary numbers, returns decimal result", () => {
        expect(calculate('13', '12', '*', 'd')).toBe(56);
        expect(calculate('24', '14', '*', 'd')).toBe(126)
    });
});

describe('calculate' , () => {
    test("Divides two quinary numbers, returns quinary result", () => {
        expect(calculate('33', '11', '/', 'q')).toBe('3');
        expect(calculate('44', '22', '/', 'q')).toBe('2')
    });
});
describe('calculate' , () => {
    test("Divides two quinary numbers, returns decimal result", () => {
        expect(calculate('33', '11', '/', 'd')).toBe(3);
        expect(calculate('44', '22', '/', 'd')).toBe(2)
    });
});
describe('calculate', () => {
    test("Should throw error for dividing by 0", () => {
        expect(() => calculate('13', '0', '/', 'd')).toThrow()
    });
});
import { calculate } from '../src/controllers/operations.ts';
describe('calculate' , () => {
    test ("adds two quinary numbers, returns quinary result", () => {
        expect(calculate('13','12','+', 'q')).toBe('30');
        expect(calculate('13','12','+','d')).toBe('15');
    });
});
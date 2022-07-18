import validateInputIsNumber from '../src/helpers/validateInputIsNumber';

const invalidInputMsg = 'Please enter a number.';

describe('validateInputIsNumber', () => {
    it('should return true for numbers', () => {
        expect(validateInputIsNumber('5')).toBe(true);
    });

    it('should return invalid input message for alpha characters', () => {
        expect(validateInputIsNumber('five')).toBe(invalidInputMsg);
    });

    it('should return invalid input message for spaces', () => {
        expect(validateInputIsNumber(' ')).toBe(invalidInputMsg);
    });

    it('should return invalid input message for decimals', () => {
        expect(validateInputIsNumber('5.5')).toBe(invalidInputMsg);
    });

    it('should return invalid input message for negative numbers', () => {
        expect(validateInputIsNumber('-5')).toBe(invalidInputMsg);
    });
});

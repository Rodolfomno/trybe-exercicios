const sum = require ('./sum');

describe('sum', () => {
    test(' 4 + 5  = 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    test('0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    test('erro se passar string', () => {
        expect(() => {
            sum(1, '1');
        }).toThrow(/parameters must be numbers/);
    })
})

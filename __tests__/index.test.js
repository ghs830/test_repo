const { test } = require('../index');

describe('test', () => {
    it('additionne deux nombres positifs', () => {
        expect(test(2, 3)).toBe(5);
    });

    it('additionne un nombre négatif', () => {
        expect(test(-1, 4)).toBe(3);
    });

    it('additionne deux zéros', () => {
        expect(test(0, 0)).toBe(0);
    });
});

import {hundredToWords, chunkToWords} from '../index';

describe('273 util', () => {
    test('hundredToWords', () => {
        expect(hundredToWords(0)).toBe('');
        expect(hundredToWords(9)).toBe('Nine');
        expect(hundredToWords(30)).toBe('Thirty');
        expect(hundredToWords(39)).toBe('Thirty Nine');
    });

    test('chunkToWords', () => {
        expect(chunkToWords(0)).toBe('');
        expect(chunkToWords(9)).toBe('Nine');
        expect(chunkToWords(30)).toBe('Thirty');
        expect(chunkToWords(39)).toBe('Thirty Nine');
        expect(chunkToWords(100)).toBe('One Hundred');
        expect(chunkToWords(109)).toBe('One Hundred Nine');
        expect(chunkToWords(130)).toBe('One Hundred Thirty');
        expect(chunkToWords(139)).toBe('One Hundred Thirty Nine');
        expect(chunkToWords(400)).toBe('Four Hundred');
        expect(chunkToWords(409)).toBe('Four Hundred Nine');
        expect(chunkToWords(430)).toBe('Four Hundred Thirty');
        expect(chunkToWords(439)).toBe('Four Hundred Thirty Nine');
    });
});

import numberToWords from '../index';

describe('273', () => {
  test('value', () => {
    expect(numberToWords(123)).toBe('One Hundred Twenty Three');
    expect(numberToWords(12345)).toBe('Twelve Thousand Three Hundred Forty Five');
    expect(numberToWords(1234567)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
    expect(numberToWords(1234567891)).toBe('One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');

    expect(numberToWords(0)).toBe('Zero');
    expect(numberToWords(1000)).toBe('One Thousand');
    expect(numberToWords(1000010)).toBe('One Million Ten');
  });
});

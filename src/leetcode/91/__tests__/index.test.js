import numDecodings from '../index';

describe('91', () => {
  test('value', () => {
    expect(numDecodings('0')).toBe(0);
    expect(numDecodings('1')).toBe(1);
    expect(numDecodings('01')).toBe(0);
    expect(numDecodings('100')).toBe(0);
    expect(numDecodings('101')).toBe(1);
    expect(numDecodings('110')).toBe(1);
    expect(numDecodings('301')).toBe(0);
    expect(numDecodings('1787897759966261825913315262377298132516969578441236833255596967132573482281598412163216914566534565')).toBe(5898240);
  });
});

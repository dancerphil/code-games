import createClosure from '../index';

describe('createClosure', () => {
    test('api shape', () => {
        const result = createClosure();
        const keys = Object.keys(result);
        expect(keys).toEqual(['getValue', 'setValue', 'subscribe']);
    });

    test('closure initialized with undefined', () => {
        const {getValue} = createClosure();
        expect(getValue()).toEqual(undefined);
    });

    test('setValue returns undefined', () => {
        const {setValue} = createClosure();
        const result = setValue();
        expect(result).toEqual(undefined);
    });

    test('setValue', () => {
        const {getValue, setValue} = createClosure();

        setValue(false);
        expect(getValue()).toEqual(false);

        setValue({a: {b: {}}});
        expect(getValue()).toEqual({a: {b: {}}});

        const func = () => {};
        setValue(func);
        expect(getValue()).toEqual(func);
    });

    test('subscribe can only be called with function', () => {
        const {subscribe} = createClosure();
        expect(() => subscribe()).toThrow();
        expect(() => subscribe(false)).toThrow();
        expect(() => subscribe(() => {})).not.toThrow();
    });

    test('subscribe without args', () => {
        const {setValue, subscribe} = createClosure();
        let sum = 0;
        subscribe(() => {
            sum += 1;
        });
        setValue();
        expect(sum).toEqual(1);

        subscribe(() => {
            sum += 1;
        });
        setValue();
        expect(sum).toEqual(3);
    });

    test('subscribe returns unsubscribe', () => {
        const {setValue, subscribe} = createClosure();
        let sum = 0;
        const unsubscribe = subscribe(() => {
            sum += 1;
        });
        setValue();
        expect(sum).toEqual(1);

        unsubscribe();
        setValue();
        expect(sum).toEqual(1);
    });

    test('subscribe with args', () => {
        const {getValue, setValue, subscribe} = createClosure();
        let sum = 0;
        subscribe(() => {
            sum += 1;
        });
        setValue();
        expect(sum).toEqual(1); // sum + 1

        const add = v => {
            sum += v;
        };
        const unsubscribe = subscribe(add);
        setValue(5);
        expect(sum).toEqual(7); // sum + 1 + 5

        subscribe(v => {
            sum *= v;
        });
        setValue(2);
        expect(sum).toEqual(20); // (sum + 1 + 2) * 2

        unsubscribe();
        subscribe(add);
        setValue(-2);
        expect(sum).toEqual(-44); // (sum + 1) * (-2) + (-2)

        expect(getValue()).toEqual(-2);
    });
});

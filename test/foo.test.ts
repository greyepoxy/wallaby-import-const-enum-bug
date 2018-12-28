import { doAThing, doAnotherThing } from '../src/foo';

describe('', () => {
    it('does a thing', () => {
        expect(doAThing()).toEqual(5);
    });

    it('does another thing', () => {
        expect(doAnotherThing()).toEqual(5);
    });
});
import { SomeNumbers } from 'bar';
import { SomeMoreNumbers } from './bar2';

export function doAThing(): number {
    return SomeNumbers.VALUE;
}

export function doAnotherThing(): number {
    return SomeMoreNumbers.VALUE;
}
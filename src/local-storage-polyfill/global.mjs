import {Storage} from './index.mjs';

if (typeof globalThis.localStorage !== 'undefined') {
    throw new Error('Cannot polyfill the "localStorage" globally: the property is already defined. Are you using a polyfill already?');
}
globalThis.localStorage = new Storage();

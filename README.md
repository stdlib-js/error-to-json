<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# toJSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [JSON][json] representation of an [error][mdn-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/error-to-json
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var toJSON = require( '@stdlib/error-to-json' );
```

#### toJSON( error )

Returns a [JSON][json] representation of an [`error`][mdn-error] object.

```javascript
var err = new Error( 'beep' );

var json = toJSON( err );
/* returns
    {
        'type': 'Error',
        'name': 'Error', // if present
        'message': 'beep',
        'stack': '...' // if present
    }
*/
```

The [JSON][json] `object` is **guaranteed** to have the following properties:

-   **type**: error type.
-   **message**: error message.

The **only** standardized cross-platform property is `message`. Depending on the platform, the following properties **may** be present:

-   **name**: error name.
-   **stack**: stack trace.
-   **code**: error code ([Node.js][node-system-error] system errors).
-   **errno**: error code `string` ([Node.js][node-system-error] system errors).
-   **syscall**: `string` representing the failed system call ([Node.js][node-system-error] system errors).

The function also serializes **all** `enumerable` properties.

<!-- eslint-disable object-curly-newline -->

```javascript
var err = new Error( 'beep' );
err.a = 'b';
err.c = { 'd': 'e' };

var json = toJSON( err );
/* returns
    {
        'type': 'Error',
        'name': 'Error', // if present
        'message': 'beep',
        'stack': '...', // if present
        'a': 'b',
        'c': {
            'd': 'e'
        }
    }
*/
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Supported built-in [`error`][mdn-error] types:

    -   [`Error`][mdn-error] 
    -   [`TypeError`][mdn-type-error]
    -   [`SyntaxError`][mdn-syntax-error]
    -   [`ReferenceError`][mdn-reference-error]
    -   [`RangeError`][mdn-range-error]
    -   [`URIError`][mdn-uri-error]
    -   [`EvalError`][mdn-eval-error]

-   The implementation supports custom error types and sets the `type` field to the closest built-in [`error`][mdn-error] type.

    ```javascript
    function CustomError( msg ) {
        this.name = 'CustomError';
        this.message = msg || '';
        this.stack = ( new TypeError() ).stack;
        return this;
    }
    CustomError.prototype = Object.create( TypeError.prototype );
    CustomError.prototype.constructor = CustomError;

    var err = new CustomError( 'boop' );

    var json = toJSON( err );
    /*
        {
            'type': 'TypeError',
            'name': 'CustomError',
            'message': 'boop',
            'stack': '...'
        }
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toJSON = require( '@stdlib/error-to-json' );

var err = new Error( 'beep' );
var out = toJSON( err );
/* returns
    {
        'type': 'Error',
        'name': 'Error',
        'message': 'beep',
        'stack': '...'
    }
*/

err = new TypeError( 'invalid type' );
out = toJSON( err );
/* returns
    {
        'type': 'TypeError',
        'name': 'TypeError',
        'message': 'invalid type',
        'stack': '...'
    }
*/

err = new SyntaxError( 'bad syntax' );
out = toJSON( err );
/* returns
    {
        'type': 'SyntaxError',
        'name': 'SyntaxError',
        'message': 'bad syntax',
        'stack': '...'
    }
*/

err = new ReferenceError( 'unknown variable' );
out = toJSON( err );
/* returns
    {
        'type': 'ReferenceError',
        'name': 'ReferenceError',
        'message': 'unknown variable',
        'stack': '...'
    }
*/

err = new URIError( 'bad URI' );
out = toJSON( err );
/* returns
    {
        'type': 'URIError',
        'name': 'URIError',
        'message': 'bad URI',
        'stack': '...'
    }
*/

err = new RangeError( 'value out-of-range' );
out = toJSON( err );
/* returns
    {
        'type': 'RangeError',
        'name': 'RangeError',
        'message': 'value out-of-range',
        'stack': '...'
    }
*/

err = new EvalError( 'eval error' );
out = toJSON( err );
/* returns
    {
        'type': 'EvalError',
        'name': 'EvalError',
        'message': 'eval error',
        'stack': '...'
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/error/reviver`][@stdlib/error/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized error object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-to-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-to-json

[test-image]: https://github.com/stdlib-js/error-to-json/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/error-to-json/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-to-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-to-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-to-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-to-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-to-json/tree/deno
[umd-url]: https://github.com/stdlib-js/error-to-json/tree/umd
[esm-url]: https://github.com/stdlib-js/error-to-json/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/error-to-json/main/LICENSE

[json]: http://www.json.org/

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[mdn-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

[mdn-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

[node-system-error]: https://nodejs.org/api/errors.html#errors_class_system_error

<!-- <related-links> -->

[@stdlib/error/reviver]: https://github.com/stdlib-js/error-reviver

<!-- </related-links> -->

</section>

<!-- /.links -->

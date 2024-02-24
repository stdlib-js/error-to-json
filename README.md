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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# error2json

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [JSON][json] representation of an [error][mdn-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
error2json = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/error-to-json@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var error2json = require( 'path/to/vendor/umd/error-to-json/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/error-to-json@v0.2.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.error2json;
})();
</script>
```

#### error2json( error )

Returns a [JSON][json] representation of an [`error`][mdn-error] object.

```javascript
var err = new Error( 'beep' );

var json = error2json( err );
/* e.g., returns
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

var json = error2json( err );
/* e.g., returns
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

    var json = error2json( err );
    /* e.g., returns
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/error-to-json@v0.2.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var err = new Error( 'beep' );
var out = error2json( err );
/* e.g., returns
    {
        'type': 'Error',
        'name': 'Error',
        'message': 'beep',
        'stack': '...'
    }
*/

err = new TypeError( 'invalid type' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'TypeError',
        'name': 'TypeError',
        'message': 'invalid type',
        'stack': '...'
    }
*/

err = new SyntaxError( 'bad syntax' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'SyntaxError',
        'name': 'SyntaxError',
        'message': 'bad syntax',
        'stack': '...'
    }
*/

err = new ReferenceError( 'unknown variable' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'ReferenceError',
        'name': 'ReferenceError',
        'message': 'unknown variable',
        'stack': '...'
    }
*/

err = new URIError( 'bad URI' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'URIError',
        'name': 'URIError',
        'message': 'bad URI',
        'stack': '...'
    }
*/

err = new RangeError( 'value out-of-range' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'RangeError',
        'name': 'RangeError',
        'message': 'value out-of-range',
        'stack': '...'
    }
*/

err = new EvalError( 'eval error' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'EvalError',
        'name': 'EvalError',
        'message': 'eval error',
        'stack': '...'
    }
*/

})();
</script>
</body>
</html>
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

-   <span class="package-name">[`@stdlib/error-reviver`][@stdlib/error/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized error object.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/error-to-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/error-to-json

[test-image]: https://github.com/stdlib-js/error-to-json/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/error-to-json/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/error-to-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/error-to-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/error-to-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/error-to-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/error-to-json/tree/deno
[deno-readme]: https://github.com/stdlib-js/error-to-json/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/error-to-json/tree/umd
[umd-readme]: https://github.com/stdlib-js/error-to-json/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/error-to-json/tree/esm
[esm-readme]: https://github.com/stdlib-js/error-to-json/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/error-to-json/blob/main/branches.md

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

[@stdlib/error/reviver]: https://github.com/stdlib-js/error-reviver/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->

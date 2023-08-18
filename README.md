
nunjucks-addons
===============

**Nunjucks Template Rendering Engine Addons**

<p/>
<img src="https://nodei.co/npm/@rse/nunjucks-addons.png?downloads=true&stars=true" alt=""/>

Abstract
--------

This is a small collection of addons for the powerful templating
rendering engine [Mozilla Nunjucks](https://mozilla.github.io/nunjucks/).
It adds reusable globals, filters and extensions. It can be used
standalone or in the companion [Nunjucks CLI](https://github.com/rse/nunjucks-cli/).

CLI Usage
---------

```sh
$ npm install -g @rse/nunjucks-cli @rse/nunjucks-addons
$ nunjucks -e @rse/nunjucks-addons [...]
```

Alternatively, instead of globally installing it, you can also use it on-the-fly:

```sh
$ npx --yes --package @rse/nunjucks-cli --package @rse/nunjucks-addons -- \
  nunjucks -e @rse/nunjucks-addons [...]
```

API Usage
---------

```js
const nunjucks = require("nunjucks")
const addons   = require("@rse/nunjucks-addons")

const env = nunjucks.configure("-", {})
addons(env)
const output = env.renderString("Hello, {{ who }}!", { who: "World" })
```

Addons
------

- **date**: this adds the Nunjucks filter `date(<format>[, ...])`
  for formatting a `Date` object with the help of
  [Moment.js](https://momentjs.com/).
  Example: `{{ obj | date("YYYYMMD") }}`

- **def**: this adds the Nunjucks global function `def(<value>, <valueDefault>, <valueType>)`
  for using the input `<value>`, or if `undefined` the `<valueDefault>` as the fallback value, 
  and converting the value to `<valueType>` (either `bool`, `int`, `float` or `string`).
  The underlying conversion filters are also exposed under `toBool(value)`, `toInt(value)`,
  `toFloat(value)` and `toString(value)`.
  Example: `{% set foo = def(foo, "bar", "string") %}`

- **eval**: this adds the Nunjucks extension `eval <key>=<expr> [, ...]`
  for evaluating the arbitrary JavaScript expression `<expr>` and assigning 
  the resulting value to the Nunjucks context property `<key>`. It is
  similar to the built-in `set` extension, but works on evaluated expressions.
  Example: `{% eval year = "(new Date()).getFullYear()" %}`

- **exec**: this adds the Nunjucks extension `exec <code> endexec`
  for executing arbitrary JavaScript `<code>` with the
  Nunjucks context as the global object.
  Example: `{% exec %} foo = "bar" {% endexec %}`

- **glob**: this adds the Nunjucks global function `glob(<pattern>[, <options>])`
  for expanding file paths with the help of the [glob](https://npmjs.com/glob) package.
  Example: `{{ glob("*.txt") }}`

- **jsonpath**: this adds the Nunjucks filter `jsonpath(<path>[, <count>])`
  and the Nunjucks global function `jsonpath(<obj>, <path>[, <count>])`
  for selecing sub-fields of an object `<object>` with the help of the
  [JSONPath](https://goessner.net/articles/JsonPath/) query `<path>`.
  Example: `{{ obj | jsonpat("store.book[0].title") }}`

- **pad**: this adds the Nunjucks filter `pad(<num>[, <char>[, <toRight>]])`
  for formatting the input string value to `<num>` characters in length by 
  padding it to the left (or to the right if `<toRight>` is `true`) with
  `<char>` characters.
  Example: `{{ n | pad(2, "0") }}`

- **sprintf**: this adds the Nunjucks filter `sprintf(<format>[, <arg>[, ...]])`
  and the Nunjucks global function `sprintf(<format>[, <arg>[, ...]])`
  for formatting the input value (and optionally the additional arguments `<arg>`)
  with the help of POSIX sprintf(3) formatting specifications `<format>`.
  Example: `{{ n | sprintf("%04.2f") }}`

- **uuid**: this adds the Nunjucks global function `uuid(...)` 
  for generating Universally Unique Identifiers (UUID) with the help
  of [Pure-UUID](https://npmjs.com/pure-uuid).
  Example: `{{ uuid(1) }}`

License
-------

Copyright &copy; 2019-2023 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


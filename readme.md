# html-escape [![Build Status](https://travis-ci.org/1000ch/html-escape.svg?branch=master)](https://travis-ci.org/1000ch/html-escape)

Escape HTML special characters.

## Install

```sh
$ npm install 1000ch/html-escape
```

## Usage

```javascript
const escapeHTML = require('html-escape');

escapeHTML('<html></html>');
// => &lt;html&gt;&lt;/html&gt;
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)

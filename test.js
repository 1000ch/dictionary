import test from 'ava';
import isFunction from 'is-function';
import escapeHTML from './index.js';

test('escapeHTML', t => {
  t.true(isFunction(escapeHTML));

  const object = {};
  const array = [];
  t.is(escapeHTML(true), true, 'returns original value if argument is true');
  t.is(escapeHTML(0), 0, 'returns original value if argument is number');
  t.is(escapeHTML(object), object, 'returns original value if argument is empty object');
  t.is(escapeHTML(array), array, 'returns original value if argument is empty array');
  t.is(escapeHTML(null), null, 'returns original value if argument is null');
  t.is(escapeHTML(undefined), undefined, 'returns original value if argument is undefind');

  t.is(
    escapeHTML('<html></html>'),
    '&lt;html&gt;&lt;/html&gt;',
    'returns escaped value'
  );
  t.is(
    escapeHTML('<script>let string = `${location.href}`;</script>'),
    '&lt;script&gt;let string = &#x60;${location.href}&#x60;;&lt;/script&gt;',
    'returns escaped value'
  );
  t.is(
    escapeHTML('<div id="container">'),
    '&lt;div id=&quot;container&quot;&gt;',
    'returns escaped value'
  );
  t.is(
    escapeHTML("<div id='container'>"),
    '&lt;div id=&#x27;container&#x27;&gt;',
    'returns escaped value'
  );
});

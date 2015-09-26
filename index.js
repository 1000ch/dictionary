'use strict';

const isString = require('is-string');

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
const escapeRegex = new RegExp(`[${Object.keys(escapeMap).join('')}]`, 'g');

module.exports = function escapeHTML(value) {
  if (!isString(value)) {
    return value;
  }

  return value.replace(escapeRegex, match => escapeMap[match]);
};

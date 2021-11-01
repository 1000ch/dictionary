import isString from 'is-string';

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
const escapeRegex = new RegExp(`[${Object.keys(escapeMap).join('')}]`, 'g');

export default function escapeHTML(value) {
  if (!isString(value)) {
    return value;
  }

  return value.replace(escapeRegex, match => escapeMap[match]);
}

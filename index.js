const defaultOptions = {
  open: '{{',
  close: '}}'
};

function escapeRegex(string) {
  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/**
 * @param {string} string The string to interpolate
 * @param {object|array} data The datasource for the string
 * @param {object} [customOptions] Custom option overrides
 * @returns string
 */
function interpolate(string, data, customOptions) {
  const options = Object.assign({}, defaultOptions, customOptions);
  const match = new RegExp(
    escapeRegex(options.open) +
    '\\s*(\\w+)\\s*' +
    escapeRegex(options.close),
    'g'
  );
  return String(string || '').replace(match, (_, key) => {
    let value = data[key]; // TODO Nested data (via options.nest)
    if (Array.isArray(value) && value.length) {
      value = value.join(', ');
    }
    return value;
  });
}

module.exports = interpolate;
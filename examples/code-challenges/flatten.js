/**
 * Takes a deeply nested object, `source`, and returns an object with
 * dot-separated paths pointing to all primitive values from `source`.
 *
 * Examples:
 *
 *   flatten({ foo: { bar: 1 } })
 *     //=> { 'foo.bar': 1 }
 *
 *   flatten({ foo: [{ bar: 1 }, { bar: 2 }] })
 *     //=> { 'foo.0.bar': 1, 'foo.1.bar': 2 }
 */

const isObj = o => o !== null && typeof o === 'object';

/**
 * flatten
 *
 * @param  {object} source
 * @param  {array} prop = []
 * @param  {object} flattened = {}
 * @return {object}                flattened object
 */
function flatten(source, prop = [], flattened = {}) {
    Object.keys(source).forEach(key => {
        prop.push(key);
        if (isObj(source[key])) {
            flatten(source[key], prop, flattened);
        } else {
            flattened[prop.join('.')] = source[key];
            prop.pop();
        }
    });
    prop.pop();
    return flattened;
}

/**
 * unflattenObject
 *
 * @param  {object} o - flattened object
 * @param  {string} d - '.'  delimiter
 * @return {object}   - unflattened object
 */
function unflattenObject(o, d = '.') {
  const r = {};
  o && Object.keys(o).forEach(k =>
    k.split(d).reduce((p, c, i, a) =>
      (i === a.length - 1
        ? p[c] = o[k]
        : p[c] = p[c]
          ? p[c]
          : {}
      ),
      r));
  return r;
}

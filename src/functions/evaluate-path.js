export default (dictionary, path, expectedType = 'number') => {
  if (!path || !(path instanceof Array)) {
    throw new Error(`Expected array for path, received "${JSON.stringify(path)}".`);
  }
  let resolvedValue = dictionary;
  for (const i in path) {
    const newObj = resolvedValue[path[i]];
    if (newObj == null) {
      throw new Error(`No value present in dictionary "${JSON.stringify(dictionary)}" for path "${path.slice(0, i).join('.')}".`);
    }
    resolvedValue = resolvedValue[path[i]];
  }
  if (typeof resolvedValue !== expectedType) {
    throw new Error(`Expected ${expectedType} value at path "${JSON.stringify(path)}" in dictionary "${JSON.stringify(dictionary)}", received "${typeof resolvedValue}".`);
  }
  return resolvedValue;
}

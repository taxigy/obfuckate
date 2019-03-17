const obfuckate = (strings = []) => {
  let result = {};

  for (const string of strings) {
    let current = result;

    for (const char of string) {
      current[char] = current[char] || {};
      current = current[char];
    }

    current[""] = "";
  }

  return result;
};

const deobfuckate = (tree = {}) => {
  const walk = (subtree = {}, buildup = "", result = []) => {
    if (Object.keys(subtree).length === 0) {
      return [...result, buildup];
    }

    let keys = [];

    for (const key in subtree) {
      keys.push(key);
    }

    return keys
      .map(key => walk(subtree[key], `${buildup}${key}`, result))
      .flat();
  };

  return walk(tree);
};

module.exports = { obfuckate, deobfuckate };

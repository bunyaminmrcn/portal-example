const pack = require('./package-old.json')

const keys = Object.keys(pack.dependencies);

console.log(keys.join(', '))
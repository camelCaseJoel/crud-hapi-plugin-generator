// --------------- Generator
let Mustache = require('mustache');

Mustache.escape = function(text) {return text;};
Mustache.tags = ['<<%%', '%%>>'];

let data = {
  thing: 'Pizza'
};

let someText = 'Hello, I love <<%% thing %%>>'

let output = Mustache.render(someText, data);

console.log(output);

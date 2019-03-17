# Obfuckate, a string obfuscation library

Given a collection of strings like this:

```javascript
const names = [
  "James",
  "Jacob",
  "Joachim",
  "John",
  "Jacqueline",
  "Jack",
  "Jacques",
  "Jada",
  "Janine",
  "Jarlath",
  "Jarmil"
];
```

you can use it like this:

```javascript
const { obfuckate } = require("obfuckate");
obfuckate(names);
```

to get return value like this:

```javascript
{
  J: {
    a: {
      m: { e: { s: { "": "" } } },
      c: {
        o: { b: { "": "" } },
        q: { u: { e: { l: { i: { n: { e: { "": "" } } } }, s: { "": "" } } } },
        k: { "": "" }
      },
      d: { a: { "": "" } },
      n: { i: { n: { e: { "": "" } } } },
      r: { l: { a: { t: { h: { "": "" } } } }, m: { i: { l: { "": "" } } } }
    },
    o: { a: { c: { h: { i: { m: { "": "" } } } } }, h: { n: { "": "" } } }
  }
};
```

## Motivation

The very reason the author has committed to such an undertaking is yet to be discovered.

## Notes

- Currently, obfuscation is eager, per every character. It's not space-efficient, but who needs space efficiency, right?
- TIL: Neither `Object.keys` nor for/in loop list properties in an object that aren't serializable, Symbol in particular.

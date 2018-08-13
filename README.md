# PvNP

![](https://img.shields.io/github/issues/danhab99/PvNP.svg)
![](https://img.shields.io/github/forks/danhab99/PvNP.svg)
![](https://img.shields.io/github/stars/danhab99/PvNP.svg)
![](https://img.shields.io/github/license/danhab99/PvNP.svg)

An express middleware meant to detect if P v NP has been solved. I made it in joking fear of the inevitable solving of the Millennium Prize Problem [P vs NP](https://www.claymath.org/millennium-problems/p-vs-np-problem). Many fear that the solution to P v NP will bring the end to modern cryptography so you can use this to shutdown your server to secure vital information.

## Installation

`npm i PvNP`

## Usage

```javascript
const express = require('express');
const PvNP = require('PvNP');

var app = express();

// Normal usage
app.use(PvNP.middleware());

// Usage with custom message and status
app.use(PvNP.middleware("Custom denial of service message", 500 /*Custom status code*/));

// Package will emit an event when PvNP gets solved
PvNP.on('solved', function() {
    console.log("NOOOOOPE, its not safe anymore");
    process.exit(1);
});
```

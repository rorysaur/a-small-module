#!/usr/bin/env node

var fs = require('fs');
var pager = require('default-pager');

fs.createReadStream(__dirname + '/../readme.md').pipe(pager());

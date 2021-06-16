const tailwindo = require('tailwindo');
const { parse } = require('node-html-parser')
const fs = require('fs')
const path = require('path')

$input = fs.readFileSync(path.resolve(__dirname, './html/alert.html'), 'utf8');
 
$output = tailwindo($input) // gets converted code

var root = parse($output);

console.log(root)

console.log(root.classList.length)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Lê as duas notas do aluno
var notaA = parseFloat(lines[0]);
var notaB = parseFloat(lines[1]);

// Calcula a média ponderada
var media = (notaA * 3.5 + notaB * 7.5) / 11;

// Imprime a média formatada com 5 dígitos após o ponto decimal
console.log("MEDIA = " + media.toFixed(5));
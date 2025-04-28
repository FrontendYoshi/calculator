// Funktion Addition zweier Zahlen
function add(a, b) {
    return a + b;
}

// Funktion Substraktion zweier Zahlen
function substract(a, b) {
    return a - b;
}

// Funktion Multiplikation zweier Zahlen
function multiply(a, b) {
    return a * b;
}

// Funktion Division zweier Zahlen mit Fehlerbehandlung
function divide(a, b) {
    if (b === 0) {
        return "Fehler: Division durch 0 ist nicht erlaubt!";
    }
    return a / b;
}

// Testaufrufe
console.log(add(5, 3)); // 8
console.log(substract(5, 3)); // 2
console.log(multiply(5, 3)); // 15
console.log(divide(5, 0)); // Fehler: Division durch 0 ist nicht erlaubt!
console.log(divide(5, 2)); // 2.5

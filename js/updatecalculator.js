let display = document.getElementById('display'); // Wir holen uns das Eingabefeld (input), in dem das Ergebnis angezeigt wird. Wir speichern es in der display-Variable, um später darauf zugreifen zu können.
let currentInput = ""; // leere Variabel erstellen um die Zahlen zu speichern die der user eingibt. Zuerst ist sie leer.
let operator = ""; // Hier legen wir eine Variable für den Operator (+, -, *, /) an. Zuerst ist sie auch leer, weil der Benutzer noch keinen Operator ausgewählt hat.
let firstOperand = null; // Diese Variable speichert die erste Zahl, die der Benutzer eingibt. Anfangs ist sie null, also leer, weil der Benutzer noch keine Zahl eingegeben hat.

document.querySelectorAll('.btn').forEach(button => { // Wir suchen alle Buttons auf der Seite, die die Klasse .btn haben (das sind alle Zahlen und Tasten wie C und =). Dann führen wir für jeden Button eine Funktion aus.
    button.addEventListener('click', function () { // Wenn der Benutzer auf einen Button klickt, passiert das, was in der folgenden Funktion steht.
        let value = button.getAttribute('data-value'); // Wenn ein Button angeklickt wird, holen wir uns den Wert, der in der data-value-Eigenschaft des Buttons gespeichert ist. Das ist z. B. 1, +, =, etc.

        if (value === 'C') { // Wenn der Benutzer auf C Button klickt (also "clear"), setzen wir alles zurück
            // Reset everything
            currentInput = "";
            firstOperand = null;
            operator = "";
            display.value = ""; // Display zurücksetzen
        } else if (value === "=") { // Wenn der Benutzer auf den "=" Button klickt, wollen wir die Berechnung ausführen
            // Perform the calculation
            if (firstOperand !== null && operator !== "" && currentInput !== "") {
                let secondOperand = parseFloat(currentInput); // Die zweite Zahl (die der Benutzer eingegeben hat) wird in eine Zahl umgewandelt (falls sie als Text vorliegt).
                
                let result;
                switch (operator) { // Je nachdem, welcher Operator ausgewählt wurde, führen wir die entsprechende Berechnung durch.
                    case "+":
                        result = firstOperand + secondOperand;
                        break;
                    case "-":
                        result = firstOperand - secondOperand;
                        break;
                    case "*":
                        result = firstOperand * secondOperand;
                        break;
                    case "/":
                        result = firstOperand / secondOperand;
                        break;
                }
                display.value = result; // Ergebnis wird im Displayfeld angezeigt
                firstOperand = result; // Ergebnis wird als neue erste Zahl gespeichert, falls der Benutzer noch weiterrechnen möchte
                currentInput = result.toString(); // Das Ergebnis wird als String gespeichert, falls der Benutzer noch eine Zahl eingeben möchte.
                operator = ""; // Der Operator wird zurückgesetzt, da wir mit der Berechnung fertig sind.
            }
        } else if (["+", "-", "*", "/"].includes(value)) { // Wenn der Benutzer auf einen der Operatoren klickt (+, -, *, /), dann speichern wir die erste Zahl und den Operator.
            // Set operator and store first operand
            if (currentInput !== "") {
                firstOperand = parseFloat(currentInput); // Speichern der ersten Zahl (firstOperand)
                operator = value; // Speichern des Operators
                currentInput = ""; // Setzen der aktuellen Eingabe zurück, damit die zweite Zahl eingegeben werden kann
            }
        } else {
            // Append number to current input Wenn der Wert des Buttons keine der oben genannten Optionen ist (also eine Zahl), dann fügen wir die Zahl zur aktuellen Eingabe hinzu.
            currentInput += value; // Die Zahl wird an currentInput angehängt und im Display-Feld angezeigt.
            display.value = currentInput; // Das Display zeigt die aktuelle Eingabe an.
        }
    });
});

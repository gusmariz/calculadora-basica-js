const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
let op = prompt("Digite o operador (+, -, *, /): ");
function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero.";
    } else {
        return a / b;
    }
}
if (op === "+") {
    document.getElementById("demo").innerHTML = soma(num1, num2);
} else if (op === "-") {
    document.getElementById("demo").innerHTML = subtracao(num1, num2);
} else if (op === "*") {
    document.getElementById("demo").innerHTML = multiplicacao(num1, num2);
} else if (op === "/") {
    document.getElementById("demo").innerHTML = divisao(num1, num2);
} else {
    console.log("Erro: operador inválido.")
}
function escrever(coisa) {
    document.getElementById("input").value += coisa;
}

function ce() {
    document.getElementById("input").value = "";
}

function calcular() {

    let operacao = document.getElementById("input").value;
    var operador = "";

    if (operacao.includes('+')) {
        operador = '+';
    }
    if (operacao.includes('-')) {
        operador = '-';
    }
    if (operacao.includes('*')) {
        operador = '*';
    }
    if (operacao.includes('/')) {
        operador = '/';
    }

    var qtdOperadores = 0;

    for (let i = 0; i < 99; i++) {

        try {
            if ((operacao[i] == '+') || (operacao[i] == '-') || (operacao[i] == '*') || (operacao[i] == '/')) {
                qtdOperadores++;
            }
        } catch {
            alert('ERR')
        }


    }
    console.log('operacao = ' + operacao)
    console.log('tamanho da operacao = ' + operacao.lenght)
    console.log('qtdOperadores = ' + qtdOperadores)

    if (qtdOperadores == 1) {
        let op = operacao.split(operador);
        if (operador == '+') {
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) + parseFloat(op[1]));
        }
        if (operador == '-') {
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) - parseFloat(op[1]));
        }
        if (operador == '*') {
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) * parseFloat(op[1]));
        }
        if (operador == '/') {
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) / parseFloat(op[1]));
        }

    } else {
        alert("ERR")
    }

}
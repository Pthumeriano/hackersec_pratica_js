function escrever(coisa){
    document.getElementById("input").value += coisa;
}
function ce(){
    document.getElementById("input").value = "";
}

function validar(operacao){
    if(operacao[operacao.lenght-1] == '+' || operacao[operacao.lenght-1] == '-' || operacao[operacao.lenght-1] == '*' || operacao[operacao.lenght-1] == '/'){
        return false;
    }
    if(operacao[0] == '+' || operacao[0] == '-' || operacao[0] == '*' || operacao[0] == '/'){
        return false;
    }
    var qtdOperadores = 0;
    for(let i=0; i<operacao.lenght; i++){
        
        if(operacao[i]=='+' || operacao[i]=='-' || operacao[i]=='*' || operacao[i]=='/'){
            
            qtdOperadores++;
        }
    }

    console.log(qtdOperadores)
    if(qtdOperadores>1){
        return false;
    }
}

function calcular(){

    var operacao = document.getElementById("input").value;
    var operador = "";

    if(operacao.includes('+')){
        operador='+';
    }
    if(operacao.includes('-')){
        operador='-';
    }
    if(operacao.includes('*')){
        operador='*';
    }
    if(operacao.includes('/')){
        operador='/';
    }

    if(!validar(operacao)){
        let op = operacao.split(operador);
        if(operador=='+'){
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) + parseFloat(op[1]));
        }
        if(operador=='-'){
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) - parseFloat(op[1]));
        }
        if(operador=='*'){
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) * parseFloat(op[1]));
        }
        if(operador=='/'){
            document.getElementById("input").value = parseFloat(parseFloat(op[0]) / parseFloat(op[1]));
        }

    }else{
        alert("ERR")
    }

}


var resultado1;

// Apagar
function apagar() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("resultado").innerHTML = ""
      
    }
// Contas
function multiplicacao() {
    var resultado1 = Number(document.getElementById("numero1").value) * Number(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML = resultado1;
    
 }
function divisao () {
    var resultado1 = Number(document.getElementById("numero1").value) / Number(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML = resultado1;
    
}
function exponenciacao () {
    var resultado1 = Number(document.getElementById("numero1").value) ** Number(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML = resultado1;
}
function soma () {
    var resultado1 = Number(document.getElementById("numero1").value) + Number(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML = resultado1;
}
function subtracao () {
    var resultado1 = Number(document.getElementById("numero1").value) - Number(document.getElementById("numero2").value);
    document.getElementById("resultado").innerHTML = resultado1;
}
// Resultado
function calcular() {
    if (document.getElementById("numero1").value=="") {
        alert("Informe o número")
        document.getElementById("numero1").style.borderColor="red";
        return false
    }
    if (document.getElementById("numero2").value=="") {
        alert("Informe o número")
        document.getElementById("numero2").style.borderColor="red";
        

        return false
    }
    if (document.getElementById("operacao").value=="") {
        alert("Informe a operação")

        return false
    }
    if (document.getElementById("selecionar").value=="1") {
        multiplicacao()
        return true
    } 
    if (document.getElementById("selecionar").value=="2") {
        divisao()
        return true        
    } 
    if (document.getElementById("selecionar").value=="3") {
        exponenciacao()
        return true        
    } 
    if (document.getElementById("selecionar").value=="4") {
        soma()
        return true        
    } 
    if (document.getElementById("selecionar").value=="5") {
        subtracao()
        return true        
    } 
}
// borda
function saiu() {
    document.getElementById("numero2").style.borderColor = ""
    document.getElementById("numero1").style.borderColor = ""
    
}


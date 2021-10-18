function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar ");
}

function redirecionar(){
    window.open("https://www.facebook.com/");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; 
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma (n1, n2){
    return n1 = n2; 
}

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){    
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*\

/*
var count;
for(count =0; count <=5; count++){
alert(count);
};
*\

/*
var count = 0;
while(count <=5){
    console.log(count);
    alert(count);
    count = count + 1;
};
*\

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*\

/* var frutas = [{nome:"maça ", cor:"vermelha "}, {nome:"uva ", cor:"roxa" }]
console.log(frutas);
alert(frutas[1].nome);
*\

/*
var fruta = {nome:"maça ", cor:"vermelha "}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça ", "pera ", "laranja" ];
//lista.push("uva");
//lista.pop();
//console.log(lista);


//var nome = "Everton";
//var n1 = 22;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + n1 + " anos ");
//alert(n1 + n2);
//alert(frase.replace("Japão", "Brasil"));
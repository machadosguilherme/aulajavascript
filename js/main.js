function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
};
function redirecionar(){
    Window.open("https://github.com/");
    Window.location.href = "https://github.com/";
};

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
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma (n1, n2){
    return n1 + n2;
}
function setReplace (frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)

}
alert (soma(5,10));
alert(setReplace("Vai japao", "japao", "Brasil"));
*/

/*
var d = new Date();
alert(d.detDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0;count<=5;count++){
    alert(count);
};
*/


/*
var cont = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça",cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

//var nome = "Guilherme machado";
//var idade = 22;
//var idade2 = 10;
//alert("Bem vindo "+ nome);
//alert(idade + idade2);
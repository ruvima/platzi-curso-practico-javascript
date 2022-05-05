//Código del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4 ;
}


// console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado  + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, " 
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de : " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo  + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo  + "cm^2");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquie interactuamos con el HTML
// Cuadrado
let resultadoCuadrado = document.getElementById("result_Cuadrado");
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultadoCuadrado.innerHTML = "El perimetro del cuadrado es: " + "<br/>" + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultadoCuadrado.innerHTML = "El área del cuadrado es: " + "<br/>" + area;
}

//Triángulo
let resultadoTriangulo = document.getElementById("result_Triangulo");
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("inputTrianguloA");
    const inputB = document.getElementById("inputTrianguloB");
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueA = parseInt(inputA.value);
    const valueB = parseInt(inputB.value);
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    resultadoTriangulo.innerHTML = "El perimetro del triangulo es: " + "<br/>" + perimetro;
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputA = document.getElementById("inputTrianguloAltura");
    const valueBase = parseInt(inputBase.value);
    const valueAltura = parseInt(inputA.value);

    const area = areaTriangulo(valueAltura, valueBase);
    resultadoTriangulo.innerHTML = "El área del triangulo es: " + "<br/>" + area;
}

//Círculo
let resultadoCirculo = document.getElementById("result_Circulo");
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    resultadoCirculo.innerHTML = "El perimetro del circulo es: " + "<br/>" + perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    resultadoCirculo.innerHTML = "El área del circulo es: " + "<br/>" + area;
}
// ------------------Código del cuadrado-------------------------
function perimetroCuadrado (lado) {
    return lado * 4;
}
perimetroCuadrado()
function areaCuadrado (lado) {
    return lado * lado;
}
// ------------------Código del triángulo--------------------------
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (base,altura) {
    return (base * altura) / 2;
}
// -------------------------Código del circulo-----------------------
//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
//PI
const PI = Math.PI;
console.log(`PI es: ${PI}cm`);
// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Área
function areaCirculo (radio) {
    (radio * radio) * PI;
}

// //----------option with arrays------
// // Cuadrado
// const perimetroCuadrado = (lado) => lado * 4;
// const areaCuadrado = (lado) => lado * lado;

// // Triángulo
// const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
// const areaTriangulo = (base, altura) => (base * altura) / 2;

// // Circulo
// const diametroCirculo = (radio) => radio * 2;
// const PI = Math.PI;
// const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
// const areaCirculo = (radio) => (radio * radio) * PI;
class FormaGeometrica {
    constructor() {
        if (new.target === FormaGeometrica) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }
    }
    calcularArea() {
        throw new TypeError('Abstract method must be implemented');
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
const circulo = new Circulo(3);

// Mostrar resultados en elementos div separados
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
output1.textContent = `Área del cuadrado: ${cuadrado.calcularArea()}`;
output2.textContent = `Área del círculo: ${circulo.calcularArea()}`;
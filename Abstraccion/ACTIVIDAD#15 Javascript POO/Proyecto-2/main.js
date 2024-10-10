class Empleado {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }

  calcularSalario() {
      throw new Error("Método abstracto no implementado");
  }

  mostrarInformacion() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  constructor(nombre, edad, salarioMensual) {
      super(nombre, edad);
      this.salarioMensual = salarioMensual;
  }

  calcularSalario() {
      return this.salarioMensual;
  }
}

class EmpleadoPorHoras extends Empleado {
  constructor(nombre, edad, horasTrabajadas, tarifaHora) {
      super(nombre, edad);
      this.horasTrabajadas = horasTrabajadas;
      this.tarifaHora = tarifaHora;
  }

  calcularSalario() {
      return this.horasTrabajadas * this.tarifaHora;
  }
}

// Uso de las clases
const empleadoTC = new EmpleadoTiempoCompleto("Carlos", 30, 3000);
const empleadoPH = new EmpleadoPorHoras("Ana", 25, 120, 20);

// Selecciona el div donde se mostrará la información
const outputDiv = document.getElementById('output');

// Mostrar información en el mismo div
outputDiv.innerHTML = `
  <p>${empleadoTC.mostrarInformacion()}</p>
  <p>Salario Tiempo Completo: ${empleadoTC.calcularSalario()}</p>
  <p>${empleadoPH.mostrarInformacion()}</p>
  <p>Salario Por Horas: ${empleadoPH.calcularSalario()}</p>
`;

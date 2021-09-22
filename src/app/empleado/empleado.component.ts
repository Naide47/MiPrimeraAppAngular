import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aquí iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  // styles: ["p {background-color:red}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Diaz";
  edad = 18;
  // private edad = 18;
  // empresa = "MacroBios";

  // getEdad(){
  //   return this.edad;
  // }

  // setEmpresa(value:String) {

  // }

  habilitacionCuadro = true;
  usuRegistrado = false;

  textoRegistro = "No hay nadie registrado.";

  setRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    // alert("El usuario se acaba de registrar.")
    // this.textoRegistro = "El usuario se acaba de registrar.";
    // alert(event.target);
    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = "El usuario se acaba de registrar.";
    } else {
      this.textoRegistro = "No hay nadie registrado.";
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}

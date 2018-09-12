import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  alumno: any;
  alumnoArray: any;
  nombre: any;
  acudiente: any;

  constructor(
  public navCtrl: NavController,
  public restProvider: RestProvider
  ) {
    //this.getUsers();
    this.getAlumno();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getAlumno() {
    this.restProvider.getAlumno()
    .then(data => {
      this.alumno = data.Alumno;
      this.alumnoArray = data.Alumno;
      this.nombre = data.Alumno.nombres;
      this.acudiente = data.Alumno.acudiente;
      console.log(this.alumno);
      console.log(this.alumnoArray);

    })
  }
}

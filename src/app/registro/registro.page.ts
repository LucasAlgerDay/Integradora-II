import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { usersLogin } from '../models/users/users.models';
import { usersRegister } from '../models/users/usersregister.models';
import { Dataservice } from '../services/autenticacion.service';
import { Dataregister } from '../services/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private regiser: Dataregister,
    public controlador: ToastController
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const Email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
     const raza = (<HTMLInputElement>document.getElementById("raza")).value;
     const nombre = (<HTMLInputElement>document.getElementById("nombre_perro")).value;
    const expresionRegular = /\S+@\S+\.\S+/;
    if (expresionRegular.test(Email)) {
      console.log(`${Email} es un correo electrónico válido.`);
    } 
    else {
      console.log(`${Email} no es un correo electrónico válido.`);
      this.correo_invalido()
      return
    }
    if (password.length >= 6) {
      console.log(`La contraseña "${password}" es válida.`);
    } else {
      console.log(`La contraseña "${password}" debe tener al menos 6 caracteres.`);
      this.password_invalido()
      return
    }
    if (password.length >= 2) {
      console.log(`La contraseña "${password}" es válida.`);
    } else {
      console.log(`La contraseña "${password}" debe tener al menos 6 caracteres.`);
      this.password_invalido()
      return
    }
     if (raza.length >= 6) {
      console.log(`La raza "${raza}" es válida.`);
    } else {
      console.log(`La raza "${raza}" debe tener al menos 6 caracteres.`);
      this.raza_invalido()
      return
    }
    if (raza.length >= 2) {
      console.log(`La raza de perro "${raza}" es válida.`);
    } else {
      console.log(`La raza de perro "${raza}" debe tener al menos 6 caracteres.`);
      this.raza_invalido()
      return
    }
     if (nombre.length >= 6) {
      console.log(`El nombre del perro "${nombre}" es válida.`);
    } else {
      console.log(`El nombre del perro "${nombre}" debe tener al menos 6 caracteres.`);
      this.nombre_perro_invalido()
      return
    }
    if (password.length >= 2) {
      console.log(`El nombre "${nombre}" es válida.`);
    } else {
      console.log(`El nombre del perro "${nombre}" debe tener al menos 6 caracteres.`);
      this.nombre_perro_invalido()
      return
    }
    
    const data: usersRegister = {
      username: username,
      email: Email,
      password: password,
      raza: raza,
      nombre: nombre,
      status: ''
    };
    this.regiser.registeruser(data).subscribe(resultado => {
      console.log(resultado.status); 
      if (resultado.status === 'ok') {
        return this.registro_exitoso();
      }
      else{
        return this.registro_fallido();
      }
    });
  }

  async registro_exitoso(){
    const anuncio = await this.controlador.create({
      message: "¡Registrado de forma exitosa!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async registro_fallido(){
    const anuncio = await this.controlador.create({
      message: "¡Acaba de ocurrir un error a la hora de registrarse, intenta mas tarde!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async correo_invalido(){
    const anuncio = await this.controlador.create({
      message: "¡Coloca un correo valido!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
  async password_invalido(){
    const anuncio = await this.controlador.create({
      message: "¡La contraseña debe tener al menos 6 caracteres!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
  
}

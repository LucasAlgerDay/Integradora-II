import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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
    private navCtrl: NavController,
    private regiser: Dataregister,
    public controlador: ToastController
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const Email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
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
    const data: usersRegister = {
      username: username,
      email: Email,
      password: password,
      status: ''
    };
    this.regiser.registeruser(data).subscribe(resultado => {
      console.log(resultado.status); 
      if (resultado.status === 'ok') {
        this.navCtrl.navigateForward('/login');
        return this.registro_exitoso();
      }
      if (resultado.status === 'registred') {
        return this.registrado_user();
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
  async registrado_user(){
    const anuncio = await this.controlador.create({
      message: "¡Correo registrado, intenta con otro!",
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
  async raza_invalido(){
    const anuncio = await this.controlador.create({
      message: "¡La raza no debe quedar en blanco!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
  async nombre_perro_invalido(){
    const anuncio = await this.controlador.create({
      message: "¡El nombre no debe quedar en blanco!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
}
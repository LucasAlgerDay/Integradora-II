import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { usersLogin } from '../models/users/users.models';
import { Dataservice } from '../services/autenticacion.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  constructor(
    private navCtrl: NavController,
    private checker: Dataservice,
    public controlador: ToastController
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const Email = (<HTMLInputElement>document.getElementById("email")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
    const expresionRegular = /\S+@\S+\.\S+/;
    if (expresionRegular.test(Email)) {
      console.log(`${Email} es un correo electrónico válido.`);
      this.navCtrl.navigateForward('/home');
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
    const data: usersLogin = {
      email: Email,
      password: password,
      status: ''
    };
    this.checker.loginuser(data).subscribe(resultado => {
      console.log(resultado.status); 
      if (resultado.status === 'ok') {
        return this.login_exitoso();
      }
      if (resultado.status === 'incorrect password') {
        return this.password_incorrect();
      }
      if (resultado.status === 'No registred') {
        return this.no_registrado();
      }
      else{
        return this.login_fallido();
      }
    });
  }

  async login_exitoso(){
    const anuncio = await this.controlador.create({
      message: "¡Inicio sesión de forma exitósa de forma exitosa!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async login_fallido(){
    const anuncio = await this.controlador.create({
      message: "¡Acaba de ocurrir un error a la hora de iniciar sesion, intenta mas tarde!",
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

  async password_incorrect(){
    const anuncio = await this.controlador.create({
      message: "¡La contraseña es incorrecta!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async no_registrado(){
    const anuncio = await this.controlador.create({
      message: "¡No te encuentras registrado!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
}



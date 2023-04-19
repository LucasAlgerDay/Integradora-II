import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { petsmodel } from '../models/users/pets.models';
import { RegistroPetService } from '../services/registro-pet.service';

@Component({
  selector: 'app-registro-m',
  templateUrl: './registro-m.page.html',
  styleUrls: ['./registro-m.page.scss'],
})
export class RegistroMPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public controlador: ToastController,
    private mascotas: RegistroPetService,
  ) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      this.navCtrl.navigateForward('/login');
    }
  }
  registrar_mascota() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('userId') ?? '';
    console.log(isLoggedIn);
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      return this.navCtrl.navigateForward('/login');
    }
    else{
      const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
      const Raza = (<HTMLInputElement>document.getElementById("Raza")).value;
      const Peso = (<HTMLInputElement>document.getElementById("Peso")).value;
      if (nombre.length > 0 && Raza.length > 0 && Peso.length > 0) {
        const data: petsmodel = {
          userId: user, 
          name: nombre,
          raza: Raza,
          peso: Peso,
          status: ''
        }
        this.mascotas.registro_pet(data).subscribe(resultado => {
          console.log(resultado.status); 
          if (resultado.status === 'ok') {
            this.navCtrl.navigateForward('/home');
            return this.mascota_guardada();
          }
          else{
            return this.errores_save();
          }
        })
        return
      } else {
        return this.campo_invalido();
      }
    }
  }

  async mascota_guardada(){
    const anuncio = await this.controlador.create({
      message: "Mascota guardada!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async errores_save(){
    const anuncio = await this.controlador.create({
      message: "Algo salio mal a la hora de guardar a su mascota!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async inicia_sesion(){
    const anuncio = await this.controlador.create({
      message: "¡Ocupas iniciado sesion!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async campo_invalido(){
    const anuncio = await this.controlador.create({
      message: "¡Asegurate de llenar todos los campos!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
}

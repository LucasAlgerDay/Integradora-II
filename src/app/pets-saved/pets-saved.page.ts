import { Component, OnInit } from '@angular/core';
import { PetsSavedService } from '../services/pets-saved.service';
import { pets_saved } from '../models/users/pets-saved.models';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pets-saved',
  templateUrl: './pets-saved.page.html',
  styleUrls: ['./pets-saved.page.scss'],
})
export class PetsSavedPage implements OnInit {
  mascota : any;

  constructor(
    private navCtrl: NavController,
    public controlador: ToastController,
    private pets: PetsSavedService) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      return this.navCtrl.navigateForward('/login');
    }
    else{
      const user = localStorage.getItem('userId') ?? '';
      const data: pets_saved = {
        userId: user
      }
      this.pets.pets_saved(data).subscribe(response => {
        this.mascota = response;
        console.log(response);
      })
      return
    }
  }

  async inicia_sesion(){
    const anuncio = await this.controlador.create({
      message: "¡Ocupas iniciado sesion!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
}

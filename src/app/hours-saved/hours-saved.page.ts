import { Component, OnInit } from '@angular/core';
import { HorasGuardadasService } from '../services/horas-guardadas.service';
import { hours_saved } from '../models/users/hours-saved.models';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hours-saved',
  templateUrl: './hours-saved.page.html',
  styleUrls: ['./hours-saved.page.scss'],
})
export class HoursSavedPage implements OnInit {
  horas : any;

  constructor(
    private navCtrl: NavController,
    public controlador: ToastController,
    private hours: HorasGuardadasService) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      return this.navCtrl.navigateForward('/login');
    }
    else{
      const user = localStorage.getItem('userId') ?? '';
      const data: hours_saved = {
        userId: user
      }
      this.hours.pets_saved(data).subscribe(response => {
        this.horas = response;
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

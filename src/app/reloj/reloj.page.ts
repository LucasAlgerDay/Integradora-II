import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { RelojService } from '../services/reloj.service';
import { timesmodel } from '../models/users/times.models';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.page.html',
  styleUrls: ['./reloj.page.scss'],
})
export class RelojPage implements OnInit {
  horaSeleccionada: string | undefined;

  constructor(
    private navCtrl: NavController,
    public controlador: ToastController,
    private horas: RelojService,
  ) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      this.navCtrl.navigateForward('/login');
    }
  }

  extraerHora() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('userId') ?? '';
    console.log(isLoggedIn);
    if (isLoggedIn == "false") {
      this.inicia_sesion();
      return this.navCtrl.navigateForward('/login');
    }
    else{
      const horaInput = document.getElementById('hora') as HTMLInputElement;
      this.horaSeleccionada = horaInput.value;
      if (!this.horaSeleccionada || this.horaSeleccionada === '') {
        console.log('Seleccione una hora');
        return this.seleccionar_hora();
      } else {
        console.log('Hora seleccionada:', this.horaSeleccionada);
        const data: timesmodel = {
          userId: user, 
          status: '',
          hora: this.horaSeleccionada,
        }
        this.horas.registro_time(data).subscribe(resultado => {
          console.log(resultado.status); 
          if (resultado.status === 'ok') {
            this.navCtrl.navigateForward('/home');
            return this.hora_guardada();
          }
          else{
            return this.errores_save();
          }
        })
        return this.hora_guardada();
      }
    }
  }
  async seleccionar_hora(){
    const anuncio = await this.controlador.create({
      message: "¡Selecciona la hora!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }
  async hora_guardada(){
    const anuncio = await this.controlador.create({
      message: "Hora guardada!",
      duration: 5000,
      position: "middle"
    });
    anuncio.present()
  }

  async errores_save(){
    const anuncio = await this.controlador.create({
      message: "Algo salio mal a la hora de guardar la hora!",
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
}

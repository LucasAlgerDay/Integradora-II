import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Registro', url: '/registro', icon: 'log-out' },
    { title: 'Reloj', url: '/reloj', icon: 'timer' },
    { title: 'RegistroM', url: '/registro-m', icon: 'log-in' },
    { title: 'perros-guardados', url: '/pets-saved', icon: 'log-in' },
    { title: 'horas-guardadas', url: '/hours-saved', icon: 'log-in' },
  ];
  constructor(
    private navCtrl: NavController,
  ) {
    this.grabar_storage();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn == "false") {
      this.navCtrl.navigateForward('/login');
      return
    }
    else{
      this.navCtrl.navigateForward('/home');
      return
    }

  }

  grabar_storage(){
    localStorage.setItem('isLoggedIn', 'false');
  }
}

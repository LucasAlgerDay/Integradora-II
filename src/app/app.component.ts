import { Component } from '@angular/core';
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
  ];
  constructor() {}
}

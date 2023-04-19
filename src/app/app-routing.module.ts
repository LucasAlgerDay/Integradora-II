import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reloj',
    loadChildren: () => import('./reloj/reloj.module').then( m => m.RelojPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro-m',
    loadChildren: () => import('./registro-m/registro-m.module').then( m => m.RegistroMPageModule)
  },
  {
    path: 'pets-saved',
    loadChildren: () => import('./pets-saved/pets-saved.module').then( m => m.PetsSavedPageModule)
  },
  {
    path: 'hours-saved',
    loadChildren: () => import('./hours-saved/hours-saved.module').then( m => m.HoursSavedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefonosComponent } from './pages/telefonos/telefonos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'telefonos',
    pathMatch: 'full',
  },
  {
    path: 'telefonos',
    component: TelefonosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

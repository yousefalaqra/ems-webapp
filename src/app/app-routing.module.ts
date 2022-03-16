import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/event.module').then((x) => x.EventModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./features/regsitration/regsitration.module').then((x) => x.RegistrationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


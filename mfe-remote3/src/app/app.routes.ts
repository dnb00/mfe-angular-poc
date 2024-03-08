import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./flights/flight.module').then((m) => m.FlightModule),
  },
];

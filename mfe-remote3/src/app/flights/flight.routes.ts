import { Routes } from '@angular/router';
import { FlightComponent } from './flight.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: 'flights',
    component: FlightComponent,
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
];

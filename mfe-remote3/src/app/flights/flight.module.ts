import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FlightComponent } from './flight.component';
import { FLIGHTS_ROUTES } from './flight.routes';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@NgModule({
  declarations: [FlightComponent, FlightSearchComponent],
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
  exports: [FlightComponent, FlightSearchComponent, RouterModule],
})
export class FlightModule {}

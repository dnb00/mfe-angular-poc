import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe-flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe-angular-poc-remote.vercel.app/remoteEntry.js',
        exposedModule: './FlightModule',
      }).then((m) => m.FlightModule),
  },
  {
    path: 'mfe-2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
];

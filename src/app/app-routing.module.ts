import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { StarterComponent } from './starter/starter.component';
import { AirportsComponent } from './airports/airports.component';
import { TripsComponent } from './trips/trips.component';
import { FlightsComponent } from './starter/flights/flights.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        component: StarterComponent,
        data: {
          title: 'Rezerwuj online bilety lotnicze!',
          urls: [
            { title: 'Starter Page' }
          ]
        }
        // loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'starter/flights',
        component: FlightsComponent,
        data: {
          title: 'Tu będą dopasowane loty',
          urls: [
            { title: 'Starter Page' }
          ]
        }
      },
      {
        path: 'airports',
        component: AirportsComponent,
        data: {
          title: 'Airports Page',
          urls: [
            { title: 'Airports Page' }
          ]
        }
      },
      {
        path: 'trips',
        component: TripsComponent,
        data: {
          title: 'Tickets Page',
          urls: [
            { title: 'Tickets Page' }
          ]
        }
      },
      // @TODO: delete later
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

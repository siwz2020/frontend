import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { StarterComponent } from './starter/starter.component';
import { AirportsComponent } from './airports/airports.component';
import { TripsComponent } from './trips/trips.component';
import { FlightsComponent } from './starter/flights/flights.component';
import { PassengerDetailsComponent } from './starter/passenger-details/passenger-details.component';

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
        path: 'starter/flights/book',
        component: PassengerDetailsComponent,
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets/tickets.module').then((m) => m.TicketsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'booking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

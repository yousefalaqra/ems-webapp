import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventsListDetailsComponent } from './containers/events-list-details/events-list-details.component';
import { EventsListComponent } from './containers/events-list/events-list.component';

const routes: Routes = [
    {
        path:'', component: EventsComponent
    },
    {
      path:'events-list',
      component: EventsListComponent
    },
    {
      path: 'events-list/details/:id',
      component: EventsListDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}

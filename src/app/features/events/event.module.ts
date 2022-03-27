import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventsComponent } from "./components/events/events.component";
import { EventsListComponent } from "./containers/events-list/events-list.component";
import { EventRoutingModule } from "./event.routes";
import { EventService } from "./services/event.service";
import { EventsListDetailsComponent } from './containers/events-list-details/events-list-details.component';
import { EventListViewComponent } from "./containers/event-list-view/event-list-view.component";

@NgModule({
    declarations: [
        EventsComponent,
        EventsListComponent,
        EventsListDetailsComponent,
        EventListViewComponent
    ],
    providers: [
        EventService,
    ],
    imports:[
        EventRoutingModule,
        CommonModule
    ]
})
export class EventModule{}
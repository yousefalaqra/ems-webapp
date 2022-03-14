import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventsComponent } from "./components/events/events.component";
import { EventsListComponent } from "./containers/events-list/events-list.component";
import { EventRoutingModule } from "./event.routes";
import { EventsListService } from "./services/events-list.service";
import { EventsListDetailsComponent } from './containers/events-list-details/events-list-details.component';
import { EventListDetailsService } from "./services/event-list-details.service";

@NgModule({
    declarations: [
        EventsComponent,
        EventsListComponent,
        EventsListDetailsComponent
    ],
    providers: [
        EventsListService,
        EventListDetailsService
    ],
    imports:[
        EventRoutingModule,
        CommonModule
    ]
})
export class EventModule{}
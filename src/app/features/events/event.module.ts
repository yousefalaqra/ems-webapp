import { NgModule } from "@angular/core";
import { EventsComponent } from "./components/events/events.component";
import { EventRoutingModule } from "./event.routes";

@NgModule({
    declarations: [EventsComponent],
    providers: [],
    imports:[
        EventRoutingModule
    ]
})
export class EventModule{}
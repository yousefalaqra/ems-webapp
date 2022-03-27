import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventInterface } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-events-list-details',
  templateUrl: './events-list-details.component.html',
  styleUrls: ['./events-list-details.component.scss', '../shared/style/common-style.scss']
})
export class EventsListDetailsComponent implements OnInit, OnDestroy {

  event = <EventInterface>{};
  id = this._activatedRoute.snapshot.params['id'];
  subscription: Subscription | any

  constructor(
    private _eventService: EventService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.getDetails()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getDetails() {
    return this._eventService.getEventDetails(this.id).subscribe(
      res => this.event = res
    )
  }

}

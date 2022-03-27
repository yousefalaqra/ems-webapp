import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventInterface } from '../../interfaces/event.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss', '../shared/style/common-style.scss']
})
export class EventsListComponent implements OnInit, OnDestroy {

  eventsList : EventInterface[] = [];
  subscription: Subscription | any;

  constructor(
    private eventService: EventService,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.getEventsList()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  goToDetails(id: number) {
    this.router.navigate([this.router.url + '/details/' + id])
  }

  getEventsList() {
    return this.eventService.getEventsList()
    .subscribe(
      (res) => {
        this.eventsList = res
      }
    )
  }

}

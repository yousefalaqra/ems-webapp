import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsListService } from '../../services/events-list.service';
import { EventsListInterface } from '../../interfaces/events-list.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  
  eventsList : EventsListInterface[] = [];

  constructor(
    private eventsListService: EventsListService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getEventsList()
  }

  getEventsList() {
    return this.eventsListService.getEventsList()
    .subscribe(
      res => {
        this.eventsList = res
      }
    )
  }

  goToDetailsPage(id: number) {
    this.router.navigate([this.router.url + '/details/' + id]);
  }

  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListDetailsInterface } from '../../interfaces/event-list-details.interface';
import { EventListDetailsService } from '../../services/event-list-details.service';


@Component({
  selector: 'app-events-list-details',
  templateUrl: './events-list-details.component.html',
  styleUrls: ['./events-list-details.component.scss']
})
export class EventsListDetailsComponent implements OnInit {

  eventListDetails: EventListDetailsInterface | any = {} ;

  constructor(
    private route: ActivatedRoute,
    private eventListDetailsService: EventListDetailsService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getEventListDetails(id);
  }

  getEventListDetails(id: number) {
    return this.eventListDetailsService.getEventListDetails(id).subscribe(
      res => this.eventListDetails = res
    )
  }

}

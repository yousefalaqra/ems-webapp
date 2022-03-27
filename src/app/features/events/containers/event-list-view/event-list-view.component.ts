import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventInterface } from '../../interfaces/event.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss', '../shared/style/common-style.scss']
})
export class EventListViewComponent implements OnInit {

  @Input() eventDetails = <EventInterface>{};
  @Output() clickEvent: EventEmitter<number> = new EventEmitter();
  isIdUndefined = this._activatedRoute.snapshot.params['id'];
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickEvent.emit(this.eventDetails.id)
  }

}

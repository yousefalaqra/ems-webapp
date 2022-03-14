import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { EventsListInterface } from '../interfaces/events-list.interface';
import { Observable } from "rxjs";

@Injectable()

export class EventsListService {
    BASE_URL: string = 'http://localhost:3000/api/v1';

    constructor(private http: HttpClient) {}

    getEventsList(): Observable<EventsListInterface[]> {
        return this.http.get<EventsListInterface[]>(`${this.BASE_URL}/events`);
    }

}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { EventListDetailsInterface } from "../interfaces/event-list-details.interface";
import { Observable } from "rxjs";

@Injectable()

export class EventListDetailsService {
    BASE_URL: string = 'http://localhost:3000/api/v1';

    constructor(private http: HttpClient) {}

    getEventListDetails(id: number): Observable<EventListDetailsInterface> {
        return this.http.get<EventListDetailsInterface>(`${this.BASE_URL}/events/` + id);
    }

}
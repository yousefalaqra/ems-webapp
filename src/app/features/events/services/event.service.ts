import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventInterface } from "../interfaces/event.interface";
import { Observable } from "rxjs";

@Injectable()

export class EventService {
    BASE_URL: string = 'http://localhost:3000/api/v1/events';

    constructor(private http: HttpClient) {}

    getEventsList(): Observable<EventInterface[]> {
        return this.http.get<EventInterface[]>(`${this.BASE_URL}`);
    }

    getEventDetails(id: number): Observable<EventInterface> {
        return this.http.get<EventInterface>(`${this.BASE_URL}/` + id)
    }

}
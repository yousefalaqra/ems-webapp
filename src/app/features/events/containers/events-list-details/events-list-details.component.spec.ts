import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListDetailsComponent } from './events-list-details.component';

describe('EventsListDetailsComponent', () => {
  let component: EventsListDetailsComponent;
  let fixture: ComponentFixture<EventsListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

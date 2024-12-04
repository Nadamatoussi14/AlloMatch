import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchTerm: string = '';
  
  filter = {
    date: '',
    location: '',
    type: '',
  };

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.events = this.eventService.getEvents();
    this.filteredEvents = [...this.events];
  }

  viewEvent(event: Event) {
    this.router.navigateByUrl(`/event-detail/${event.id}`);
  }
  editEvent(event: Event) {
    this.router.navigate(['/event-create']);
  }
  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.id);
    this.loadEvents();
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event =>
      (!this.filter.date || event.date.includes(this.filter.date)) &&
      (!this.filter.location || event.location.toLowerCase().includes(this.filter.location.toLowerCase())) &&
      (!this.filter.type || event.type === this.filter.type)
    );
  }

  filterEvents() {
    const term = this.searchTerm.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.title.toLowerCase().includes(term) || 
      event.location.toLowerCase().includes(term)
    );
  }
}

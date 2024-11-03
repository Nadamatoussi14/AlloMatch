import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event.model';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage {

  event: Event = {  id: 0, title: '', date: new Date().toISOString(), location: '', description: '', visibility: 'public' };


  constructor(private router: Router, private route: ActivatedRoute) {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.loadEventDetails(parseInt(eventId, 10));
    }
  }

  loadEventDetails(eventId: number) {
    const existingEvent = { id: eventId, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'Description 1', visibility: 'private' };
    this.event = existingEvent;
  }

  saveEvent() {
    console.log('Saving event:', this.event);
    this.router.navigate(['/event-list']);
  }

  openLocationPicker() {
    this.router.navigate(['pickup-location'], {
      queryParams: { position: 'destination' },
      state: { pickupLocation: this.event.location }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        const pickupLocation = navigation.extras.state['pickupLocation'];
        if (pickupLocation) {
          this.event.location = pickupLocation;
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event: Event;
  selectedTeam: 'team1' | 'team2' | null = null; // Variable pour stocker l'équipe sélectionnée

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {
    const eventId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.loadEventDetails(eventId);
  }

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      const event = this.eventService.getEventById(+eventId);
      if (event) {
        this.event = event;
      } else {
        console.error('Event not found');
      }
    } else {
      console.error('No event ID provided');
    }
  }

  loadEventDetails(eventId: number) {
    this.event = {
      id: eventId,
      title: 'Match 1',
      date: '2024-09-01',
      location: 'Stadium A',
      description: 'Description 1',
      visibility: 'public',
      team1: { name: 'Team A', image: 'assets/images/teamA.png' },
      team2: { name: 'Team B', image: 'assets/images/teamB.png' }
    };
  }

  joinMatch() {
    if (this.selectedTeam) {
      console.log(`Joining ${this.event[this.selectedTeam]?.name}`);
      // Logique pour enregistrer l'utilisateur dans l'équipe sélectionnée
    } else {
      console.error('Please select a team to join.');
    }
  }
}

import { Component,OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Event } from 'src/app/models/event.model';
import { Player } from 'src/app/models/player.model'; // Assurez-vous que ce modèle existe

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  event: Event = {
    id: 0,
    name: '',
    title: '',
    date: '',
    location: '',
    description: '',
    visibility: 'public',
    team1: { name: '', image: '', members: [] },
    team2: { name: '', image: '', members: [] }
  };

  searchTeam1 = '';
  searchTeam2 = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.loadEventDetails(parseInt(eventId, 10));
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
          const pickupLocation = navigation.extras.state['pickupLocation'];
          if (pickupLocation) {
            this.event.location = pickupLocation;
          }
        }
      }
    });
  }

  loadEventDetails(eventId: number) {
    // Charger les détails de l'événement existant si nécessaire
    const existingEvent: Event = {
      id: eventId,
      name: 'Stadium A',
      title: 'Match 1',
      date: '2024-09-01',
      location: 'Location A',
      description: 'Description 1',
      visibility: 'private',
      team1: { name: 'Team 1', image: 'team1.png', members: [] },
      team2: { name: 'Team 2', image: 'team2.png', members: [] }
    };
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

  searchPlayers(team: 'team1' | 'team2') {
    console.log(`Searching players for ${team}`);
    // Vous pouvez mettre à jour `this.event.team1.members` ou `this.event.team2.members` ici en fonction de la recherche
  }
}


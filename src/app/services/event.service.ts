import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Liste des événements avec les détails des équipes
  private events: Event[] = [
    {
      id: 1,
      title: 'Match 1',
      name: 'Championship Game', // Ajoutez cette propriété si nécessaire
      date: '2024-09-01',
      time: '15:00',
      location: 'Stadium A',
      description: 'First match description',
      visibility: 'public',
      team1: { 
        name: 'Team A', 
        image: 'assets/images/teamA.png',
        members: [
          { name: 'Player 1A', image: 'assets/images/foot1.jpg' },
          { name: 'Player 2A', image: 'assets/images/foot2.jpg' }
        ]
      },
      team2: { 
        name: 'Team B', 
        image: 'assets/images/teamB.png',
        members: [
          { name: 'Player 1B', image: 'assets/images/foot5.png' },
          { name: 'Player 2B', image: 'assets/images/foot6.PNG' }
        ]
      }
    },
    {
      id: 2,
      title: 'Match 2',
      name: 'Friendly Game', // Ajoutez cette propriété si nécessaire
      date: '2024-09-15',
      time: '18:30',
      location: 'Stadium B',
      description: 'Second match description',
      visibility: 'public',
      team1: { 
        name: 'Team C', 
        image: 'assets/images/teamC.png',
        members: [
          { name: 'Player 1C', image: 'assets/images/foot9.avif' },
          { name: 'Player 2C', image: 'assets/images/foot8.png' }
        ]
      },
      team2: { 
        name: 'Team D', 
        image: 'assets/images/teamD.png',
        members: [
          { name: 'Player 1D', image: 'assets/images/foot2.jpg' },
          { name: 'Player 2D', image: 'assets/images/foot3.jpg' }
        ]
      }
    }
  ];

  // Retourne tous les événements
  getEvents(): Event[] {
    return this.events;
  }

  // Retourne un événement par son ID
  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  // Crée un nouvel événement
  createEvent(newEvent: Event): void {
    this.events.push(newEvent);
  }

  // Met à jour un événement existant
  updateEvent(updatedEvent: Event): void {
    const index = this.events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  // Supprime un événement par son ID
  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}

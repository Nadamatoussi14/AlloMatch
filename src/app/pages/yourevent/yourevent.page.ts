import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-yourevent',
  templateUrl: './yourevent.page.html',
  styleUrls: ['./yourevent.page.scss'],
})
export class YoureventPage implements OnInit {

  event?: Event;
  newPlayer: Player = { name: '', image: '' };
  selectedTeam: 'team1' | 'team2' = 'team1';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventService.getEventById(eventId);
    
    // Vérifiez si l'événement a bien été trouvé
    if (!this.event) {
      console.error('Événement introuvable avec ID :', eventId);
    }
  }

  addPlayerToTeam() {
    if (this.event && this.newPlayer.name) {
      // Initialisez `members` si non défini
      this.event[this.selectedTeam].members = this.event[this.selectedTeam].members || [];
      
      // Ajoutez le joueur à l'équipe sélectionnée
      this.event[this.selectedTeam].members?.push({ ...this.newPlayer });
      
      // Réinitialisez le formulaire
      this.newPlayer = { name: '', image: '' };
    } else {
      console.error('Impossible d’ajouter le joueur : événement ou nom du joueur manquant');
    }
  }
  
}

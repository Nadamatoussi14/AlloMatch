import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  team: Team | undefined;  // Utilisation de l'interface Team
  newMember: string = '';
  wins: number | undefined; // Déclaration pour les gains
  losses: number | undefined; // Déclaration pour les pertes

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit() {
    const teamId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    if (isNaN(teamId)) {
      // Gérer l'erreur si l'ID n'est pas valide
      console.error('Invalid team ID');
      return;
    }
    this.team = this.teamService.getTeamById(teamId);
  }

  addMember() {
    if (this.newMember && this.team) {
      // Utilisez le service pour ajouter un membre
      this.teamService.addMemberToTeam(this.team.id, this.newMember);
      // Recharger l'équipe pour mettre à jour l'UI
      this.team = this.teamService.getTeamById(this.team.id);
      this.newMember = ''; // Réinitialiser le champ de saisie
    }
  }
  

  trackPerformance(wins: number, losses: number) {
    if (this.team && wins !== undefined && losses !== undefined) {
      this.teamService.trackPerformance(this.team.id, wins, losses);
      // Mettez à jour les performances dans l'UI si nécessaire
    }
  }
}

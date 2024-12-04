// src/app/models/player.model.ts
export interface Player {
  name: string;
  image: string; // Chemin de l'image du joueur
  position?: string; // Optionnel
  matchesPlayed?: number; // Nombre de matchs joués
  goalsScored?: number; // Nombre de buts marqués
  assists?: number; // Nombre d'assists
}

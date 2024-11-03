// src/app/models/event.model.ts
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  visibility: string; 
  type?: string; 

  }// src/app/models/event.model.ts

export interface Team {
  name: string;
  image: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  visibility: string;
  type?: string;
  team1?: Team; // Ajout de team1 avec le type Team
  team2?: Team; // Ajout de team2 avec le type Team
}

  
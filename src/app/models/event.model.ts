// src/app/models/event.model.ts
import { Player } from 'src/app/models/player.model';

export interface Event {
  id: number;
  name: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type?: string;
  visibility: string;
  time?: string;
  team1: { // Ne plus rendre ces propriétés optionnelles
    name: string;
    image: string;
    members?: Player[];
  };
  team2: { // Ne plus rendre ces propriétés optionnelles
    name: string;
    image: string;
    members?: Player[];
  };
}

import { Component } from '@angular/core';
import { AudioPlayer } from "../audio/audio";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  imports: [AudioPlayer]
})
export class HeroRomanticoComponent {
  verHistoria() {
    alert('Eu te amo mais do que tudo, meu belo morcego! Feliz dia dos namorados! 🦇❤️');
  }
}

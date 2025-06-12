import { Component } from '@angular/core';
import { Morcegos } from "./components/morcegos/morcegos";
import { CartaComponent } from "./components/carta/carta";
import { GaleriaComponent } from "./components/galeria/galeria";
import { SurpresasComponent } from "./components/surpresas/surpresas";
import { HeroRomanticoComponent } from "./components/hero/hero";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Morcegos, GaleriaComponent, CartaComponent, SurpresasComponent, HeroRomanticoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'meu-morcego';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.html',
  styleUrls: ['./carta.css'],
  imports: [CommonModule]
})
export class CartaComponent {
  mostrarCarta = false;
}
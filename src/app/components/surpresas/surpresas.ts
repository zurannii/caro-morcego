import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surpresas',
  templateUrl: './surpresas.html',
  styleUrls: ['./surpresas.css'],
  imports: [CommonModule]
})
export class SurpresasComponent {
  mostrarSegredo = false;
  mostrarMemoria = false;
}
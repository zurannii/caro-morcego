import { Component, AfterViewInit } from '@angular/core';
import { ativarScrollReveal } from './galeria-scroll';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class GaleriaComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ativarScrollReveal();
  }
}


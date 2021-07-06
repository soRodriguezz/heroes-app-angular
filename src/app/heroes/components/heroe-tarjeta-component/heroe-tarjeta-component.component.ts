import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta-component.component.html'
})
export class HeroeTarjetaComponentComponent  {

  @Input() heroe!: Heroe;  

}

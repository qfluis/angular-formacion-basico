import { Component} from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  personajes:Personaje[] = [
    {nombre:"Goku", poder:15000},
    {nombre:"Vegeta", poder:7500}
  ];

  nuevo: Personaje = {
    nombre:'Trunks',
    poder:5000
  }

}

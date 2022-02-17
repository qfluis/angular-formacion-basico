import { Component} from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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

  agregarNuevoPersonaje( argumento:Personaje) {
    console.log("holis");
    console.log("UwU");
    this.personajes.push(argumento);
  }

  constructor( private dbzService: DbzService) { }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
 heroe_borrado: string;

 borrarHeroe(): void {
   console.log('borrando');
   this.heroe_borrado = this.heroes.pop() ||  '';

 }

}

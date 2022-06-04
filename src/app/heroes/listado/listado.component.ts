import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[]=['Spiderman','IronMan', 'Hulk','Thor'];
  heroeborrado:string='';
  borrarHeroe(){
    this.heroeborrado = this.heroes.shift()||'';
  }
}
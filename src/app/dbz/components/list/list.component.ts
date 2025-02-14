import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false // Configura como no independiente
})
export class ListComponent {




  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();


  // onDelete = Index value :number

  onDeleteCharacter(id?:string):void{
    // si no tiene un id nunca lo manda a llamar 
    if(!id) return;

    // Emitit el ID del personaje
    this.onDelete.emit(id);



  }

}

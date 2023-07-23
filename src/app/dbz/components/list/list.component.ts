import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Charater } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter()

  @Input()
  public charaterList:Charater[] = [{
    name:'Trunks',
    power:10
  }]

  onDeleteCharacter(id?:string):void{
    if(!id) return
    this.onDelete.emit(id)
  }
}

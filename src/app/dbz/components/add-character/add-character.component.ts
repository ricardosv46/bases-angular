import { Component, EventEmitter, Output } from '@angular/core';
import { Charater } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Charater> = new EventEmitter()

  public character:Charater = {
    name:'',
    power:0
  }
  emitCharacter():void{
    if(this.character.name.length === 0) return
    this.onNewCharacter.emit({...this.character})

    this.character={name:'',power:0}
  }
}

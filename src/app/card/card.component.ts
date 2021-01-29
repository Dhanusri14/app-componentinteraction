import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() datafromParent:any;
  count:number=0;
  @Output() 
  myEvent=new EventEmitter();
  sendDataToParent(){
    this.myEvent.emit(this.count++);
  } 
}

import { Component, Input, Output,EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './ngbd-modal-basic.component.html',
  styleUrls: ['./ngbd-modal-basic.component.css']
})
export class NgbdModalBasicComponent {

  closeResult = '';

  @Input() dataforModal:any;

  constructor(private modalService: NgbModal) {}

  count:number=0;
  @Output() 
  myEvent=new EventEmitter();
  sendDataToParent(){
    this.myEvent.emit(this.count++);
  } 

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

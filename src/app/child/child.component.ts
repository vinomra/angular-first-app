import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('title') childTitle:string="Default Title";
 @Input('items') things:string[]=["thing1","thing2","thing3"];
 style:string="style1";
 @Output('send')emitter:EventEmitter<string>=new EventEmitter<string>();
 item:string;
  constructor() { }

  ngOnInit() {
  }
  changeColor()
  {
    this.style=this.style=="style1"?"style2":"style1";
  }
  sendParent()
  {
    this.emitter.emit(this.item);
  }
}

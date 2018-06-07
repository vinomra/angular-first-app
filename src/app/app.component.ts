import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 first day training ';
  childtitles:string[]=["vegetables","Fruits","Spices","Stationariess"];
  items:string[][]=[["onion","Potato","Tomato","Brinjal","Chilli"]
  ,["Apple","Banana","Cherry","Grapes","Mango"],["Cardamon","cinaamon","cloves","pepper"],["Pen","Apper","Book","Sharperner"]]

handleChildData(data,childCount){
  this.items[childCount].push(data);
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Suraj Suryavanshi';

  imgUrl:string='../../assets/img.jpg';
  isHidden:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string='success';
  rating:number=6;
  isError:boolean=true;
  isSpecial:boolean=true;

  jsonObj={
    'success':!this.isError,
    'danger' : this.isError,
    'special' :this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
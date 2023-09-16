import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  isclick:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(!this.isclick){
      console.log("Click Event Occur...")
      this.isclick=true;
    }
    
  }

  onImg(){
    console.log("on Image Click")
  }

  onSend(myevent:any){
    console.log(myevent);
    console.log("==>>"+ myevent.target.value)
  }

  onSend1(myname:any){
    console.log(myname)
    console.log(myname.value)
    myname.style.background='green';
    myname.style.color='white';
    myname.value='';
  }

  onSend2(myvalue:string){
    console.log(myvalue)
  }

  result=0;
  res:any=0;

  onAddition(num1:any,num2:any){
    
    let n1=+num1;
    let n2=+num2;
    
    // this.result=num1+num2;  shows concationtion 
    this.result=n1+n2;
  }

  onChange(){
    console.log("Change event Occur...")
  }

  onKeyUp(data:any){
    console.log("Key up Event...");

    if(data.value.length>6){
      alert("Ur char is exceed")
    }


  }

  onKeyDown(){
    console.log("key down event occur...")
  }
}

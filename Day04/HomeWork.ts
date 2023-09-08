export class Student{

    rollNo    : number;
    firstname : string;
    lastname  : String;
    marks     : number;

    constructor (rollNo : number , firstname : string ,lastname : string, marks : number){
                    this.rollNo=rollNo;
                    this.firstname=firstname;
                    this.lastname=lastname;
                    this.marks=marks;
    }

    getDeatailsOfStudent(){
console.log(`
    RollNo       :: ${this.rollNo} ,
    First Name   :: ${this.firstname} ,
    Last Name    :: ${this.lastname},
    Marks        :: ${this.marks}
`)
    }
  
    
 }
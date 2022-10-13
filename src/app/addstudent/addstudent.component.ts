import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  cname=""
  rollNum=""
  admissionNumber=""
  pname=""
  dob=""
  address=""
  mNumber=""
  pnum=""
  email=""
  blood=""

  readValue=()=>{
    let data={
      "name":this.name,
      "cname":this.cname,
      "rollNum":this.rollNum,
      "admissionNumber":this.admissionNumber,
      "pname":this.pname,
      "dob":this.dob,
      "address":this.address,
      " mNumber":this.mNumber,
      " pnum":this.pnum,
      "email":this.email,
      "blood":this.blood

    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}

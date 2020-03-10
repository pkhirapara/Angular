import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:any;
  password:any;
  email:any;
  mobile:number;
  country:any;
  city:any;
  textarea:any;

  constructor() { }  

  ngOnInit() { }

  Submit(data: any){
    console.log(data)
  }
}

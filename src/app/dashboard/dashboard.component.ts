import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

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

  constructor(private service:CommonService) { }  

  ngOnInit() { 
    this.getData()
  }

  Submit(data: any){
    console.log(data)
  }

  getData(){
    this.service.getData().subscribe(data=>{
      console.log(data)
    })
  }
}

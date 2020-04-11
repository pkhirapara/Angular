import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  result:any;
  name:any;
  email:any;
  mob:any;
  obj:any;
  id:any;
  isHidden=false;
  constructor(private service:CommonService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getData().subscribe(data=>{
      this.result=data['data'];
      // console.log(data)
    })
  }

  edit(i:any,x:any){
    console.log(x.name)
    this.name=x.name;
    this.email=x.email;
    this.mob=x.mob;
    this.id=x._id


    // console.log(i,"index",x,"data")
  }


  update(){
    this.obj={
      id:this.id,
      username:this.name,
      email:this.email,
      mobile:this.mob
    }

    this.service.edit(this.obj).subscribe(data=>{
      if(data['status']) {
        this.getData()
       this.isHidden=true;
      }else{
        alert(data['message'])
      }
    })
  }

  deletedata(i:any,x:any){
    this.obj={
      id:x._id
    }
    this.service.deleteData(this.obj).subscribe(data=>{
      console.log(data)
      if(data['status']){
        this.getData()
        alert(data['message'])
      }else{
        alert(data["message"])
      }
    })
  }
}

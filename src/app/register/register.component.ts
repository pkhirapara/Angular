import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any;
  name:any;
  mobile:any
  value:any;
  password:any;
  obj:any;


  constructor(private service:CommonService) { }

  ngOnInit() {
  }
  Submit(data: any){
    console.log(data)
  }

  registerDetails(){
    this.obj={
      
      email:this.email,
      username:this.name,
      mobile:this.mobile,
      password:this.password
    }
    this.service.registerData(this.obj).subscribe(data=>{
      console.log(data)
      alert(data['message'])
    })

  }

  getData(){
    this.service.getData().subscribe(data=>{
      console.log(data)
    })
  }

}

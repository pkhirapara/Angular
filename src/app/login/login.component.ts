import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {CommonService} from "../common.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:any;
  password:any;
  obj:any;

  constructor(private router:Router,private service:CommonService) { }

  ngOnInit(){  }

   login(){
    this.obj={
      username:this.username,
      password:this.password
    }
    this.service.login(this.obj).subscribe(data=>{
      console.log(data)
      if(data['status']){
        this.router.navigate(['dashboard'])
      }else{
        alert(data['message'])
      }
    })
  }

}

/*
sessStorage store value in key pair
setItem() has two parameter
1,key
2,value
*/
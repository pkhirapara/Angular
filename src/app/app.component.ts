import { Component ,OnInit} from '@angular/core';
import {CommonService} from "./common.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result:any;
  name:any;
  // arr:any=[
  //   {name:"pankaj",class:"bca",roll:868},
  //   {name:"gghjh",class:"bca",roll:868},
  //   {name:"jhjh",class:"bca",roll:868},
  //   {name:"dfds",class:"bca",roll:868},
  //   {name:"dsfds",class:"bca",roll:868},
  //   {name:"dsfsdf",class:"bca",roll:868},
  //   {name:"ewdew",class:"bca",roll:868},
  //   {name:"xcxv",class:"bca",roll:868},
  //   {name:"sdsf",class:"bca",roll:868},
  //   {name:"dsf",class:"bca",roll:868},
  //   {name:"sdfds",class:"bca",roll:868},
  //   {name:"dc",class:"bca",roll:868},
  //   {name:"sdds",class:"bca",roll:868},
  // ]
  constructor(private service:CommonService){}
  ngOnInit(){
    this.getListCountries();
  }
  getListCountries(){
    this.service.getList().subscribe(data=>{
      console.log(data)
      this.result=data

    })
  }


}

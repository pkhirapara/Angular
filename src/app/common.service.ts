import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn:'root'
})

export class CommonService{
  /*
  HttpClient is introduced in angular 4
  HttpClient is more easier and flexible in use as compare to http
  no need to parse the response in json
  httpclient automatically convert the request and response in json
  */
  constructor(private httpClient:HttpClient){}

  registerData(obj:any){
    return this.httpClient.post("http://localhost:3000/registerdata",obj)
  }
  login(obj:any){
    return this.httpClient.post("http://localhost:3000/login",obj)
  }
}
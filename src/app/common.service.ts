import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class CommonService{

  constructor(private htppService:HttpClient){ }


  getList(){
    return this.htppService.get("https://www.restcountries.eu/rest/v2/all");
  }
}

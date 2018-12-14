import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthProvider{
    header: HttpHeaders;
    constructor(public http: HttpClient){
        this.header = new HttpHeaders;
        this.header =  this.header.append('Content-type','application/json');
        this.header =  this.header.append('Accept','application/json');
    }
    all(){
        let url ='/ads/user/_search';
        return this.http.get(url,{headers:this.header});
    }
    add(users){
    let url ='/ads/user/'+users.id;
    return this.http.post(url,{"name":users,"email":users.eamil},{headers: this.header});       
    }
}
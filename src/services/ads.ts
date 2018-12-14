import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AdsProvider{
    header: HttpHeaders;
    constructor(public http: HttpClient){
        this.header = new HttpHeaders;
        this.header =  this.header.append('Content-type','application/json');
        this.header =  this.header.append('Accept','application/json');
    }
    allAds(){
        return this.http.get('/json/ads.json');
    }
}

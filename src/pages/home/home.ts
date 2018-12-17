import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdsProvider } from "../../services/ads";
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { FiltersPage } from '../filters/filters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
adsliste:any;
FilterPage :Page ;

  constructor(public navCtrl: NavController ,private ads: AdsProvider ) {
    this.ads.allAds().subscribe((adsTabel:any)=>
            {

                this.adsliste = adsTabel;

        });
        this.FilterPage = FiltersPage;
  }
  pushFilter(){
    this.navCtrl.push(FiltersPage);
  }
 onSearch(event){
   console.log(event.target.value);
 }
 doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.ads.allAds().subscribe((adsTabel:any)=>
  {

      this.adsliste = adsTabel;
      refresher.complete();
});
 
}

doInfinite(infiniteScroll) {
 
  this.ads.allAds().subscribe((adsTabel:any)=>
  {

      this.adsliste = this.adsliste.concat(adsTabel);
      infiniteScroll.complete();
});
  
}

}

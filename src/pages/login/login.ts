import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../registered/registered';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../services/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm:FormGroup;
  userList:any;
  name : String;
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private user : AuthProvider,private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      id:['',[Validators.required,Validators.min(1)]],
      name:['',Validators.required],
      email:['',Validators.email]
 
    });
    this.user.all().subscribe((userTabel:any)=>
    {

        this.userList = userTabel.hits.hits;
        console.log(this.userList);
   
});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  pushRegister(){
    this.navCtrl.push(RegisterPage);
    this.testLogin();
  }
  testLogin(){
    //
    for(let user of this.userList){
      this.id = user._id
      if(this.name == this.id){
        console.log(true);
        break;
      }
      else{
        console.log(false);
        break;
      }
     
    }
   
  }

}

import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../services/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'registered.html'
})
export class RegisterPage {
    registerForm:FormGroup;
  constructor(public navCtrl: NavController,private alertCtrl : AlertController,private user : AuthProvider,private formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
        id:['',[Validators.required,Validators.min(1)]],
        name:['',Validators.required],
        email:['',Validators.email]
   
      });
  }
  addUser(){
    this.user.add(this.registerForm.value).subscribe((result:any)=>{
      //alert(result);
      let alert = this.alertCtrl.create({
        title: 'Thank You !',
        subTitle: 'Contact form successfully submitted. Thank you, We will get back to you soon!',
        buttons: ['OK']
      });
      alert.present();
    });
  }
}

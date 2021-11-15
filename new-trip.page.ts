import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage implements OnInit {

  form : FormGroup

  constructor(private alertController : AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      destination : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      why : new FormControl(null, {
        updateOn :'blur',
        validators: [Validators.maxLength(200)]
      }),
      from : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required]
      }),
      to : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required]
      }),
      airline : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required]
      })
    })
  }

  onSubmitNewTrip(){
    console.log(this.form);

    if (this.form.invalid){
      console.log('invalid')
     this.presentAlert('Error!! all values are needes');
    }else {
      this.presentAlert('Have a nice trip to ' + this.form.get('destination').value );

    }
  }


  async presentAlert(msg:string){
   const alert = await this.alertController.create({
      message: msg,
      buttons: [{
      text:'Cancel'
    }]
    })
    await alert.present();

}
}

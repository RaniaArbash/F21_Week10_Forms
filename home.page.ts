import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onSubmit(form: NgForm){
    console.log(form);
    if (form.valid){
      // authentication process
      this.router.navigate(['/new-trip']);
    }
  }
}

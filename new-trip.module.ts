import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewTripPageRoutingModule } from './new-trip-routing.module';

import { NewTripPage } from './new-trip.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewTripPageRoutingModule
  ],
  declarations: [NewTripPage]
})
export class NewTripPageModule {}

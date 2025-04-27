import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ListComponent } from './list/list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ListComponent,
    InscriptionComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule
  ]
})
export class ParticipantModule { }

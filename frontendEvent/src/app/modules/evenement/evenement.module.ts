import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CalenderComponent } from './calender/calender.component';


@NgModule({
  declarations: [
    ListEventComponent,
    AddEventComponent,
    CalenderComponent,

  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,

  ]
})
export class EvenementModule { }

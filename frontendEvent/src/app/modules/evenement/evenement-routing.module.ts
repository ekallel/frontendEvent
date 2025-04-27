import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  { path: 'listevent', component: ListEventComponent },
  { path: 'addevent', component: AddEventComponent },
  { path: 'calender', component: CalenderComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
